# Update and maintenance guide

The checked-in snapshot is recorded in [upstream-version.json](upstream-version.json). The web app is a compiled asset bundle. Keep project tooling in `scripts/`, keep the offline shim and service worker at the web root, and leave generated assets in their ignored directories.

## Updating the upstream snapshot

1. Obtain an authorized snapshot and identify the exact precache manifest for the target version. The live service worker can point to a newer release, so verify the version before staging files.
2. Run `python3 scripts/download-upstream.py MANIFEST_URL` from the repository root. This stages changed or missing files under `.upstream/`.
3. Inspect the staged manifest and changed JavaScript chunks before running `python3 scripts/integrate-upstream.py`. Review the resulting diff, including the entry scripts, embedded workers, offline cache revision, and version metadata.
4. Run `npm test`, `npm run build`, and the browser checks below. Check that the source tree and packaged build start correctly with external requests blocked.

Keep `shim.js` ahead of the application scripts. Preserve existing IndexedDB data when testing an upgrade. Since 4.7.0, the application creates and migrates its own system and user folders. The local service worker caches assets relative to its own scope, including when the app is served from a subpath.

## Browser checks

From the repository root, start `python3 scripts/serve.py` in one terminal. In another, run the browser smoke test with Playwright installed and a supported browser channel available:

```sh
node scripts/smoke-browser.cjs
```

The default channel is Microsoft Edge. Set `BROWSER_CHANNEL` to select an installed Playwright-supported channel, and `PLAYWRIGHT_MODULE` if Playwright is installed outside Node’s normal module search path. Pass `--http-only` in environments where browser policy blocks local-file navigation.

The test checks Guest sign-in and the Computer window in the source and packaged builds, and checks that the packaged desktop reloads offline using the service worker. The default run also checks direct local-file startup. Screenshots are written to `.upstream/`.

## Native release assets

Run `npm run prepare:android` before Capacitor asset generation. It creates the ignored Android icon and splash inputs in `resources/` from `icon-192.png`. The [release workflow](.github/workflows/build.yml) contains the complete Windows and Android packaging commands.
