import { Browser } from 'puppeteer';
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const delay = require('delay');
import { account } from './constants';

(async () => {

    const browser: Browser = await puppeteer.use(StealthPlugin).launch({headless: false});
    await delay(2000);
    const page = await browser.newPage();
    await page.goto('https://www.facebook.com/');
    await page.setExtraHTTPHeaaders({
        'Accept-Language': 'en-us'
    });
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36');
    await page.setJavaScriptEnabled(true);

    const inpEmail = await page.waitForSelector('#email');
    await page.waitForTimeout(500);
    if(inpEmail){
        await inpEmail.type(account.email, {delay: 101});
    }

    const inpPassword = await page.waitForSelector('#pass');
    await page.waitForTimeout(450);
    if(inpPassword){
        await inpPassword.type(account.password, {delay: 201});
    }

    const btnLogin = await page.waitForSelector('button[type="submit"]');
    if(btnLogin){
        await btnLogin.click();
    }
    await delay(5000);
    await page.goto('https://www.facebook.com/nguyenthiha02012005/posts/pfbid0bNKYVRxSxj4sBDswA5aYkBhQXhvL6exgeRUhxVZoqRGFUkxW6kVDYNK8qtyY5eMTl');
    const btnLike = await page.waitForSelector(".x1i10hfl.x1qjc9v5.xjbqb8w.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x972fbf.xcfux6l.x1qhh985.xm0m39n.x9f619.x1ypdohk.xdl72j9.x2lah0s.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.x16tdsg8.x1hl2dhg.x1ja2u2z.x1t137rt.x1o1ewxj.x3x9cwd.x1e5q0jg.x13rtm0m.x3nfvp2.x1q0g3np.x87ps6o.x1lku1pv.x1a2a7pz.x5ve5x3");
    if(btnLike){
        await btnLike.click();
    }
    await page.waitForNavigation({waitUntil: ['networkidle0']});
    await delay(10000);
    await page.screenshot({path: 'profile.png'});
    
    await delay(3000);
    await page.close();
    await browser.close();
})
