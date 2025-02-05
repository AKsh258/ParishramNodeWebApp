import { Col, Container, Row } from "react-bootstrap"
import styles from "./Footer.module.css"
import { SlSocialFacebook } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {

    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  return (
    <>
    <Container fluid className={styles.container}>
<Row className={styles.row}>
    <Col className={`${styles.col} `}  xs={12} md={6} lg={4} >
    <h1 className={styles.heading} >Parishram Resources</h1>
<h4>Subscribe to our newsletter</h4>
<p>For updates on compliance, payroll management and other industry insights</p>
<div  className={styles.socialIcon}>
<input className={styles.form__input} name="email" type="email" placeholder="Email Address" />
<FaTelegramPlane className={styles.FaTelegramPlane}/>
</div>
    </Col>
   
    <Col className={`${styles.col} `}  xs={12} md={6} lg={2} >
    <h4 >Services</h4>
 
    <Link to="/hrms"><span className={styles.linkDec}>HRMS</span></Link>
    <Link  className={styles.linkDec} to="/bgv"><span>BGV</span></Link>
    <Link to="/outsourcing">  <span className={styles.linkDec}>Staffing & OutSourcing</span></Link>
    <Link to="/payroll"><span>Payroll</span></Link>
  
  

    </Col>
    <Col className={`${styles.col} `}  xs={12} md={2} lg={2} >
    <h4>Link</h4>

    <Link className={styles.link} to="/"><span>Home</span></Link>
  
    <Link to="/recruitment"><span className={styles.linkDec}>Recruitment</span></Link>
    <Link to="/talentacquisition">    <span className={styles.linkDec}>Talent Acquisition</span></Link>
      <Link to="/offboarding">   <span className={styles.linkDec}>Offboarding</span></Link>
    <Link to="/aboutus"><span className={styles.linkDec}>About Us</span></Link>
    <Link to="/contactus"><span className={styles.linkDec}>Contact Us</span></Link>
   
   

 
    </Col>
    <Col className={`${styles.col1} `} xl={2} xs={12}>
    <h4>Social</h4>
<div  className={styles.socialIcon}>
<TiSocialYoutube/><SlSocialFacebook/><SlSocialLinkedin/>
</div>
<div  className={styles.socialIcon}>
<FaXTwitter/><FaSquareInstagram/><SlSocialLinkedin/>
</div>
    </Col>
</Row>
{/* <Row className={styles.row}>
<Col className={`${styles.col} `} >
<hr  />
</Col>

</Row> */}
<Row className={styles.row}>
<Col className={`${styles.col} d-flex justifycontent-around`} >
<img
        src="/media/logo.png"
        alt="Parishram Resources Logo"
        className={styles.logoImage}
      />
</Col>
<Col className={`${styles.col} `} >

<div className={styles.adressdiv} >
    <h2>Contact Us</h2>
    <h4>Address</h4>
    <span>5th Floor GP 28, TAG 28, Sub. <br /> Major Laxmi Chand Rd, Sector 18, <br /> Gurugram, Sarhol, Haryana 122015</span>
    <h4>E-mail </h4>
   <span> info@parishram.co.in</span>
    <h4>Phone</h4>
   <span> +91 88265 33176</span>

</div>
</Col>

</Row>
<Row className={styles.row}>
<Col className={`${styles.col} `} >
<hr  />
</Col>

</Row>
<Row className={styles.row}>
<Col className={`${styles.col}  `} >
<span className="text-center">© 2024 Parishram. All Rights Reserved.</span>
</Col>

</Row>
    </Container>
    </>
  )
}

export default Footer
