const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.get('/favicon.ico', function(req, res) {
  res.status(204);
});

module.exports = router;
