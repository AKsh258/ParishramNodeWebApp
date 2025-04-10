// const { Sequelize, InvalidConnectionError } = require( 'sequelize' );
// const CustomError = require( "../utils/errorHandler.util.js" );
const { executeQuery } = require( '../utils/dbhelper.util.js' );  

const getAllGradesdb = async () =>  
{
    try
    {
        return await executeQuery( `SELECT * FROM GradeMaster` );
    
    } catch ( error )
    {
        console.error( 'Error fetching grades:', error.message );
        throw new CustomError( 'Internal server error', 500 );
    }
}

module.exports = { getAllGradesdb };