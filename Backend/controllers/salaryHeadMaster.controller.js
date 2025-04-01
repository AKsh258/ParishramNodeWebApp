const CustomError = require( "../utils/errorHandler.util.js" );
const { saveUpdate } = require( '../repository/salaryHeadMaster.repository.js' );

const saveSalaryHeadAmoutGrade = async ( req, res, next ) =>
{
    const { code, companyCode, grade, amount } = req.body;
    try
    {

        const result = await saveUpdate( code, companyCode, grade, amount );

        if ( result == 1 )
        {
            res.status( 200 ).json( {
                success: true,
                message: 'salary head details Updated successfully ',
            } )

        } else if ( result )
        {
            res.status( 200 ).json( {
                success: true,
                message: 'salary head details saved successfully ',
                data: result
            } )

        } else
        {
            res.status( 400 ).json( {
                success: false,
                message: 'Error in saving salary head details  '
            } )
        }
    } catch ( error )
    {
        console.error( 'Error:', error );
        res.status( 500 ).json( { error: 'Internal server error' } );
    }
};

module.exports = {
    saveSalaryHeadAmoutGrade
}