const matchingService = require('../services/matchingService');

module.exports = {
    matchRequest: async (req, res) => {
        try {
            const requestId = req.params.requestId;

            const result =
                await matchingService.findBestResource(
                    requestId
                );

            if (!result) {
                return res.status(404).json({
                    error: 'No suitable resource found'
                });
            }

            res.json(result);

        } catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
    }
};