const { sendMail } = require( '../config/mail.config');
const { findOne } = require('../repository/employeeMaster.repository');

const onboardingSuccessMail = async ( req, res ) =>
{
    try
    {
        const employee=await findOne(req.body.empid);
        if (!employee) {
            return res.status( 404 ).json( {
                success: false,
                message: 'Employee not found'
            } );
        }
        const to = employee.Email;
        const name = employee.Name;
        const empid = employee.EmpID;

        console.log( 'Sending email to:', to );
        console.log( 'Employee Name:', name );  
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if ( !to || to.trim() === '' || !emailRegex.test(to) )
        {
            return res.status( 400 ).json( {
                success: false,
                message: 'You have not provided the email address so you cannot get the confirmaton email'
            } );
        }

        const result = await sendMail(  to, employee );

        if (result.accepted && result.accepted.length > 0) {
            console.log("Email sent successfully to:", result.accepted);
            res.status( 200 ).json( {
                success: true,
                message: 'Email sent successfully'
            } );
          } else {
            console.log("Email was not accepted by any recipient.");
            res.status( 400 ).json( {             
                success: false,
                message: 'Email was not accepted by any recipient.'
            } );
          }
    } catch ( error )
    {
        console.error( 'Error sending email:', error.message );
        res.status( 500 ).json( { success: false, message: 'Internal server error' } );
    }
}


module.exports = {  onboardingSuccessMail };
