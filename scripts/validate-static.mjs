import { readFileSync, readdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createHash } from 'node:crypto';

const manifest = readdirSync('.').find(n => /^precache-manifest\..+\.js$/.test(n));
const context = { self: {} };
vm.runInNewContext(readFileSync(manifest, 'utf8'), context);
for (const asset of context.self.__precacheManifest) {
    if (asset.url.startsWith('/') || !existsSync(asset.url)) throw new Error(`Missing or absolute asset: ${asset.url}`);
    if (createHash('md5').update(readFileSync(asset.url)).digest('hex') !== asset.revision) throw new Error(`Stale asset checksum: ${asset.url}`);
    if (asset.url.endsWith('.js') && asset.url.startsWith('js/')) new vm.Script(readFileSync(asset.url, 'utf8'), { filename: asset.url });
}
for (const name of ['shim.js', 'service-worker.js']) new vm.Script(readFileSync(name, 'utf8'), { filename: name });
const index = readFileSync('index.html', 'utf8');
for (const [, src] of index.matchAll(/<script[^>]+src="([^"]+)"/g)) {
    if (!existsSync(src)) throw new Error(`Missing entry script: ${src}`);
}
if (index.indexOf('shim.js') > index.indexOf('js/app.')) throw new Error('Shim must run first');
console.log(`Validated ${context.self.__precacheManifest.length} local assets and bundled JavaScript syntax`);
