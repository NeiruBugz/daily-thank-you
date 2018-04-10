const express = require('express');
const router = express.Router();
const spasibo = require('../db/spasibo');
const user = require('../db/user');

/* POST new spasibo. */
router.post('/:id', (req, res) => {
  user.getUser(req.params.id)
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
});

/* GET spasibo data. */
router.get('/:id', (req, res) => {
  user.getUser(req.params.id)
    .then(user => {
      return user.email;
    })
    .then(email => {
      spasibo.get(email)
        .then(spasibo => res.send(spasibo))
        .catch(err => {
          console.error(err);
          res.status(204).send('No Content');
        });
    })
});

module.exports = router;
