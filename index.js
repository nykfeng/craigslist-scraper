const puppeteer = require("puppeteer");

async function main() {
  // headless: running without a graphical user interface.
  // since here for testing purpose, set it to false to show it
  // so it's easier to debug
  const browers = await puppeteer.launch({ headless: false });

  const page = await browers.newPage();
  await page.goto("https://www.google.com");
}

main();
