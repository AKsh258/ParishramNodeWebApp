import { Col, Container, Row } from "react-bootstrap";
import styles from "./OffBoarding.module.css";
import Footer from "../../Footer/Footer";

const OffBoarding = () => {
  return (
    <>
      <Container fluid className={`${styles.container}`}>
      <Row className={`${styles.row}`}>
  <Col className={`${styles.col1}`}>
    <img src="/media/offboarding.15a0c518131f06df8f2f.png" alt="Offboarding" className={styles.image} />
    <h1 className={styles.headingText}>Parishram Resources</h1>
    <div className={`${styles.paragraph}`}>
      <h2 className={styles.tag_h2}>Offboarding</h2>
      <p className={styles.hrms_para}>
        Whether you are an HR manager or a manager in charge
        of the employees exit, it is important to ensure that all
        processes associated with the terminating of an employee are managed correctly. 
        Exit management software enables organizations to make sure those processes are well executed.
      </p>
    </div>
  </Col>
</Row>

        <Row className={`${styles.row2}`}>
          <Col xs={12} md={6} lg={6} className={`${styles.col2} `}>
            <h1 className={styles.hrHeading} style={{color:"black"}}>EXIT REQUEST</h1>
            <span className={styles.para2}>
            Automated payroll calculation through breakdown of taxes, allowances, and deductions. Your employees can access pay slips easily through the software or the mobile app.
            </span>
          </Col>
          <Col xs={12} md={6} lg={6} className={`${styles.col3} `}>
            <img
              src="/media/processing.97147a6a5be8756e1ce0.png"
              className={` ${styles.imghrms} img-fluid`}
              alt="Processing"
            />
          </Col>
        </Row>
      
        <Row className={`${styles.row4}`}>
          <Col xs={12} md={6} lg={6} className={styles.col4}>
            <div className={styles.travExpDiv}>
              <h1 className={styles.hrHeading1}>EXIT INTERVIEW</h1>
              <span className={styles.para21}>
              The motivation behind the exit interview is to give input on why employees are leaving, what they liked or didnt care for about the organization and what spaces of the organization they feel need improvement. Exit interview software gathers information from exit interviews and offers an analysis of the same.
              </span>
            </div>
            <div className={styles.travExpDiv}>
              <h1 className={styles.hrHeading1}>EXIT CLEARANCE</h1>
              <span className={styles.para21}>
              With Exit Clearance, your HR will have easy access to all the information they need to successfully complete the exit process.
              </span>
            </div>
            <div className={styles.travExpDiv}>
              <h1 className={styles.hrHeading1}>F&F SETTLEMENT </h1>
              <span className={styles.para21}>
              Our F&F module will give your employees full and final settlement, including unpaid salary, leave encasement, and end of service gratuity. Ensure that your Managers maintain full 100% control over all activities related to payroll during employee exit.
              </span>
            </div>
           
        
          </Col>

          <Col xs={12} md={6} lg={6} className={`${styles.col4} ms-auto d-flex justify-content-center align-items-center`}>
  <img
    src="/media/flow.f652ad43b234ba15b217.png"
    className={` ${styles.imghrms1} img-fluid`}
    alt="flow"
  />
</Col>

        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default OffBoarding;
