const { DataTypes } = require('sequelize');
const { element } = require('../config/db');

const MRFProduct = element.define('element parishram', {
       ID: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
       },
       UserName: {
              type: DataTypes.STRING,
              allowNull: false,
       },
       Description: {
              type: DataTypes.STRING,
              allowNull: false,
       },
       EmployeeCode: {
              type: DataTypes.STRING,
              allowNull: false,
       },
       password: {
              type: DataTypes.STRING,
       },
       createdBy: {
              type: DataTypes.STRING,
       },
       ModifiedBy: {
              type: DataTypes.STRING,
              allowNull: false,
       },
       creationDate: {
              type: DataTypes.DATE,
       },
       ExpiryDate: {
              type: DataTypes.DATE,
       },
       lastChangedDateTime: {
              type: DataTypes.DATE,
              allowNull: false,
       },
       HasLeft: {
              type: DataTypes.BOOLEAN,
       },
       LeftDate: {
              type: DataTypes.DATE,
       },
       email: {
              type: DataTypes.STRING,
       },
       role: {
              type: DataTypes.STRING,
       },

}, {
       tableName: 'UserNameMaster',
       timestamps: false,
});

module.exports = MRFProduct;
