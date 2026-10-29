const Resources = require('../models/resourceModel');

module.exports = {
    addResource: async (req, res) => {
        try {
            const data = req.body;
            const newResource = await Resources.createResource(data);

            res.status(201).json(newResource);
        } catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
    },

    getAllResources: async (req, res) => {
        try {
            const resources = await Resources.getResources();

            res.json(resources);
        } catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
    },

    getResourceById: async (req, res) => {
        try {
            const id = req.params.id;

            const resource =
                await Resources.getResourceById(id);

            if (!resource) {
                return res.status(404).json({
                    error: 'Resource not found'
                });
            }

            res.json(resource);

        } catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
    },

    updateResource: async (req, res) => {
        try {
            const id = req.params.id;

            const updated =
                await Resources.updateResource(
                    id,
                    req.body
                );

            if (!updated) {
                return res.status(404).json({
                    error: 'Resource not found'
                });
            }

            res.json(updated);

        } catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
    },

    deleteResource: async (req, res) => {
        try {
            const id = req.params.id;

            const deleted =
                await Resources.deleteResource(id);

            if (!deleted) {
                return res.status(404).json({
                    error: 'Resource not found'
                });
            }

            res.json({
                message: 'Resource deleted successfully'
            });

        } catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
    }
};