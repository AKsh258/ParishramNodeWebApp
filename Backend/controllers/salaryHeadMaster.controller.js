const CustomError = require( "../utils/errorHandler.util.js" );
const { 
    saveUpdate, 
    findSalaryByGrade, 
    getMinimumWagesByBranch, 
    setReimbursmentdb,
    findOneEntitle, 
    createEntitle,
    getSalaryHeaddb,
    updateSalaryHeadGradesAmountsdb,
} = require( '../repository/salaryHeadMaster.repository.js' );
const { response } = require( "express" );

const saveSalaryHeadAmoutGrade = async ( req, res, next ) =>
{
    const { code, companyCode, grade, amount } = req.body;
    try
    {

        const result = await saveUpdate( code, companyCode, grade, amount );

        if ( result === 1 )
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
const getMinimumWages =async(req,res,next)=>{
    const branchCode=req.body.branchCode;
    try {
        const Wages = await getMinimumWagesByBranch(branchCode);
        if(Wages.length>0){
            res.status(200).json({
                success: true,
                message: "Minimum Wages retrieved successfully",
                data: Wages
            });
        }else{
            res.status(400).json({
                success: true,
                message: " Here minimum wage not saved for this branch please select a valid branch !"
            });
        }  
    } catch (error) {
        console.error("Error retrieving Minimum Wages:", error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve Minimum wages !",
            error: error.message
        });
    }

}

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

const setReimbursment = async ( req, res, next )=>{

    try{

        const { empCode, reimbursmentType, EntitlementAmount, SNo } = req.body;

        const result =  await setReimbursmentdb( empCode, reimbursmentType, EntitlementAmount, SNo );

        if ( result ){

            response.status(200).json({
                success : true,
                message : "Reimbursement saved successfully ",
                data : result
            })
        }else{
            res.status(400).json({
                success : false,
                message : " Failed to saving Reimbursement "
            })
        }

    }catch(error){

        console.error('Error in saving reimbursement :', error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });

    }
}
const getEntitlementByEmpId = async (req, res) => {
    try {
        const empid = req.params.empid;

        if (!empid) {
            
            return res.status(400).json({ success: false, message: 'Employee ID is required' });
        }

        const entitlement = await findOneEntitle(empid);

        if (entitlement.length>0) {
            return res.status(200).json({
                success: true,
                message: 'Employee entitlement found successfully',
                data: entitlement
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Employee entitlement not found use a diffrent employee id '
            });
        }
    } catch (error) {
        console.error('Error fetching entitlement:', error.message);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const saveEntitlement = async (req, res) => {
    try {
        const entitlements = req.body;

        if (!Array.isArray(entitlements) || entitlements.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Invalid or empty data',
            });
        }

        const result = await  createEntitle (entitlements);

        if (result) {
            res.status(200).json({
                success: true,
                message: 'Employee Entitlement Details Saved Successfully',
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'Failed to save entitlement details',
            });
        }
    } catch (error) {
        console.error('Error in saving entitlement:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};
const getSalaryHead=async(req,res,next)=>{
    try {
        const salHead = await getSalaryHeaddb();
        if (salHead.length>0) {
            const headData = salHead.map(head => ({
                SalHeadCode: head.Code,
                Head: head.Head,
                Description: head.Description
            }));
            res.status(200).json({
                success: true,
                message: "Salary Head Found Succesfully ",
                data: headData
            });
        } else {
            res.status(401).json({
                success: false,
                message: "Salary Head master invoke an error try after sometime",
            })
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
 
const updateSalaryHeadGradesAmounts= async (req, res, next)=>{
    const { code, grade, amount } = req.body;
    try{
        const affectedRows= await updateSalaryHeadGradesAmountsdb(code, grade, amount);
        if(affectedRows>0){
            res.status(200).json({
                success : true,
                Message : "grade data insirted succesfully ",
            });
        }else{
                res.status(400).json({
                    success : false,
                    message : " Grade Data Not Save please input a valid data "
                });
            };
    }catch(error){
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    saveSalaryHeadAmoutGrade,
    getSalaryAmount,
    getMinimumWages,
    setReimbursment,
    getEntitlementByEmpId, 
    saveEntitlement,
    getSalaryHead,
    updateSalaryHeadGradesAmounts
}