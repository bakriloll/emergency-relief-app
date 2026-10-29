const express = require('express');
const router = express.Router();

const matchController = require('../controllers/matchController');

router.post(
    '/match/:requestId',
    matchController.matchRequest
);

module.exports = router;