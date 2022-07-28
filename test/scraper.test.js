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

  it("contains a first post called 'Tree Service'", async () => {
    const listings = await scraper.getListings(html);
    console.log(listings)
    expect(listings[0].title).toBe("Tree Service");
  });

  it("should have this listing time", async () => {
    const listings = await scraper.getListings(html);
    expect(listings[0].date).toStrictEqual(new Date("2022-07-27 14:56"));
  });

  it("should contain this full URL", async () => {
    const listings = await scraper.getListings(html);
    expect(listings[0].url).toBe(
      "https://newyork.craigslist.org/brk/fgs/d/brooklyn-tree-service/7514101085.html"
    );
  });
});
