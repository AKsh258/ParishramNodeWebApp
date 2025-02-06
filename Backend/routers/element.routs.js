const express=require('express');
const router=express.Router();
const { loginAdministrator }=require('../controllers/element.controller')
const errorMiddleware= require("../middleware/error.middleware")

router.post("/login", loginAdministrator);

router.use(errorMiddleware);

module.exports=router;