const scraper = require("../scraper");
const fs = require("fs");
const { isTag } = require("domhandler");

let html;

describe("Read info from craigslist html", () => {
  beforeAll(() => {
    html = fs.readFileSync("./craigslistData.html");
  });

  it("should get all listings from craigslist's farm & garden services page", async () => {
    const listings = await scraper.getListings(html);
    expect(listings.length).toBe(120);
  });
});
