const express = require( "express" )
const {
    findAll,
    getBranch,
    shiftDetail,
    getHeadCH,
} = require( "../repository/branchMaster.repository" )


const findAllBranches = async ( req, res, next ) =>
{
    const companyCode = req.body.CompanyCode;
    try
    {
        const branches = await findAll( companyCode );
        if ( branches.length > 0 )
        {
            res.status( 200 ).json( {
                success: true,
                message: "All branches retrieved successfully ",
                data: branches
            } );
        } else
        {
            res.status( 400 ).json( {
                success: false,
                message: " There is no company with this company code please select a valid company !"
            } );
        }
    } catch ( error )
    {
        console.error( "Error retrieving branches:", error );
        res.status( 500 ).json( {
            success: false,
            message: "Failed to retrieve branches",
            error: error.message
        } );
    }
};

// const createBranch = async (req, res) => {
//     try {
//         const newBranch = await Branch.create(req.body);
//         res.status(201).json({
//             success: true,
//             message: "Branch created successfully",
//             data: newBranch
//         });
//     } catch (error) {
//         console.error("Error creating branch:", error);
//         res.status(500).json({
//             success: false,
//             message: "Failed to create branch",
//             error: error.message
//         });
//     }
// };

// const updateBranch = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const [updated] = await Branch.update(req.body, {
//             where: { BranchId: id }
//         });
//         if (updated) {
//             const updatedBranch = await Branch.findByPk(id);
//             res.status(200).json({
//                 success: true,
//                 message: "Branch updated successfully",
//                 data: updatedBranch
//             });
//         } else {
//             res.status(404).json({
//                 success: false,
//                 message: "Branch not found"
//             });
//         }
//     } catch (error) {
//         console.error("Error updating branch:", error);
//         res.status(500).json({
//             success: false,
//             message: "Failed to update branch",
//             error: error.message
//         });
//     }
// };

const getBranchDetail = async ( req, res, next ) =>
{
    try
    {

        const branchCode = req.body.branchCode;

        const result = await getBranch( branchCode );

        if ( result )
        {
            res.status( 200 ).json( {
                success: true,
                message: "Branch Detail Found successfully ",
                data: result
            } )
        } else
        {
            res.status( 400 ).json( {
                success: false,
                message: "This Branch Is No Longer Avilable ! "
            } )
        }

    } catch ( Error )
    {

        console.error( "Error In retrieving Branch:", Error );
        res.status( 500 ).json( {
            success: false,
            message: "Failed to retrieve Branch",
            error: Error.message
        } );

    }
}

const getShiftDetails = async ( req, res ) =>
{

    const branchCode = req.params.branchCode;
    try
    {
        const shiftDetails = await shiftDetail( branchCode );

        if ( shiftDetails.length > 0 )
        {
            res.status( 200 ).json( {
                success: true,
                message: "Shift details retrieved successfully",
                data: shiftDetails
            } );
        } else
        {
            res.status( 404 ).json( {
                success: false,
                message: "No shift details found for this branch"
            } );
        }
    } catch ( error )
    {
        console.error( "Error retrieving shift details:", error );
        res.status( 500 ).json( {
            success: false,
            message: "Failed to retrieve shift details",
            error: error.message
        } );
    }
};

const getCommercialHead = async ( req, res, next ) =>
{
    try
    {
        const branchCode = req.body.branchCode;

        const result = await getHeadCH( branchCode );

    

        if ( result )
        {
            res.status( 200 ).json( {
                success: true,
                message: "Head CH found succesfully",
                data: result
            } )
        } else
        {
            res.status( 400 ).json( {
                success: false,
                message: "Head CH not Found AT this branch tray later !"
            } )
        }
    } catch ( error )
    {
        res.status( 500 ).json( {
            success: false,
            message: "Failed to Get CH AND Head BY Branch ",
            error: error.message
        } );
    }
}

module.exports = {
    findAllBranches,
    getBranchDetail,
    getShiftDetails,
    getCommercialHead,
}