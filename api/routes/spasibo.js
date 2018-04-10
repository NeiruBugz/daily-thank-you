const express = require('express');
const router = express.Router();
const spasibo = require('../db/spasibo');
const user = require('../db/user');

/* GET spasibo listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

/* POST new spasibo. */
router.post('/', (req, res) => {
  user.getUser(req.body.from)
    .then(user => {
      return user.email;
    }).
    then(from => {
    spasibo.save(from, req.body.to, req.body.text)
      .then(() => res.status(201).send('Created'))
      .catch(err => {
        console.error(err);
        res.status(500).send('Internal Server Error');
      });
  })
  //
});

/* GET spasibo data. */
router.get('/:id', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
