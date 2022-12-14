const puppeteer = require('puppeteer');
(async()=>{
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://quotes.toscrape.com/");
    await page.click('a[href="/login"]');
    //Entering your details
    await page.type("#username","IdoKoubi",{delay:100});
    await page.type("#password","Password7890",{delay:100});
    //submitting
    await page.click('input[value="Login"]')
    // await browser.close();
