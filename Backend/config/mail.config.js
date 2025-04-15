
require( 'dotenv' ).config();

const nodemiler = require( 'nodemailer' );
const transporter = nodemiler.createTransport( {
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
} );

const sendMail = async ( to, emp ) =>
{
  const subject = 'Portal user ID & Password - Parishram Resources Pvt. Ltd : '+emp.Name+'[ '+emp.EmpID+' ]';
  const html = `
  <p><b>Dear ${ emp.Name },</b></p>

  <p>Welcome to On-board with <b>Parishram Resources</b>!</p>

  <p>
    We would like to inform you that your <b>Appointment Letter</b> has been uploaded to your login.
    Please upload the signed copy of the acceptance of both your Offer Letter & Appointment Letter
    within <b>7 days</b> from the receipt of this email.
  </p>

  <p>Please find your login credentials for the ESS portal below:</p>

  <p>
    <b>Portal URL:</b> <a href="https://pess.co.in" target="_blank">https://pess.co.in</a><br/>
    <b>User ID:</b> ${ emp.EmpID }<br/>
    <b>Password:</b> user@123<br/>
    <b>Date of Joining:</b> ${ emp.JoiningDt }<br/>
    <b>Reporting Manager:</b> ${ emp.RMEmpName }
  </p>

  <hr/>

  <p><b>To Download the Appointment Letter:</b></p>
  <p>
    <a href="https://pess.co.in/PrintMobileAppointmentLetter.aspx?EmpCode=${ emp.EmpID }" target="_blank">
      Click here to download your Appointment Letter
    </a><br/>
    <i>Navigation: Home → Report Management → View Appointment Letter</i>
  </p>

  <p><b>To Upload Signed Acceptance:</b></p>
  <p>
    <i>Navigation: Home → Report Management → Upload Acceptance Letter</i>
  </p>

  <hr/>

  <p><b>Parishram Plus Mobile App:</b></p>
  <p>
    We are excited to inform you that our mobile app, <b>Parishram+</b>, is now available for download.<br/>
    <b>Android:</b> <a href="https://play.google.com/store/apps/details?id=com.parisharm.parishram" target="_blank">
      Google Play Store
    </a><br/>
    <b>iOS:</b> <a href="https://apps.apple.com/app/parishram/id6450585395" target="_blank">
      Apple App Store
    </a>
  </p>

  <p><b>Important Notes:</b></p>
  <ul>
    <li>Please change your password after logging in — this is mandatory.</li>
    <li>Keep your password confidential to protect your sensitive information.</li>
  </ul>

  <p><b>App Usage Guide:</b></p>
  <p>
    <b>Hindi:</b> <a href="https://www.youtube.com/watch?v=30lsz_ZM_6c" target="_blank">Watch here</a><br/>
    <b>English:</b> <a href="https://www.youtube.com/watch?v=mH_2sZiSutU&t=57s" target="_blank">Watch here</a><br/>
    <i>The app is available in English, Hindi, and Tamil.</i>
  </p>

  <hr/>

  <p><b>Support Contacts:</b></p>
  <ul>
    <li><b>Mr. Saurabh Chauhan</b> – 8475920303, Email: saurabh2.chauhan@partner.havells.com</li>
    <li><b>Ms. Prity</b> – 9084727446, Email: Hiring.Support@parishram.co.in</li>
    <li><b>Mr. Pankaj Kumar</b> – 9027771467, Email: payrollteam@parishram.co.in</li>
  </ul>

  <p><i>This is a system-generated email. Do not reply.</i></p>

  <p>Thanks & Regards,<br/><b>Parishram Resources Pvt. Ltd.</b></p>
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
