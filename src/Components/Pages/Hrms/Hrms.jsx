import { Col, Container, Row } from "react-bootstrap";
import styles from "./Hrms.module.css";
import 'animate.css';
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';

const Hrms = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0.5, 
    delay:1,
  });
  return (
    <>
      <Container fluid className={`${styles.container} mx-auto`}>
     
            <Row className={`${styles.row}`}>
        <Col className={`${styles.col1}`}>
            <h1 className={styles.headingText}>Parishram Resources</h1>
         <img src="/media/bg.784b5e0fe7be72f1db01.png" alt="hrmsImage" className={styles.image} />

          <div className={`${styles.paragraph}`}>
           <h2 className={styles.tag_h2}>HRMS</h2>
                <p className={styles.hrms_para}>
              Parishram is driving the world of Human resource management to
              adopt cutting edge technology at modern organisations for a
              happier, highly engaged workforce, more efficient and profitable
              businesses.
            </p>
         </div>
          </Col>
        </Row>
    
      </Container>

      {/* Wrapper div for rows with the same width as the Container */}
      <Container fluid className={styles.rowWrapper}>
        <Row       className={`${styles.row2}    `}>
          <Col xs={12} md={6} lg={6} className={`${styles.col2} `}>
            <h1 ref={ref} className={`${styles.hrHeading} ${
                inView ? 'animate__animated animate__bounceInLeft animate__slower' : ''
              }`}>HR Directory</h1>
            <span className={styles.para2}>
              eHRMS will make it possible to handle all information about
              employees centralized in one single platform, organized and
              well-structured.
            </span>
          </Col>
          <Col xs={12} md={6} lg={6} className={`${styles.col3} `}>
            <img
             ref={ref}
              src="/media/directory.080d2d019f7fc0df0ca7.png"
              className={`${
                inView ? 'animate__animated animate__bounceInLeft animate__slower' : ''
              } ${styles.imghrms} img-fluid`}
              alt="HR Directory Image"
            />
          </Col>
        </Row>
        <Row className={styles.row2}>
          <Col xs={12} md={12} lg={12} className={`${styles.col4} `}>
            <h2 className={styles.h2_tag}>Org Charts</h2>
            <img
              src="/media/org.50f10e0502a2dcfc7d1d.png"
              className={` ${styles.orgimg} img-fluid`}
              alt="HR Directory Image"
            />
          </Col>
        </Row>

        <Row className={styles.row2}>
          <Col xs={12} md={6} lg={6} className={`${styles.col3} `}>
            <img
              src="/media/employee.675378a2a9d5d152210d.png"
              className={` ${styles.imghrms} img-fluid`}
              alt="HR Directory Image"
            />
          </Col>
          <Col xs={12} md={6} lg={6} className={`${styles.col2} `}>
            <h1 className={styles.hrHeading}>Employee Self Service</h1>
            <span className={styles.para2}>
              Employee self-service can help many companies save labor hours and
              increase efficiency. Employees are enabled to take care of many
              different human resources (HR)-related and job-related tasks.
            </span>
          </Col>
        </Row>

        <Row
          className={`${styles.row2} `}
          style={{ backgroundColor: "#f8bbd080" }}
        >
          <Col xs={12} md={6} lg={6} className={`${styles.col2} `}>
            <h1 className={styles.hrHeading}>Time & Attendance</h1>
            <span className={styles.para2}>
              Time and attendance software is an efficient way to keep track of
              employee hours whether they are working remotely or in the office.
            </span>
          </Col>
          <Col xs={12} md={6} lg={6} className={`${styles.col3} `}>
            <img
              src="/media/time.987f03039be5eee5647f.png"
              className={` ${styles.imghrms} img-fluid`}
              alt="HR Directory Image"
            />
          </Col>
        </Row>

        <Row className={`${styles.row3} `}>
          <Col xs={12} md={6} lg={6} className={`${styles.col6} `}>
            <h1 className={styles.hrHeading} style={{ color: "black" }}>
              Tuition Assistance
            </h1>
            <span className={styles.para2}>
              Tuition Assistance Plans are offered by a number of companies to
              help pay for continued education in connection with an employees
              current position or for career development
            </span>
          </Col>
          <Col xs={12} md={6} lg={6} className={`${styles.col6} `}>
            <h1 style={{ color: "black" }} className={styles.hrHeading}>
              Travel and Expense
            </h1>
            <span className={styles.para2}>
              With the Expense Management Suite, travel, expense and invoice
              management could not be easier. Maximize control over your AP
              processes with automated integration and real-time monitoring.
            </span>
          </Col>
        </Row>
        <Row>
        <Col xs={12} md={12} lg={12} className={`${styles.col7} `}>
        
            <img
              src="/media/travel.e292f1cdf2cafd3bb1c0.png"
              className={` ${styles.responsiveimg} img-fluid`}
              alt="HR Directory Image"
            />
          </Col>
        </Row>
        <Row
          className={`${styles.row2} `}
          style={{ backgroundColor: "rgba(187, 222, 251, 1)", color: "black" }}
        >
          <Col xs={12} md={6} lg={6} className={`${styles.col3} `}>
            <img
              src="/media/form.2afa090ed63710844a9f.png"
              className={` ${styles.imghrms} img-fluid`}
              alt="HR Directory Image"
            />
          </Col>
          <Col
            xs={12}
            md={6}
            lg={6}
            className={`${styles.col2} `}
            style={{ color: "black" }}
          >
            <h1 className={styles.hrHeading} style={{ color: "black" }}>
              Forms, Policies & Surveys
            </h1>
            <span className={styles.para2}>
              Our Onboarding solution is designed to make onboarding easier for
              everyone. eHRMS provides them with guidance, tools, and
              information they need to feel welcome and become productive
              members of the team.
            </span>
          </Col>
        </Row>
        <Row
          className={`${styles.row2} `}
          style={{ backgroundColor: "white" }}
        >
          <Col xs={12} md={6} lg={6} className={`${styles.col2} `}>
            <h1 className={styles.hrHeading} style={{color:"black"}}>Helpdesk</h1>
            <span className={styles.para2} style={{color:"black"}}>
              Help you settle tech issues quicker and permit IT divisions to
              work proficiently through 24-7 support. It integrates data,
              streamlines workflows. For round-the-clock assistance, use our
              in-house chatbot.
            </span>
          </Col>
          <Col xs={12} md={6} lg={6} className={`${styles.col3} `}>
            <img
              src="/media/helpdesk.ab2d626de728dd4ce7cf.png"
              className={` ${styles.imghrms} img-fluid`}
              alt="HR Directory Image"
            />
          </Col>
        </Row>
        <hr />
        <Row>
    <Col className={styles.col_ser} md={3} xs={12}>
        <div className={styles.col_Ser_Mar}>
            <h2>Services</h2>
            <Link to="/payroll">
                <h5 className={styles.serviceButton}>PayRoll</h5>
            </Link>
            <Link to="/talentacquisition">
                <h5 className={styles.serviceButton}>Talent Acquisition</h5>
            </Link>
            <Link to="/offboarding">
                <h5 className={styles.serviceButton}>OffBoarding</h5>
            </Link>
        </div>
    </Col>
    <Col md={9} xs={12}>
        <img
            src="/media/partner.5ccfcd1b7e898412b5fa.png"
            className={`${styles.imghrms} img-fluid`}
            alt="partner Directory Image"
        />
    </Col>
</Row>


      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Hrms;
