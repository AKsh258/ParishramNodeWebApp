const CustomError = require( "../utils/errorHandler.util.js" );
const {
    findAll,
    findOne,
    getAllByBranch,
    updateEmployee,
    createEmployee,
    createNewRM,
    createNewEMPid,
    RMofBranch,
    createNewHLid,
    validateEmployeeDetails,
    getAllDepartment,
    getAllDesignation,
    getAllEduQualificationOptions,
    getAllProfQualificationOptions

} = require( '../repository/employeeMaster.repository' );
const moment = require( "moment" );
const e = require( "express" );


const findAllemployees = async ( req, res, next ) =>
{
    try
    {
        const page = parseInt( req.query.page ) || 1;
        const pageSize = 20;
        if ( page < 1 || pageSize < 1 )
        {
            return res.status( 400 ).json( { error: 'Invalid pagination parameters' } );
        }
        const { count, rows, leftCount } = await findAll( page, pageSize );

        res.json( {
            data: rows,
            pagination: {
                total: count,
                page: page,
                pageSize: pageSize,
                totalPages: Math.ceil( count / pageSize ),
                activeEmployees: count - leftCount,
                inActiveEmployees: leftCount
            }
        } );

    } catch ( error )
    {
        console.error( 'Error:', error );
        res.status( 500 ).json( { error: 'Internal server error' } );
    }
};

const getEmployeeById = async ( req, res, next ) =>
{
    try
    {
        const empid = req.params.id;
        const employee = await findOne( empid );
        if ( employee )
        {
            res.status( 200 ).json( {
                success: true,
                message: " employee found successfully ",
                data: employee
            } );
        } else
        {
            res.status( 401 ).json( {
                success: false,
                message: " employee not found check employee id ",
            } )
        }
    } catch ( error )
    {
        console.error( 'Error:', error );
        res.status( 500 ).json( { error: 'Internal server error' } );
    }
}

const getAllEmployeeFromBranch = async ( req, res, next ) =>
{
    try
    {
        const branchCode = req.params.branchCode;
        const employees = await getAllByBranch( branchCode );
        if ( employees )
        {
            res.status( 200 ).json( {
                success: true,
                message: " All employee found successfully of " + branchCode + " branch",
                data: employees
            } );
        } else
        {
            res.status( 401 ).json( {
                success: false,
                message: " employee not found by branch",
            } )
        }
    } catch ( error )
    {
        console.error( 'Error:', error );
        res.status( 500 ).json( { error: 'Internal server error' } );
    }
}

const getAllRM = async ( req, res, next ) =>
{
    try
    {
        const branchCode = req.params.branchCode;
        const rm = await RMofBranch( branchCode );
        if ( rm )
        {
            res.status( 200 ).json( {
                success: true,
                message: " All RM found successfully of " + branchCode + " branch",
                data: rm
            } );
        } else
        {
            res.status( 401 ).json( {
                success: false,
                message: " employee not found by branch",
            } )
        }
    } catch ( error )
    {
        console.error( 'Error:', error );
        res.status( 500 ).json( { error: 'Internal server error' } );
    }
}



const saveEmployee = async ( req, res, next ) =>
{
    try
    {
        const employee = req.body;

        const emp = await findOne( employee.EmpID );

        if ( !emp )
        {

            res.status( 404 ).json( {
                success: false,
                message: " employee not found by this id please Register First ",
            } )

        } else
        {

            const employeedetail = await updateEmployee( employee );

            if ( employeedetail[ 0 ] > 0 )
            {
                res.status( 200 ).json( {
                    success: true,
                    message: " Employee Detail Updated Succesfully ",
                } );
            } else
            {
                res.status( 401 ).json( {
                    success: false,
                    message: " employee not saved !  ",
                } )
            }

        }

    } catch ( error )
    {
        console.error( 'Error:', error );
        res.status( 500 ).json( { error: 'Internal server error ' } );
    }
}

const saveNewEmployee = async ( req, res ) =>
{
    try
    {
        const employee = req.body;
        const { EmpID, Email, MobileNo, AdharNo, PanNo } = employee;

        const validationResult = await validateEmployeeDetails( EmpID, Email, MobileNo, AdharNo, PanNo );

        if ( validationResult )
        {
            return res.status( 409 ).json( {
                success: false,
                message: validationResult.message,
                conflictFields: validationResult.conflictFields,
                existingEmployee: validationResult.existingEmployee
            } );
        }
        const newEmployee = await createEmployee( employee );

        if ( newEmployee )
        {
            return res.status( 201 ).json( {
                success: true,
                message: "Employee detail saved successfully.",
                data: newEmployee
            } );
        } else
        {
            return res.status( 500 ).json( {
                success: false,
                message: "Something went wrong, employee not saved!"
            } );
        }

    } catch ( error )
    {
        console.error( "Controller Error:", error );
        return res.status( 500 ).json( {
            success: false,
            message: "Internal server error.",
            error: error.message
        } );
    }
};

const saveNewRM = async ( req, res, next ) =>
{
    try
    {
        const employee = req.body;
        const EmpID = employee.EmpID;

        const existingRM = await findOne( EmpID );
        if ( existingRM ){
            return res.status( 409 ).json( {
                success: false,
                message: "RM/CH/Head or TL with this ID already exists.",
                existingEmployee: { 
                    ID : existingRM.EmpID, 
                    Name : existingRM.Name,  
                    BranchCode : existingRM.BranchCode, 
                    CompanyCode : existingRM.CompanyCode, 
                    Designation : existingRM.Designation, 
                    Department : existingRM.Department, 
                    Email : existingRM.Email, 
                    MobileNo : existingRM.PhoneNo 
                }
            } );
        }
        const result = await createNewRM( employee );
        if ( result )
        {
            res.status( 200 ).json( {
                success: true,
                message: "RM/CH/TL or Head detail saved successfully.",
                data: result
            } );
        } else
        {
            return res.status( 400 ).json( {
                success: false,
                message: "Something went wrong, RM not saved!"
            } );
        }
    }
    catch ( error )
    {
        return res.status( 500 ).json( {
            success: false,
            message: error
        } );

    }
};

    const lastEMPid = async ( req, res, next ) =>
    {
        try
        {
            const newEMPid = await createNewEMPid();

            if ( newEMPid )
            {
                res.status( 200 ).json( {
                    success: true,
                    message: " This ID for RM EMP ID to be use for next RM/CH/Head  ",
                    data: newEMPid
                } );
            } else
            {
                res.status( 401 ).json( {
                    success: false,
                    message: " Last Employee EMP ID not found please refresh the curent page ",
                } )
            }
        } catch ( error )
        {
            console.error( 'Error:', error );
            res.status( 500 ).json( { error: 'Internal server error' } );
        }
    }
    const lastHLid = async ( req, res, next ) =>
    {
        try
        {

            const newHLid = await createNewHLid();

            if ( newHLid )
            {
                res.status( 200 ).json( {
                    success: true,
                    message: " This is Last Employee HL ID",
                    data: newHLid
                } );
            } else
            {
                res.status( 401 ).json( {
                    success: false,
                    message: " Last Employee HL ID not found please refresh the curent page ",
                } )
            }
        } catch ( error )
        {
            console.error( 'Error:', error );
            res.status( 500 ).json( { error: 'Internal server error' } );
        }

    }
    const getDepartment = async ( req, res, next ) =>
    {
        try
        {

            const department = await getAllDepartment();

            if ( department )
            {
                res.status( 200 ).json( {
                    success: true,
                    message: " All Department found successfully ",
                    data: department
                } );
            } else
            {
                res.status( 401 ).json( {
                    success: false,
                    message: " department not found ",
                } )
            }
        } catch ( error )
        {
            console.error( 'Error:', error );
            res.status( 500 ).json( { error: 'Internal server error' } );
        }
    }

    const getDesignation = async ( req, res, next ) =>
    {
        try
        {

            const designation = await getAllDesignation();

            if ( designation )
            {
                res.status( 200 ).json( {
                    success: true,
                    message: " All Designation found successfully ",
                    data: designation
                } );
            } else
            {
                res.status( 401 ).json( {
                    success: false,
                    message: " Designation not found ",
                } )
            }
        } catch ( error )
        {
            console.error( 'Error:', error );
            res.status( 500 ).json( { error: 'Internal server error' } );
        }
    }

    const getEduQualificationOptions = async ( req, res, next ) =>
    {
        try
        {
            const eduQualificationOptions = await getAllEduQualificationOptions();

            if ( eduQualificationOptions )
            {
                res.status( 200 ).json( {
                    success: true,
                    message: " All Edu Qualification Options found successfully ",
                    data: eduQualificationOptions
                } );
            } else
            {
                res.status( 401 ).json( {
                    success: false,
                    message: " Edu Qualification Options not found ",
                } )
            }
        } catch ( error )
        {
            console.error( 'Error:', error );
            res.status( 500 ).json( { error: 'Internal server error' } );
        }
    }
    const getProfQualificationOptions = async ( req, res, next ) =>
    {
        try
        {
            const profQualificationOptions = await getAllProfQualificationOptions();

            if ( profQualificationOptions )
            {
                res.status( 200 ).json( {
                    success: true,
                    message: " All Prof Qualification Options found successfully ",
                    data: profQualificationOptions
                } );
            } else
            {
                res.status( 401 ).json( {
                    success: false,
                    message: " Prof Qualification Options not found ",
                } )
            }
        } catch ( error )
        {
            console.error( 'Error:', error );
            res.status( 500 ).json( { error: 'Internal server error' } );
        }
    }


    module.exports =
    {
        findAllemployees,
        getEmployeeById,
        getAllEmployeeFromBranch,
        getAllRM,
        saveEmployee,
        saveNewEmployee,
        saveNewRM,
        lastEMPid,
        lastHLid,
        getDepartment,
        getDesignation,
        getEduQualificationOptions,
        getProfQualificationOptions

    };
