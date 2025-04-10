const express = require('express');
const router = express.Router();
const gradeMasterController = require('../controllers/gradeMaster.controller.js');

// GET API to fetch all grades from GradeMaster table
router.get('/allGrades' ,  gradeMasterController.getAllGrades);


module.exports = router;


// // POST API to add a new grade from GradeMaster table
// router.post('/grades', gradeMasterController.addGrade);

// // PUT API to update an existing grade from GradeMaster table
// router.put('/grades/:id', gradeMasterController.updateGrade);

// // DELETE API to delete a grade  from GradeMaster table
// router.delete('/grades/:id', gradeMasterController.deleteGrade);

module.exports = router;