const express = require('express');
const router = express.Router();

const scrapeIt = require('scrape-it');

function extractBookInfo(text) {
  const re = /(^.*), by (.*) \((.*)\)$/g
  const match = re.exec(text);
  return { title: match[1], author: match[2], publisher: match[3] };
}

function getBestBooks(year) {
  return scrapeIt(`http://www.thehugoawards.org/hugo-history/${year}-hugo-awards/`, {
    winner: {
      selector: '.entry-content ul:first-of-type li.winner',
      convert: extractBookInfo,
    },
    nominees: {
      listItem: '.entry-content ul:first-of-type li:not(.winner)',
      data: {
        title: {
          convert: text => extractBookInfo(text).title,
        },
        author: {
          convert: text => extractBookInfo(text).author,
        },
        publisher: {
          convert: text => extractBookInfo(text).publisher,
        },
      },
    },
  });
}

router.get("/awards", (req, res, next) => {
  getBestBooks(2018).then(({ data }) => {
    res.json(data)
  }).catch(console.error);
})

module.exports = router;