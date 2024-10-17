const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // Handle booking logic here
  res.send('Service booked successfully!');
});

module.exports = router;

