const express = require('express');
const router = express.Router();

const artisans = [
  { id: 1, name: 'John Doe', skill: 'Carpenter' },
  { id: 2, name: 'Jane Smith', skill: 'Plumber' }
];

router.get('/', (req, res) => {
  res.json(artisans);
});

module.exports = router;

