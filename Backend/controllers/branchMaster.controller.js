const express=require("express")
const { findAll,getMinimumWagesByBranch } = require("../repository/branchMaster.repository")


const findAllBranches = async (req, res, next) => {
    const companyCode=req.body.CompanyCode;
    try {
        const branches = await findAll(companyCode);
        res.status(200).json({
            success: true,
            message: "All branches retrieved successfully",
            data: branches
        }); 
    } catch (error) {
        console.error("Error retrieving branches:", error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve branches",
            error: error.message
        });
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
const getMinimumWages =async(req,res,next)=>{
    const branchCode=req.body.branchCode;
    try {
        const Wages = await getMinimumWagesByBranch(branchCode);
        res.status(200).json({
            success: true,
            message: "Minimum Wages retrieved successfully",
            data: Wages
        });
    } catch (error) {
        console.error("Error retrieving Minimum Wages:", error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve Minimum wages !",
            error: error.message
        });
    }

}
module.exports={findAllBranches, getMinimumWages}