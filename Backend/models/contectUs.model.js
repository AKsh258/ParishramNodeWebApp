const { DataTypes } = require('sequelize');
const { commonSecuelize }  = require('../config/db');

const ContactUs = commonSecuelize.define('ContactUs', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    companySize: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'contact_us',
    timestamps: false,
});

module.exports = ContactUs;

