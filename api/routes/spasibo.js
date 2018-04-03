const express = require('express');
const router = express.Router();

/* GET spasibo listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

/* POST new spasibo to user. */
router.post('/:id', (req, res, next) => {
  res.send('respond with a resource');
});

/* GET spasibo data. */
router.get('/:id', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
