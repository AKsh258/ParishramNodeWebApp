const express=require('express');
const router=express.Router();
const mrfcontroller=require("../controllers/mrf.controller")

router.get("/", mrfcontroller.getAll);

router.post("/", mrfcontroller.save);

module.exports=router;