const pool = require('../config/db');

const findBestResource = async (requestId) => {

    const requestResult = await pool.query(
        'SELECT * FROM requests WHERE id = $1',
        [requestId]
    );

    const request = requestResult.rows[0];

    if (!request) {
        return null;
    }

    const resourcesResult = await pool.query(`
        SELECT *
        FROM resources
        WHERE available_beds >= $1
        AND status = 'active'
        ORDER BY available_beds DESC
    `, [request.people_count]);

    const resources = resourcesResult.rows;

    if (resources.length === 0) {
        return null;
    }

    return {
        request,
        matchedResource: resources[0]
    };
};

module.exports = {
    findBestResource
};