const CustomError = require( "../utils/errorHandler.util.js" );
const { saveUpdate, findSalaryByGrade } = require( '../repository/salaryHeadMaster.repository.js' );

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
        } else if ( result === " Salary head not found !   please send a valid salary Head ")
        {
            res.status( 402 ).json( {
                success: false,
                message: ' Pelease select a valid salary head  ',
                data: result
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

const getSalaryAmount = async (req, res, next )=>{

    try {
        const { companyCode, grade } = req.body;

        if (!companyCode || !grade ) {
            
            return res.status(400).json({ success: false, message: 'Company Code And Grade are required !' });
        }

        const result = await findSalaryByGrade( companyCode, grade );

        if (result.length>0) {
            return res.status(200).json({
                success: true,
                message: 'Employee entitlement found successfully',
                data: result
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Employee entitlement not found use a diffrent employee id '
            });
        }
    } catch (error) {
        console.error('Error in fetching salaryHead Amount by Grade:', error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }

}


module.exports = {
    saveSalaryHeadAmoutGrade,
    getSalaryAmount
}