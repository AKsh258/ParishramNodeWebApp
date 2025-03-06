const express=require('express');
const router=express.Router();
const barnches =require("../controllers/branchMaster.controller");

router.post("/", barnches.findAllBranches);


module.exports=router;