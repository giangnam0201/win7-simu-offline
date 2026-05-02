# Win7 Simu - Offline & Premium Unlocked

A 100% offline-functional and fully unlocked version of the Win7 Simu application.

## Features
- **Removed Ads**: All ad-tracking and display mechanisms have been neutralized.
- **Premium Unlocked**: All premium themes (Win8, Win10, MacOS, Ubuntu, etc.) and features are unlocked by default.
- **Offline Parity**: No network connection required. All assets are served locally.
- **Virtual Filesystem Support**: Includes local `system.zip` for core application functionality.

## Credits
- **Original App**: [Visnalize](https://visnalize.com/win7simu)
- **Offline Patch & Premium Unlock**: giangnam0201 & Antigravity

## Technical Details
- **Protocol Compatibility**: Patched Webpack chunk loader to support `file://` protocol.
- **API Shimming**: Custom `shim.js` for mocking Firebase, Google Analytics, and AdSense.
- **State Injection**: Vuex store defaults modified to ensure "purchased" status for all themes.

## How to use
Simply open `index.html` in any modern web browser.

---
*Disclaimer: This project is for educational and entertainment purposes only. Win7 Simu is a simulation of Windows 7 and is not associated with Microsoft.*
