const express = require('express');
const router = express.Router();
const user = require('../db/user');

/* POST new user. */
router.post('/', (req, res) => {
  const response = user.saveUser(req.body.name, req.body.email, req.body.photo || null);
  response
    .then(() => res.status(201).send('Created'))
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
  res.send('respond with a resource');
});

/* GET user by ID. */
router.get('/:id', (req, res) => {
  const response = user.getUser(req.params.id);
  response
    .then(user => res.send(JSON.stringify(user)))
    .catch(err => {
      console.error(err);
      res.status(404).send('Not Found');
    });
});

/* PUT user data. */
router.put('/:id', (req, res) => {
  res.send('respond with a resource');
});

/* DELETE user data. */
router.delete('/:id', (req, res) => {
  res.send('respond with a resource');
});

module.exports = router;
