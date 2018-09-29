const express = require('express');
const router = express.Router();

router.get("/awards", (req, res, next) => {
  res.json(
    [
      {
        "id": 1,
        "title": "Philip K. Dick"
      },
      {
        "id": 2,
        "title": "Hugo"
      },
      {
        "id": 3,
        "title": "Nebula"
      }
    ]
  )
})

module.exports = router;