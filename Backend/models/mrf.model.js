const { DataTypes } = require('sequelize');
const { mrfSequelize } = require('../config/db');

const MRFProduct = mrfSequelize.define('MRFProduct', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  category: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
  },
}, {
  tableName: 'mrf_products',
  timestamps: false,
});

module.exports = MRFProduct;
