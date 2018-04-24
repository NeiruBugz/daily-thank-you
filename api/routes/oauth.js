const express = require('express');
const router = express.Router();
const oauth = require('../oauth/index');
const user = require('../db/user');
const token = require('../db/token');

/* GET auth URL. */
router.get('/', (req, res) => {
  token.ifExist(req.query.token).then(result => {
    if (result) {
      res.redirect(oauth.generateAuthUrl());
    } else {
      res.sendStatus(401);
    }
  });
});

/* Validate code from OAuth-server */
router.get('/validate', (req, res) => {
  oauth.getAccessToken(req.query.code)
    .then(tokens => oauth.getName(tokens))
    .then(info => {
      const name = info.data.name;
      const email = info.data.email;
      const photo = info.data.picture;
      user.getUserByEmail(email)
        .then(user => res.redirect('https://spasibo.dergunov.net/oauth/' + user.token))
        .catch(() => {
          user.save(name, email, photo)
            .then(user => res.redirect('https://spasibo.dergunov.net/oauth/' + user.token))
            .catch(() => res.status(500).send('Internal Server Error'));
        });
    })
    .catch(err => res.send(err));
});

module.exports = router;
