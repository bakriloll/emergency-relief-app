const Requests = require('../models/requestsModel');

module.exports = {
    addRequest: async (req, res) => {
        try {
            const data = req.body;
            const newRequest = await Requests.createRequest(data);

            res.status(201).json(newRequest);
        } catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
    },

    getAllRequests: async (req, res) => {
        try {
            const requests = await Requests.getRequests();
            res.json(requests);
        } catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
    },

    getRequestById: async (req, res) => {
        try {
            const id = req.params.id;

            const request =
                await Requests.getRequestById(id);

            if (!request) {
                return res.status(404).json({
                    error: 'Request not found'
                });
            }

            res.json(request);
        } catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
    },

    updateRequest: async (req, res) => {
        try {
            const id = req.params.id;

            const updated =
                await Requests.updateRequest(
                    id,
                    req.body
                );

            if (!updated) {
                return res.status(404).json({
                    error: 'Request not found'
                });
            }

            res.json(updated);
        } catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
    },

    deleteRequest: async (req, res) => {
        try {
            const id = req.params.id;

            const deleted =
                await Requests.deleteRequest(id);

            if (!deleted) {
                return res.status(404).json({
                    error: 'Request not found'
                });
            }

            res.json({
                message:
                    'Request deleted successfully'
            });
        } catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
    }
};