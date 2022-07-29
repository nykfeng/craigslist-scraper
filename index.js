const puppeteer = require("puppeteer");
const getData = require("./getHTML");
const scraper = require("./scraper")

async function main() {
  // headless: running without a graphical user interface.
  // since here for testing purpose, set it to false to show it
  // so it's easier to debug
  getData.getPage();
  const browers = await puppeteer.launch({ headless: false });

  const page = await browers.newPage();
  await page.goto("https://newyork.craigslist.org/search/fgs");
  const craigslistPage = await page.evaluate(
    () => document.querySelector("*").outerHTML
  );

  const scrapingResults = await scraper.getListings(craigslistPage);

  console.log(scrapingResults);

  // console.log(craigslistPage);
}

main();
