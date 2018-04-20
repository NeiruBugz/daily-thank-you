const express = require('express');
const router = express.Router();
const user = require('../db/user');

/* POST new user. */
router.post('/', (req, res) => {
  user.save(req.body.name, req.body.email, req.body.photo || null)
    .then(() => res.status(201).send('Created'))
    .catch(() => res.status(500).send('Internal Server Error'));
});

/* GET users by name */
router.get('/find', (req, res) => {
  user.findByName(req.query.name)
    .then(users => res.send(users))
    .catch(() => res.status(404).send('Not Found'));
});

router.get('/token/:token', (req, res) => {
  user.getByToken(req.params.token)
    .then(user => res.send(user))
    .catch(() => res.status(404).send('Not Found'));
});

/* GET user by ID. */
router.get('/:id', (req, res) => {
  user.get(req.params.id)
    .then(user => res.send(user))
    .catch(() => res.status(404).send('Not Found'));
});

module.exports = router;
