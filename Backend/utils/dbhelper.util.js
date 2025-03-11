const { element } = require('../config/db');
const { QueryTypes } = require('sequelize');

const executeQuery = async (query) => {
    try {
        return await element.query(query, {
            type: QueryTypes.SELECT
        });
    } catch (error) {
        console.error('Database Query Error:', error.message);
        throw new Error('Database operation failed');
    }
};

module.exports = { executeQuery };
