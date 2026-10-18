const pool = require('../config/db');

module.exports = {
    createRequest: async (data) => {
        const query = `
            INSERT INTO requests (requester_name, location, people_count, urgency_level, shelter_type_needed)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
        
        const values = [
            data.requester_name,
            data.location,
            data.people_count,
            data.urgency_level,
            data.shelter_type_needed
        ];

        const result = await pool.query(query, values);
        return result.rows[0];
    },

    getRequests: async () => {
        const result = await pool.query('SELECT * FROM requests');
        return result.rows;
    },

    getRequestById: async (id) => {
        const result = await pool.query('SELECT * FROM requests WHERE id = $1', [id]);
        return result.rows[0];
    }
};
