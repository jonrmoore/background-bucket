
// "https://nebulas.sfwa.org/search-awards/?sa=1&award[7]=on&statusfilter=both&start_year=1975&end_year=1975&search="
const express = require('express');
const router = express.Router();

const scrapeIt = require('scrape-it');

// function extractBookInfo(text) {
//   const re = /(^.*), by (.*) \((.*)\)$/g
//   const match = re.exec(text);
//   return { title: match[1]};
// }

function getBestBooks(year) {
  return scrapeIt(`https://nebulas.sfwa.org/search-awards/?sa=1&award[7]=on&statusfilter=both&start_year=${year}&end_year=${year}&search=`, {
    winner: {
      selector: '.results ul.award_list li a',
      attr: "href"
    }
  });
}

router.get("/nebula", (req, res, next) => {
  getBestBooks(2018).then(({ data }) => {
    res.json(data)
  }).catch(console.error);
})

module.exports = router;