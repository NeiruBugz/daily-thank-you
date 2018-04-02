const express = require('express');
const router = express.Router();
const oauth = require('../oauth/index');

/* GET user by ID. */
router.get('/', (req, res) => {
  const response = oauth.generateAuthUrl();
  response
    .then(user => res.send(JSON.stringify(user)))
    .catch(err => {
      console.error(err);
      res.status(404).send('Not Found');
    });
});

module.exports = router;
