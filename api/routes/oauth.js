const express = require('express');
const router = express.Router();
const oauth = require('../oauth/index');
const user = require('../db/user');

/* GET auth URL. */
router.get('/', (req, res) => {
  res.redirect(oauth.generateAuthUrl());
});

router.get('/validate', (req, res) => {
  oauth.getAccessToken(req.query.code)
    .then(tokens => {
      return oauth.getName(tokens);
    })
    .then(info => {
      const name = info.data.name;
      const email = info.data.email;
      const photo = info.data.picture;
      user.getId(email)
        .then(id => {
          res.redirect('https://spasibo.dergunov.net/oauth/' + id);
        })
        .catch(() => {
          user.saveUser(name, email, photo)
            .then(id => {
              res.redirect('https://spasibo.dergunov.net/oauth/' + id);
            })
            .catch(err => {
              console.error(err);
              res.status(500).send('Internal Server Error');
            })
        });
    })
    .then()
    .catch(err => {
      console.error(err);
      res.send(err);
    });
});

module.exports = router;
