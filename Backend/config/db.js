const Sequelize = require("sequelize");
require("dotenv").config();

function initializeSequelize(db,dbname){
    const sequelize=new Sequelize(db, process.env.USER,process.env.PASSWORD,{
        host: process.env.HOST,
        port: process.env.SQL_PORT || 1433,
        dialect: process.env.DIALECT || 'mssql',
        dialectOptions:{ options:{ encrypt: false }, },
        logging: false
    });
    sequelize.authenticate()
    .then(()=>{ console.log(`Connecting to DB (${ dbname }) succesfull !!`) })
    .catch(err=>{ console.log(`Error connecting Db (${ dbname }) : `,err)});

    return sequelize;
}
const commonSecuelize= initializeSequelize(process.env.DB4, 'commondatabase');
const element = initializeSequelize(process.env.DB5, 'element parishram');

module.exports = { commonSecuelize, element };
