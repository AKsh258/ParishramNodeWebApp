const { DataTypes } = require('sequelize');
const { commonSecuelize }  = require('../config/db');

const ContactUs = commonSecuelize.define('ContactUs', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    company_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    company_size: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'contact_us',
    timestamps: false,
});

module.exports = ContactUs;

