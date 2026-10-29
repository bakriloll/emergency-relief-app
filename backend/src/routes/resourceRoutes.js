const express = require('express');
const router = express.Router();

const controller = require('../controllers/resourceController');

router.post(
    '/resources',
    controller.addResource
);

router.get(
    '/resources',
    controller.getAllResources
);

router.get(
    '/resources/:id',
    controller.getResourceById
);

router.put(
    '/resources/:id',
    controller.updateResource
);

router.delete(
    '/resources/:id',
    controller.deleteResource
);

module.exports = router;