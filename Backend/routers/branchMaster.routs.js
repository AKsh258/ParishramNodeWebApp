const express=require('express');
const router=express.Router();
const branches =require("../controllers/branchMaster.controller");

router.post("/", branches.findAllBranches);

router.get("/getMinWages", branches.getMinimumWages)


module.exports=router;