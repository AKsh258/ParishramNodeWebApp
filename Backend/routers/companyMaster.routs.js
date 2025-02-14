const express=require('express');
const router=express.Router();
const company =require("../controllers/companyMaster.controller");
const errorMiddleware= require("../middleware/error.middleware");
const authenticateToken = require('../middleware/auth.Middleware');

router.get("/", company.findAllCompanies);

module.exports=router;