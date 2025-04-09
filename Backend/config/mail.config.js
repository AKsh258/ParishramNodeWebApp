
require( 'dotenv' ).config();

console.log( "Email Config Loaded    =======================================" );
console.log( process.env.EMAIL_USER, process.env.EMAIL_PASSWORD );
// Create a transporter object using SMTP transport
const nodemiler = require( 'nodemailer' );
const transporter = nodemiler.createTransport( {
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // use TLS
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
} );

const sendMail = async ( to, subject, name, empid, onboardingLink ) =>
{
    // console.log( "Sending email to-------------------------:", to );
    // console.log( "Subject-------------------------:", subject );
    // console.log( "Message-------------------------:", message );    
    const html = `
    <p>Parishram onboarding success. PFA the onboarding link</p>
    <p><b>Dear ${ name }</b>,</p>
    <p>Welcome to Parishram Resources...</p>
    <p>Download Letter of Intent: 
      <a href="https://pess.co.in/PrintmobileOfferLetter.aspx?EmpCode=${ empid }">Click here</a>
    </p>
    <p>Onboarding link: 
      <a href="${ onboardingLink }">Open Link</a>
    </p>
    <p>Support Team:<br/>
      Mr. Saurabh Chauhan - 98838989389, Email: saurabhkjkml.com<br/>
      Ms. Prity - 8989409898, Email: parimfnmn@parishram.co.in
    </p>
    <p><i>Note: This is a system-generated email. Do not reply.</i></p>
    <p>Thanks & Regards,<br/>Parishram Resources Pvt. Ltd.</p>
  `;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        //text: message,
        html
    };

    return transporter.sendMail( mailOptions );
};

module.exports = { sendMail };
