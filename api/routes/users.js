const express = require('express');
const router = express.Router();
const user = require('../db/user');

/* GET users by name */
router.get('/find', (req, res) => {
  user.findByName(req.params.name)
    .then(users => res.send(JSON.stringify(users)))
    .catch(err => {
      console.error(err);
      res.status(404).send('Not Found');
    });
});

/* POST new user. */
router.post('/', (req, res) => {
  user.save(req.body.name, req.body.email, req.body.photo || null)
    .then(() => res.status(201).send('Created'))
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});

/* GET user by ID. */
router.get('/:id', (req, res) => {
  user.get(req.params.id)
    .then(user => res.send(user))
    .catch(() => res.status(404).send('Not Found'));
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
