const express = require( 'express' );
const router = express.Router();
const emailController = require( '../controllers/email.controller' );

router.post( "/onboardingSuccessMail",emailController.onboardingSuccessMail );

module.exports = router;