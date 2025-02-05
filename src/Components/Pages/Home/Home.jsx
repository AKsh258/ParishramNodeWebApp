import { Col, Container, Row } from "react-bootstrap";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
 
  return (
    <Container fluid className={styles.container}>

      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source
          src="/media/bgvideo.05aef4384c1e36acf944.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <Row className={styles.row1}>
        <Col className={`${styles.heading} `} xs={12}>
          <h1 className={styles.headingText}>Parishram Resources</h1>
        </Col>
        <Col className={`${styles.contentText} `}>
          <p className={styles.ContentParagrap}>
          A fully customised comprehensive technological infrastructure with end-to-end service support, for superior human resource management.
          </p>
        </Col>
     
        <Col className={styles.col1}>
      <ul className={styles.ul_Col1}>
        <div className={styles.dot}></div>
      <Link to="/" className={styles.link}> <li className={styles.li_ulcOL1}>
     Home
        </li>
        </Link>
        <Link to="/hrms" className={styles.link}> <li className={styles.li_ulcOL1}>
       HRMS
        </li></Link>
        <Link to="/outsourcing" className={styles.link}>
        <li className={styles.li_ulcOL1}>
       Staffing & OutSourcing
        </li>
        </Link>
        <Link to="/bgv" className={styles.link}>
        <li className={styles.li_ulcOL1}>
  BGV
        </li>
        </Link>
      
          <Link to="/recruitment" className={styles.link}>  <li className={styles.li_ulcOL1}>Recruitment</li></Link>

        <Link to="/aboutus" className={styles.link}>
        <li className={styles.li_ulcOL1}>
      About Us
        </li></Link>
        <Link to="/contactus" className={styles.link}>
        <li className={styles.li_ulcOL1}>
          Contact Us
        </li></Link>
        <Link to="/login" className={styles.link}>
        <li className={styles.li_ulcOL1}>
        Login
        </li></Link>
      </ul>
    </Col>
        <Col className={styles.contactUs}>
        
      
      <div className={styles.contactUsText}>
      <h5>CONTACT US</h5>
        <span>Feel free to get in touch with us. Our team is here to help you with any questions you may have.</span>
        <span>E-mail: <br />
        info@parishram.co.in</span>
        <span>Phone:  <br />
        +91 88265 33176</span>
      </div>
        <Link 
    // to="/contactus" 
    className={`${styles.TakeDemo} mt-5 px-4 py-2 border border-white text-center text-white text-sm font-light`}

  >
    Take a Demo
  </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
