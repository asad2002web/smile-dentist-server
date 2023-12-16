const express = require('express');
const test = require('../controllers/test');
// const { getTest } = require('../controllers/test');
const router = express.Router();


router.get('/test', test.getTest);

router.post('/test', test.postTest);

// router.get('/test', getTest);

module.exports = router