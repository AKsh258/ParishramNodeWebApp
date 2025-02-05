const Sequelize = require("sequelize");
require("dotenv").config();

function initializeSequelize(db,dbname){
    const sequelize=new Sequelize(db, process.env.USER,process.env.PASSWORD,{
        host: process.env.HOST,
        port: process.env.SQL_PORT || 1433,
        dialect: process.env.DIALECT || 'mssql',
        dialectOptions:{ options:{ encrypt: false }, },
    });
    sequelize.authenticate()
    .then(()=>{ console.log(`Connecting to DB (${ dbname }) succesfull !!`) })
    .catch(err=>{ console.log(`Error connecting Db (${ dbname }) : `,err)});

    return sequelize;
}
const parishramSequelize = initializeSequelize(process.env.DB1, 'Parishram Resources');
const cityforceSequelize= initializeSequelize(process.env.DB2,'Cityforce');
const mrfSequelize= initializeSequelize(process.env.DB3, 'MRF');
const commonSecuelize= initializeSequelize(process.env.DB4, 'commondatabase');
const element = initializeSequelize(process.env.DB5, 'element parishram');


module.exports = { parishramSequelize, mrfSequelize, cityforceSequelize,commonSecuelize,element};
