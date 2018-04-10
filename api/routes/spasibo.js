const express = require('express');
const router = express.Router();
const spasibo = require('../db/spasibo');

// TODO: check for token

/* POST new spasibo. */
router.post('/:id', (req, res) => {
  spasibo.save(req.params.id, req.body.to, req.body.text)
    .then(() => res.status(201).send('Created'))
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});

/* GET spasibo data. */
router.get('/:id', (req, res) => {
  spasibo.get(req.params.id)
    .then(spasibo => res.send(spasibo))
    .catch(err => {
      console.error(err);
      res.status(204).send('No Content');
    });
});

module.exports = router;
