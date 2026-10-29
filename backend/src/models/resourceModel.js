const pool = require('../config/db');

module.exports = {
    createResource: async (data) => {
        const query = `
            INSERT INTO resources (
                location,
                type,
                capacity,
                available_beds,
                available_food_kits,
                status
            )
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `;

        const values = [
            data.location,
            data.type,
            data.capacity,
            data.available_beds,
            data.available_food_kits,
            data.status
        ];

        const result = await pool.query(query, values);
        return result.rows[0];
    },

    getResources: async () => {
        const result = await pool.query(
            'SELECT * FROM resources'
        );

        return result.rows;
    },

    getResourceById: async (id) => {
        const result = await pool.query(
            'SELECT * FROM resources WHERE id = $1',
            [id]
        );

        return result.rows[0];
    },

    updateResource: async (id, data) => {
        const query = `
            UPDATE resources
            SET location = $1,
                type = $2,
                capacity = $3,
                available_beds = $4,
                available_food_kits = $5,
                status = $6
            WHERE id = $7
            RETURNING *;
        `;

        const values = [
            data.location,
            data.type,
            data.capacity,
            data.available_beds,
            data.available_food_kits,
            data.status,
            id
        ];

        const result = await pool.query(query, values);
        return result.rows[0];
    },

    deleteResource: async (id) => {
        const result = await pool.query(
            'DELETE FROM resources WHERE id = $1 RETURNING *',
            [id]
        );

        return result.rows[0];
    }
};