const branchMaster = require( "../models/branchMaster.model" );
const { executeQuery } = require( '../utils/dbhelper.util.js' );

const findAll = async ( companyCode ) =>
{
    try
    {
        return await branchMaster.findAll( {
            attributes: [ 'Name', 'Code', 'CompanyCode', 'incharge', 'Address', 'City', 'pincode', 'faxno', 'phoneno', 'email', 'Website', 'createdBy', 'Prefix' ],
            where: { CompanyCode: companyCode }
        } );
    } catch ( error )
    {
        throw new Error( 'Error fetching companies : ' + error.message );
    }
};
const getBranch = async( branchCode )=>{
    try{
        
        return await branchMaster.findOne( { 
            attributes: [ 'Name', 'Code', 'CompanyCode', 'incharge', 'Address', 'City', 'pincode', 'faxno', 'phoneno', 'email', 'Website', 'createdBy', 'Prefix' ],
            where: { Code: branchCode }
        });

    }catch(Error){
        throw new Error('Error in fond this branch details technical error ! go in contect us tab and suggest we so we improve the functionality THANK YOU !', Error.message )
    }
};

const shiftDetail = async ( branchCode ) =>
{
    try
    {
        return await executeQuery( `SELECT ShiftCode, ShiftName, ShiftFrom, ShiftTo, TotalMinutes FROM ShiftMaster WHERE BranchCode = '${ branchCode }'` );
    } catch ( error )
    {
        throw new Error( 'Error fetching ShiftDetails : ' + error.message );
    }
}

module.exports = {
    findAll,
    getBranch,
    shiftDetail,
};