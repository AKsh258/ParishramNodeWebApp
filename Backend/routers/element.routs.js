const express=require('express');
const router=express.Router();
const { loginAdministrator }=require('../controllers/element.controller');

router.post("/login", loginAdministrator);

module.exports=router;