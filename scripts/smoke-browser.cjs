// Set PLAYWRIGHT_MODULE to an installed Playwright package to run this smoke test.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
(async () => {
    const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL || 'msedge', headless: true });
    for (const url of ['http://localhost:8080', pathToFileURL(path.resolve('index.html')).href, 'http://localhost:8080/dist/']) {
        const page = await browser.newPage();
        const errors = [];
        page.on('pageerror', e => errors.push(e.message));
        page.on('response', response => {
            if (response.url().startsWith('http://localhost:8080') && response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
        });
        await page.route('**/*', route => /^(https?:\/\/(localhost|127\.0\.0\.1)|file:|blob:|data:)/.test(route.request().url()) ? route.continue() : route.abort());
        console.log('Opening', url);
        await page.goto(url, { waitUntil: 'domcontentloaded' });
        await page.locator('[data-test-avatar="win7"]').click({ timeout: 60000 });
        console.log('Guest clicked');
        await page.waitForSelector('[data-test-main-screen]', { timeout: 60000 });
        await page.getByText('Recycle Bin', { exact: true }).first().waitFor({ timeout: 60000 });
        await page.waitForTimeout(2000);
        const state = await page.evaluate(() => {
            const store = document.querySelector('[data-test-main-screen]').__vue__.$store;
            return { ads: store.state.showAds, themes: store.state.unlockedThemes, desktop: store.state.desktopPath };
        });
        console.log(url, JSON.stringify(state), 'errors:', JSON.stringify(errors));
        if (errors.length || state.ads || !state.desktop) throw new Error('Offline startup failed');
        await page.getByText('Computer', { exact: true }).first().dblclick();
        await page.waitForSelector('#window-computer', { timeout: 30000 });
        console.log('Computer window opened');
        if (url.endsWith('/dist/')) {
            await page.evaluate(() => Promise.race([
                navigator.serviceWorker.ready,
                new Promise((_, reject) => setTimeout(() => reject(new Error('Offline cache installation timed out')), 90000))
            ]));
            await page.context().setOffline(true);
            await page.reload({ waitUntil: 'domcontentloaded' });
            await page.locator('[data-test-avatar="win7"]').click({ timeout: 60000 });
            await page.getByText('Recycle Bin', { exact: true }).first().waitFor({ timeout: 60000 });
            console.log('Packaged subpath reloaded offline from service worker');
            await page.context().setOffline(false);
        }
        await page.screenshot({ path: '.upstream/' + (url.startsWith('file') ? 'file' : 'web') + '-desktop.png' });
        await page.close();
    }
    await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
