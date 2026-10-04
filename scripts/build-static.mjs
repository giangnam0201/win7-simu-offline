import { readFile, readdir, mkdir, cp } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = (await readdir(root)).find(name => /^precache-manifest\..+\.js$/.test(name));
const text = await readFile(path.join(root, manifest), 'utf8');
const assets = JSON.parse(text.slice(text.indexOf('.concat(') + 8, text.lastIndexOf(')')));
const files = new Set([...assets.map(a => a.url), manifest, 'service-worker.js',
    'shim.js', 'system.zip', 'user.zip', 'pdfjs', 'solitaire', 'assets', 'draco', '.nojekyll', 'CNAME', 'upstream-version.json']);
await mkdir(path.join(root, 'dist'), { recursive: true });
for (const file of files) {
    if (path.isAbsolute(file) || file.split('/').includes('..')) throw new Error(`Unsafe asset: ${file}`);
    await mkdir(path.dirname(path.join(root, 'dist', file)), { recursive: true });
    await cp(path.join(root, file), path.join(root, 'dist', file), { recursive: true });
}
console.log(`Packaged ${files.size} asset entries into dist/`);
