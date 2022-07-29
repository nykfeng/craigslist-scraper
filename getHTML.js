const axios = require("axios");
const fs = require("fs");

const craigslistUrl = "https://newyork.craigslist.org/search/fgs";

exports.getPage = async () => {
  const res = await axios(craigslistUrl);
  fs.writeFileSync("craigslistData.html", res.data);
  return res.data;
};




