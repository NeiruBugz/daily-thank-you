const express = require('express');
const router = express.Router();
const spasibo = require('../db/spasibo');

/* POST new spasibo. */
router.post('/:token', (req, res) => {
  spasibo.save(req.params.token, req.body.to, req.body.text)
    .then(() => res.status(201).send('Created'))
    .catch(() => res.status(500).send('Internal Server Error'));
});

/* GET spasibo data. */
router.get('/:token', (req, res) => {
  spasibo.get(req.params.token)
    .then(spasibo => res.send(spasibo))
    .catch(() => res.status(204).send('No Content'));
});

module.exports = router;
