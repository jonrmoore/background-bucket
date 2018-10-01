const express = require('express');
const router = express.Router();

const scrapeIt = require('scrape-it');

// TODO
// Create method to check for lowercase letters followed by capitals and insert a
// comma followed by a whitespace.

function getBestBooks(year) {
  return scrapeIt(`https://nebulas.sfwa.org/search-awards/?sa=1&award[7]=on&statusfilter=both&start_year=${year}&end_year=${year}&search=`, {
    titles: ".results ul.award_list li > a:nth-of-type(1)",
    authors: ".results ul.award_list li > a:nth-of-type(2)",
    publishers: ".results ul.award_list li > a:nth-of-type(3)"
      
    // TODO
    // =====
    // Use convert() method and regex to divide results 
  })   
}

router.get("/nebula", (req, res, next) => {
  getBestBooks(1975).then(({ data }) => {
    res.json(data)
  }).catch(console.error);
})

module.exports = router;