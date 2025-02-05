const express=require('express');
const router=express.Router();
const cityController=require("../controllers/cityforce.controller")

router.get("/", cityController.getAll);

router.post("/", cityController.save);

module.exports=router;