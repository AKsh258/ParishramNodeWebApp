const express=require('express');
const router=express.Router();
const barnches =require("../controllers/branchMaster.controller");
const errorMiddleware= require("../middleware/error.middleware");


router.get("/", barnches.findAllBranches);


router.use(errorMiddleware);

module.exports=router;