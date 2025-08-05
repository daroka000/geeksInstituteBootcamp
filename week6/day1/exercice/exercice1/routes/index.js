const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.send('HOME PAGE ');
});
router.get('/about', (req, res) => {
  res.send('ABOUT US');
});

module.exports = router;
