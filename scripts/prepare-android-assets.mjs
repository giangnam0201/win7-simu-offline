import { copyFile, mkdir } from 'node:fs/promises';

const icon = new URL('../icon-192.png', import.meta.url);
const resources = new URL('../resources/', import.meta.url);
const filenames = ['icon.png', 'icon-only.png', 'icon-foreground.png', 'splash.png', 'splash-dark.png'];

await mkdir(resources, { recursive: true });
for (const filename of filenames) {
    await copyFile(icon, new URL(filename, resources));
}
