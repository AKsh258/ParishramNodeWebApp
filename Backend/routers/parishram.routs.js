const express=require('express');
const router=express.Router();
const parishramController=require("../controllers/parishram.controller")

router.get("/", parishramController.getAll);

router.post("/", parishramController.save);

module.exports=router;