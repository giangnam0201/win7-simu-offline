"""Apply the repository's offline patches to the staged upstream build."""
import base64
import hashlib
import json
import pathlib
import re
import shutil

ROOT = pathlib.Path(__file__).resolve().parents[1]
STAGE = ROOT / '.upstream'


def main():
    source = json.loads((STAGE / 'source.json').read_text())
    assets = source['assets']
    names = {a['url'].lstrip('/') for a in assets}
    old_manifest = next(ROOT.glob('precache-manifest.*.js'))
    old = old_manifest.read_text(encoding='utf-8')
    old_assets = json.loads(old[old.index('.concat(') + 8:old.rindex(')')])
    # Remove only files owned by the previous upstream manifest.
    for item in old_assets:
        name = item['url'].lstrip('/')
        if name not in names and '/' in name and not name.startswith(('pdfjs/', 'solitaire/')) and (ROOT / name).is_file():
            (ROOT / name).unlink()
    for item in assets:
        name = item['url'].lstrip('/')
        if name == 'index.html':
            continue
        if (STAGE / name).exists():
            (ROOT / name).parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(STAGE / name, ROOT / name)

    version = None
    for name in sorted(names):
        if not name.startswith('js/'):
            continue
        path = ROOT / name
        text = path.read_text(encoding='utf-8')
        match = re.search(r'JSON.parse\(\'\{"a":"(\d+\.\d+\.\d+)"\}', text)
        if match:
            version = match[1]
        text = re.sub(r'\.p="/?"', '.p=(typeof document!=="undefined"?new URL(".",document.baseURI).href:"")', text)
        text = text.replace('"/service-worker.js"', '"service-worker.js"')
        text = re.sub(r'useCaptcha\(\)\{return[^}]+\}', 'useCaptcha(){return!1}', text)
        text = text.replace('"https://cdn.jsdelivr.net/gh/Visnalize/win7-simu@main/news/feed.json"', '""')
        # The upstream domain check must allow local and packaged deployments.
        text = re.sub(r'=\(\)=>\w+\(\)\|\|\w+\.some\(\w+=>location.hostname.includes\(\w+\)\)', '=()=>!0', text)
        text = re.sub(r'unlockedThemes:\[\],showAds:![^,]+,',
                      'unlockedThemes:["all"],showAds:!1,', text)
        text = re.sub(r'async hasActivePurchase\((\w+)\)\{',
                      r'async hasActivePurchase(\1){return!0;', text)
        text = re.sub(r'isLocked\((\w+)\)\{return!this.unlockedThemes.includes\(',
                      r'isLocked(\1){return!this.unlockedThemes.includes("all")&&!this.unlockedThemes.includes(', text)
        # Bundled DOM helpers are duplicated across several lazy chunks.
        text = re.sub(r'return (\w+)\?\1.classList.contains\((\w+)\)\?\1:"down"===(\w+)\?\1.querySelector\(\2\):\1.closest\(\2\):null',
                      r'return \1&&\1.nodeType===1?\1.classList.contains(\2.slice(1))?\1:"down"===\3?\1.querySelector(\2):\1.closest(\2):null', text)
        if '/about.' in name:
            text = text.replace('t._s(t.version)', 't._s(t.version)+" (Offline Patched)"')
            text = text.replace(' Win7 Simu is an app built by Visnalize',
                                ' Win7 Simu Offline patched by giangnam0201 & Antigravity. Original app built by Visnalize')
        if '/assistive-panel.' in name:
            start = text.index(',{text:"Manage billing"')
            end = text.index('],shareNetworks:', start)
            text = text[:start] + ',{text:"Download app",icon:"github",click:()=>this.openLink("https://github.com/giangnam0201/win7-simu-offline/releases")},{text:"Project Source",icon:"code",click:()=>this.openLink("https://github.com/giangnam0201/win7-simu-offline")}' + text[end:]
            start = text.index(',s("fieldset",{staticClass:"mb-6 border-0"}')
            end = text.index('])]):e._e()', start)
            text = text[:start] + text[end:]
        path.write_text(text, encoding='utf-8')
    if not version:
        raise RuntimeError('Could not identify upstream version')
    entry = next(n for n in names if re.fullmatch(r'js/app\.[a-f0-9]+\.js', n))
    index = (ROOT / 'index.html').read_text(encoding='utf-8')
    index = re.sub(r'js/app\.[a-f0-9]+\.js', entry, index)
    (ROOT / 'index.html').write_text(index, encoding='utf-8')
    shim = (ROOT / 'shim.js').read_text(encoding='utf-8')
    for kind in ['chess', 'compression', 'conversion']:
        worker = next(n for n in names if re.fullmatch(r'js/' + kind + r'\.[a-f0-9]+\.worker\.js', n))
        data = base64.b64encode((ROOT / worker).read_bytes()).decode()
        shim = re.sub(r'const ' + kind + r'WorkerBase64 = "[^"]*";',
                      'const ' + kind + 'WorkerBase64 = "' + data + '";', shim)
        shim = re.sub(kind + r'\.[a-f0-9]+\.worker\.js', pathlib.PurePosixPath(worker).name, shim)
    (ROOT / 'shim.js').write_text(shim, encoding='utf-8')
    for name in ['package.json', 'src-tauri/tauri.conf.json']:
        path = ROOT / name
        data = json.loads(path.read_text())
        (data['package'] if name.startswith('src-tauri') else data)['version'] = version
        path.write_text(json.dumps(data, indent=2) + '\n')
    # Use checksums of patched files so hosted upgrades invalidate the right cache entries.
    extras = {p.relative_to(ROOT).as_posix() for directory in ['pdfjs', 'solitaire']
              for p in (ROOT / directory).rglob('*') if p.is_file()}
    # Git and the Linux release runner use LF. Hash those same bytes locally.
    for name in names | extras | {'shim.js'}:
        path = ROOT / name
        if path.suffix in {'.js', '.mjs', '.css', '.html', '.svg', '.json', '.webmanifest', '.txt'}:
            raw = path.read_bytes()
            normalized = raw.replace(b'\r\n', b'\n')
            if normalized != raw:
                path.write_bytes(normalized)
    cache = [{'url': n, 'revision': hashlib.md5((ROOT / n).read_bytes()).hexdigest()}
             for n in sorted(names | extras | {'shim.js', 'system.zip', 'user.zip', 'favicon.ico', 'icon-192.png', 'splash-logo.png'})]
    manifest_name = pathlib.PurePosixPath(source['manifest']).name
    revision = hashlib.sha256(json.dumps(cache, sort_keys=True).encode()).hexdigest()
    (ROOT / manifest_name).write_text('self.__offlineBuildRevision = "' + revision + '";\nself.__precacheManifest = (self.__precacheManifest || []).concat(' + json.dumps(cache, indent=2) + ');\n')
    if old_manifest.name != manifest_name:
        old_manifest.unlink()
    worker = (ROOT / 'service-worker.js').read_text(encoding='utf-8')
    worker = re.sub(r'precache-manifest\.[a-f0-9]+\.js', manifest_name, worker)
    if (ROOT / 'service-worker.js').read_text(encoding='utf-8') != worker:
        (ROOT / 'service-worker.js').write_text(worker, encoding='utf-8')
    (ROOT / 'upstream-version.json').write_text(json.dumps({'version': version, 'source': 'https://win7simu.visnalize.com/', 'manifest': source['manifest']}, indent=2) + '\n')
    print(f'Integrated Win7 Simu {version}: {len(names)} upstream assets')


if __name__ == '__main__':
    main()
