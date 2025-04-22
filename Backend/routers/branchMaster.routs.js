const express=require('express');
const router=express.Router();
const branches =require("../controllers/branchMaster.controller");

router.post("/getAllBranchesOfCompany", branches.findAllBranches);

router.get("/getShiftDetails/:branchCode", branches.getShiftDetails);

module.exports=router;