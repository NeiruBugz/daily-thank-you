const express = require('express');
const router = express.Router();
const oauth = require('../oauth/index');

/* GET auth URL. */
router.get('/', (req, res) => {
  res.redirect(oauth.generateAuthUrl());
});

module.exports = router;
