const { DataTypes } = require('sequelize');
const { cityforceSequelize } = require('../config/db');

const CityforceSecurity = cityforceSequelize.define('CityforceSecurity', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  clientName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  serviceType: {
    type: DataTypes.STRING,
  },
  contractDuration: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'cityforceSecurity',
  timestamps: false,
});

module.exports = CityforceSecurity;
