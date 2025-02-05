const { DataTypes } = require('sequelize');
const { parishramSequelize } = require('../config/db');

const ParishramResource = parishramSequelize.define('ParishramResource', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  department: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'parishramResources',
  timestamps: false,
});

module.exports = ParishramResource;
