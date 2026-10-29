const express = require('express');
const router = express.Router();

const controller = require('../controllers/requestsController');

router.post(
    '/requests',
    controller.addRequest
);

router.get(
    '/requests',
    controller.getAllRequests
);

router.get(
    '/requests/:id',
    controller.getRequestById
);

router.put(
    '/requests/:id',
    controller.updateRequest
);

router.delete(
    '/requests/:id',
    controller.deleteRequest
);

module.exports = router;