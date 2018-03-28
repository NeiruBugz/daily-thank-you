const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

/* POST new user. */
router.post('/:id', (req, res, next) => {
  res.send('respond with a resource');
});

/* GET user by ID. */
router.get('/:id', (req, res, next) => {
  res.send('respond with a resource');
});

/* PUT user data. */
router.put('/:id', (req, res, next) => {
  res.send('respond with a resource');
});

/* DELETE user data. */
router.delete('/:id', (req, res, next) => {
  res.send('respond with a resource');
});


module.exports = router;
