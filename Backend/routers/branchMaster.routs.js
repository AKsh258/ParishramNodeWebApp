const express = require( 'express' );
const router = express.Router();
const branches = require( "../controllers/branchMaster.controller" );

router.post( "/getAllBranchesOfCompany", branches.findAllBranches );

router.get( "/getShiftDetails/:branchCode", branches.getShiftDetails );

router.get( "/branchDetails", branches.getBranchDetail );

router.get( "/headCommHead", branches.getCommercialHead );

module.exports = router;