const axios = require("axios");
const fs = require("fs");

const craigslistUrl = "https://newyork.craigslist.org/search/fgs";

const main = async () => {
  const res = await axios(craigslistUrl);
  fs.writeFileSync("craigslistData.html", res.data);
};

main();
