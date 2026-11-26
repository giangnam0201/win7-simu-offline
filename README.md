# Win7 Simu Offline

Run Visnalize’s browser-based Windows 7 simulator from local files. This repository packages the compiled web app and the assets needed to start the Guest desktop without an Internet connection. The bundled upstream snapshot is **4.8.1**.

## Run locally

Open `index.html` in a browser that permits local-file navigation. To use a local server instead, run this from the repository root with Python 3:

```sh
python3 scripts/serve.py
```

Open `http://localhost:8080/` and select the Guest avatar. The simulator stores its virtual filesystem in the browser, so subsequent sessions at the same address can reuse it.

## Validate and build

With an LTS version of Node.js and npm, run:

```sh
npm test
npm run build
```

These commands need no npm dependency install. The first verifies local asset checksums and JavaScript syntax. The second creates `dist/`, the web payload shared by GitHub Pages, Windows (Tauri), and Android (Capacitor). With the local server running, open `http://localhost:8080/dist/` to try the package.

- [GitHub Releases](https://github.com/giangnam0201/win7-simu-offline/releases) provides Windows and Android downloads.
- [Update and maintenance guide](UPDATE_GUIDE.md) covers browser smoke tests, native packaging inputs, and upstream updates.

## Credits

[Visnalize](https://visnalize.com/win7simu) created Win7 Simu. giangnam0201 and Antigravity maintain the offline adaptation. This project is independent of Microsoft.
