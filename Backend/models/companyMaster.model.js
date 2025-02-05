const { DataTypes } = require("sequelize");
const { element } = require('../config/db');

const Company = element.define('Company', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    Code: {
        type: DataTypes.STRING(25),
        primaryKey: true,
        allowNull: false
    },
    Address: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    City: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    State: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Country: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Pin: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Phone: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Website: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Fax: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    EccNo: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    CstNo: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    HGSTno: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    TinNo: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Collectorate: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    RegNo: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    ServiceTaxNo: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    ExciseRange: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    ExciseDiv: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    FactoryLicNo: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    PermACNo: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Currency: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    TriCur: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    SceCur: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    ExciseAddress: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    Locking: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    LockingDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    PAN: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    TAN: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    TDSCircle: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    PANCircNo: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    PANWardNo: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    ExcemptionNo: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    CERegNo: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    CERange: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    CEDivision: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    CECommrate: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    Prefix: {
        type: DataTypes.STRING(5),
        allowNull: true
    }
}, {
    tableName: 'CompanyMaster',
    timestamps: false 
});

module.exports = Company;