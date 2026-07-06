# Win7 Simu Offline - AI Upgrade & Maintenance Guide

This document is a comprehensive guide for future AI agents or developer assistants to upgrade and patch new versions of the Windows 7 Simulator (`win7simu.visnalize.com`) to run locally, offline, and with all premium features unlocked on the `file://` protocol.

---

## 1. Architectural Overview

`win7-simu-offline` is a compiled static web application. It runs purely on the client side without a web server.
* **Core Entrypoint**: `index.html`
* **Core Shim**: `shim.js` (must be loaded as the very first script in the `<head>`). It overrides native APIs (`fetch`, `XMLHttpRequest`, `Worker`, `localStorage`, `console.error`) to mock Firebase, analytics, external ad providers, and local assets.
* **Virtual Drive (IndexedDB)**: The simulator stores a virtual Windows filesystem inside IndexedDB. On the first launch, it fetches `system.zip` and `user.zip` to populate the directory structure.

---

## 2. Step-by-Step Upgrade Workflow

When upgrading the simulator to a newer version (e.g., from `4.5.0` to a future release):

### Step 1: Clean and Merge Assets
1. Discard/replace all CSS, JS, and image assets in the repository with the new release assets.
2. Keep the following custom files intact:
   * [shim.js](file:///C:/Users/Nam/Downloads/win7-simu-offline/shim.js) (the core injection shim)
   * [system.zip](file:///C:/Users/Nam/Downloads/win7-simu-offline/system.zip) (pre-packaged OS structure)
   * [user.zip](file:///C:/Users/Nam/Downloads/win7-simu-offline/user.zip) (pre-packaged Guest user folder)
   * [solitaire/](file:///C:/Users/Nam/Downloads/win7-simu-offline/solitaire/) (standalone solitaire game backup, if applicable)

### Step 2: Inject the Shim in `index.html`
Modify the new `index.html` to load `shim.js` at the top of the `<head>`:
```html
<head>
    <meta charset="utf-8">
    <script src="shim.js"></script>
    ...
```

### Step 3: Remove External Tracking & Ads in `index.html`
Search for and delete the following elements from `index.html`:
* Google Tag Manager scripts (`googletagmanager.com`, `gtag.js`)
* Google Adsense script tags (`adsbygoogle.js`)
* External tracking cookies or consent drawers
* The `<link rel="manifest" href="manifest.json">` tag (manifest files cause issues under `file://` protocol in some browsers).

---

## 3. Essential Patches & Logic to Maintain

Whenever code is updated, the compiled Vue chunks will change names (e.g. `vue-store.8949c1b8.js` to `vue-store.[new_hash].js`). Use search-and-replace to find the patterns and apply the following patches:

### Patch A: Premium Entitlements & Subscription Bypasses
* **Vuex State Override**: In the main `vue-store` store script, default values for theme and ad states must be patched:
  ```javascript
  // Change
  showAds: true, unlockedThemes: []
  // To
  showAds: false, unlockedThemes: ["all"]
  ```
* **Billing check (`hasActivePurchase`)**: Locate the `hasActivePurchase` method in the Vue chunks (billing logic or vuex actions) and force it to return `true` instantly.
* **Testmode override**: Search for `subscribed` getter intercepts and force them to return `true`.

### Patch B: Safe DOM Traversal (`classList.contains` / `closest`)
When ads are disabled, Vue renders empty comments `<!---->` instead of the ad containers. When the layout tries to search for the parent window containers using the class `.window__main`, it encounters these comment nodes.
* **Problem**: Comment nodes lack `classList`, `closest`, and `querySelector`, causing crashes during traversal.
* **Fix**: In the DOM helper query functions (often located in `d519` module), patch the traversal method to verify elements before executing functions:
  ```javascript
  // Before
  function o(t,e="up"){return t?t.classList.contains(s)?t:"down"===e?t.querySelector(s):t.closest(s):null}
  
  // After (safe checking classList, closest, and querySelector)
  function o(t,e="up"){return t&&t.classList&&t.closest&&t.querySelector?t.classList.contains(s)?t:"down"===e&&t.querySelector?t.querySelector(s):t.closest?t.closest(s):null:null}
  ```

### Patch C: Web Worker Protocol (CORS) Bypass
Browsers block constructing Web Workers from local `file://` paths. 
* **Fix**: Inline the worker scripts directly into `shim.js` as Base64 strings. Override `window.Worker` to intercept local JS files, parse them to a `Blob`, and instantiate the worker using a `Blob URL`:
  ```javascript
  const OriginalWorker = window.Worker;
  class PatchedWorker extends OriginalWorker {
      constructor(scriptURL, options) {
          let finalUrl = scriptURL;
          // ... extract filename and check against inlined Base64 scripts ...
          const blob = new Blob([bytes.buffer], { type: 'application/javascript' });
          finalUrl = URL.createObjectURL(blob);
          super(finalUrl, options);
      }
  }
  window.Worker = PatchedWorker;
  ```

### Patch D: Auto-Healing Guest Folder Initializations
If a user upgrades the app but already has a local virtual drive from an older version in IndexedDB, the initial filesystem format script will not run. This causes the newly required directories (e.g. `Users/Guest/Desktop`) to be missing, resulting in `Folder does not exist` crashes.
* **Fix**: In the filesystem initialization logic (`init()` in `vue-store` chunk), check if the Guest Desktop exists. If it does not, invoke the unpack function for `user.zip` dynamically:
  ```javascript
  async init() {
      const t = Object.keys(await _(o["h"], o["b"].External)).length > 0;
      if (t) {
          try {
              await E.readdir({path: await this.getDesktopPath()});
          } catch(e) {
              await this.generateFrom("/user.zip", "Users/Guest");
          }
      } else {
          // ... format and unpack system.zip & user.zip normally ...
      }
  }
  ```

### Patch E: Assistive Controls Menu Customization
The assistive panel should be streamlined for local offline releases.
* **File**: `js/assistive-panel.[hash].js`
* **Requirements**:
  * Keep only 6 buttons: `Shortcut keys`, `Go fullscreen`, `Hide assistive`, `Quick install`, `Download app` (pointing to releases repo), and `Project Source` (pointing to main repo).
  * Remove sections/buttons for billing management, mobile app stores, homepage visits, feedback, and **"Share this website"** network links.

### Patch F: Custom About Window Text
* **File**: `js/about.[hash].js`
* **Requirements**:
  * Update the version line: `Version X.Y.Z (Offline Patched)`
  * Append credit text:
    `Win7 Simu Offline Patched by giangnam0201 & Antigravity (Removed Ads & Premium). Original app built by Visnalize. entertainment purposes only. It is in no way associated with Microsoft.`

---

## 4. Testing & Verification

Before committing upgrades, check the browser console for:
1. `SecurityError: Failed to construct 'Worker'` $\rightarrow$ Indicates a new Worker file was introduced and must be inlined in `shim.js`.
2. `Error: Folder does not exist` $\rightarrow$ Checks if system files or user assets are missing in IndexedDB.
3. `TypeError: Cannot read properties of undefined` $\rightarrow$ Traversal crash. Check if a DOM node traversal function needs safe class list guard blocks.
