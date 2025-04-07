const express=require('express');
const router=express.Router();
const branches =require("../controllers/branchMaster.controller");

router.post("/", branches.findAllBranches);


module.exports=router;