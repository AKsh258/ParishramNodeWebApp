import { Col, Container, Row } from "react-bootstrap";
import styles from "./Talent.module.css";

import Footer from "../../Footer/Footer";


const Talent = () => {
  return (
    <>
        <Container fluid className={`${styles.container}`}>
      <Row className={`${styles.row}`}>
  <Col className={`${styles.col1}`}>
      <img src="/media/bg.784b5e0fe7be72f1db01.png" alt="Taleent" className={styles.image} />
          <h1 className={styles.headingText}>Parishram Resources</h1>
            <div className={`${styles.paragraph}`}>
          {/* <Col className={styles.paraCol1}> */}
            <h1 className={styles.tag_h2}>Talent Acquisition</h1>
              <p className={styles.hrms_para}>
              An all-in-one hiring tool designed to make sourcing, managing and
              onboarding your next hire a breeze.
            </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Wrapper div for rows with the same width as the Container */}
      <Container fluid className={styles.rowWrapper}>
        <Row className={styles.row2}>
          <Col xs={12} md={6} lg={6} className={`${styles.col2} `}>
            <h1 className={styles.hrHeading}>JOB REQUISITION</h1>
            <span className={styles.para2}>
              The job requisition is either send to the direct supervisor of the
              teams manager or to HR, depending on who holds the responsibility.
              Once approved the job requirement can be uploaded to the eHRMS
              portal.
            </span>
          </Col>
          <Col xs={12} md={6} lg={6} className={`${styles.col3} `}>
            <img
              src="/media/p3.7e0de1a4e5e90df0cd8c.png"
              className={` ${styles.imghrms} img-fluid`}
              alt="p3 Image"
            />
          </Col>
        </Row>
        <Row className={styles.row_backimg}>
          <Col xs={12} md={12} lg={12} className={`${styles.col4} `}>
            <h2 className={styles.hrHeading} style={{color:"black"}}>CANDIDATE SOURCING</h2>
            <span className={styles.para2}>
              A proactive search for potential hires to fill current and future
              job openings. The Job Requisition is uploaded to job posting
              websites of your choice.
            </span>
          </Col>
        </Row>

        <Row className={styles.row2}>
          <Col xs={12} md={6} lg={6} className={`${styles.col3} `}>
            <img
              src="/media/ats.183acdae14f2d7550555.png"
              className={` ${styles.imghrms} img-fluid`}
              alt="ats Image"
            />
          </Col>
          <Col xs={12} md={6} lg={6} className={`${styles.col2} `}>
            <h1 className={styles.hrHeading}>APPLICANT TRACKING</h1>
            <span className={styles.para2}>
              The Applicant Tracking module allows you to track each candidate
              through the recruitment process. This includes providing an easy
              way to schedule interviews using integrated calendars on mobile,
              or desktop
            </span>
          </Col>
        </Row>

        <Row
          className={`${styles.row2} `}
          style={{ backgroundColor: "#f8bbd080" }}
        >
          <Col xs={12} md={6} lg={6} className={`${styles.col2} `}>
            <h1 className={styles.hrHeading}>ONBOARDING</h1>
            <span className={styles.para2}>
            Our Onboarding solution is designed to make onboarding easier for everyone. eHRMS provides them with guidance, tools, and information they need to feel welcome and become productive members of the team.
            </span>
          </Col>
          <Col xs={12} md={6} lg={6} className={`${styles.col3} `}>
            <img
              src="media/p1.1e31b46935afdc5abc1d.png"
              className={` ${styles.imghrms} img-fluid`}
              alt="HR Directory Image"
            />
          </Col>
        </Row>

      
      
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Talent;
