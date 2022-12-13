const puppeteer = require('puppeteer');
(async()=>{
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://www.costco.com/baby-kids.html");
    const grabParagraph = await page.evaluate(()=>{
      const pgTag = document.querySelector(".category-box-content");
      return pgTag.innerText ;

    });
    console.log(grabParagraph);
    await browser.close();

})();
