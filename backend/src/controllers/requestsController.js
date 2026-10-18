const Requests = require('../models/requestsModel');

module.exports = {
    addRequest: async (req, res) => {
        try {
            const data = req.body;
            const newRequest = await Requests.createRequest(data);
            res.status(201).json(newRequest);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getAllRequests: async (req, res) => {
        try {
            const requests = await Requests.getRequests();
            res.json(requests);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getRequestById: async (req, res) => {
        try {
            const id = req.params.id;
            const request = await Requests.getRequestById(id);

            if (!request) {
                return res.status(404).json({ error: "Request not found" });
            }

            res.json(request);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};
