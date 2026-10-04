"""Download a pinned upstream precache manifest without touching custom patches.

Usage: python scripts/download-upstream.py MANIFEST_URL
Downloads into .upstream/ for review before integration. Requires curl.
"""
import concurrent.futures
import json
import pathlib
import subprocess
import sys
import urllib.parse

ROOT = pathlib.Path(__file__).resolve().parents[1]
STAGE = ROOT / '.upstream'
STAGE.mkdir(exist_ok=True)


def download(url, target):
    target.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(['curl', '-LfSs', '--retry', '3', '--connect-timeout', '20',
                    '--max-time', '120', url, '-o', str(target)], check=True)


def parse(text):
    return json.loads(text[text.index('.concat(') + 8:text.rindex(')')])


def main():
    url = sys.argv[1]
    download(url, STAGE / 'precache.js')
    assets = parse((STAGE / 'precache.js').read_text(encoding='utf-8'))
    previous = next(ROOT.glob('precache-manifest.*.js'), None)
    old = {item['url'].lstrip('/'): item.get('revision')
           for item in parse(previous.read_text(encoding='utf-8'))} if previous else {}
    pending = []
    for item in assets:
        name = item['url'].lstrip('/')
        if '..' in pathlib.PurePosixPath(name).parts:
            raise ValueError(name)
        if name not in old or old[name] != item.get('revision') or not (ROOT / name).exists():
            pending.append((urllib.parse.urljoin(url, item['url']), STAGE / name))
    print(f'Downloading {len(pending)} changed or missing assets', flush=True)
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        futures = [pool.submit(download, *item) for item in pending]
        for count, future in enumerate(concurrent.futures.as_completed(futures), 1):
            future.result()
            if count % 100 == 0:
                print(f'{count}/{len(pending)} downloaded', flush=True)
    (STAGE / 'source.json').write_text(json.dumps({'manifest': url, 'assets': assets}, indent=2))
    print('Download complete. Assets staged in .upstream/', flush=True)


if __name__ == '__main__':
    main()
