const { executeQuery } = require( '../utils/dbhelper.util.js' );

const getAllStatedb = async () => {
    try {

        return await executeQuery( 'select distinct STATE from CountryMaster' );

    } catch (error) {

        throw new Error('Error fetching contects: ' + error.message);
    }
};

const getAllCitydb = async (state) => {
    try {

        return await executeQuery( `select CityId,CITY from CountryMaster where STATE = '${ state }'` );

    } catch (error) {

        throw new Error('Error fetching contects: ' + error.message);
    }
}



module.exports = {

    getAllStatedb,
    getAllCitydb

};
