const { sendMail    } = require( '../config/mail.config');

const onboardingSuccessMail = async ( req, res ) =>
{
    try
    {
        const {  to, subject, name, empid, onboardingLink  } = req.body;

        // console.log( "Sending email to:", to );
        // console.log( "Subject:", subject );                     
        // console.log( "Message:", message );

        if ( !to || !subject )
        {
            return res.status( 400 ).json( {
                success: false,
                message: 'Invalid data provided for email'
            } );
        }

        const result = await sendMail(  to, subject, name, empid, onboardingLink  );

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
