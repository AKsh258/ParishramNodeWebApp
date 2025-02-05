import { Col, Container, Row } from "react-bootstrap";
import styles from "./OutSourcing.module.css";
import Footer from "../../Footer/Footer";

const OutSourcing = () => {
  return (
    <>
      <Container fluid className={`${styles.container} mx-auto`}>
        <Row className={`${styles.row}`}>
          <Col xs={12} className={`${styles.col1}`}>
            <h1 className={styles.headingText}>Parishram Resources</h1>
            <img
              src="/media/card2-2422290 (1).jpg"
              alt="Offboarding"
              className={styles.image}
            />
            <div className={`${styles.paragraph}`}>
              <h2 className={styles.tag_h2}>OutSourcing</h2>
              <p className={styles.hrms_para}>
                Fast, Efficient and Effective Multiple pay structure
                calculations made easier.
              </p>
            </div>
          </Col>
        </Row>

        <Row className={`${styles.row2} bg-dark`}>
          <Col xs={12} md={6} lg={6} className={`${styles.col2}`}>
            <h1 className={styles.hrHeading}>PAYROLL PROCESSING</h1>
            <span className={styles.para2}>
              Automated payroll calculation through breakdown of taxes,
              allowances, and deductions. Your employees can access pay slips
              easily through the software or the mobile app.
            </span>
          </Col>
          <Col xs={12} md={6} lg={6} className={`${styles.col3}`}>
            <img
              src="/media/processing.97147a6a5be8756e1ce0.png"
              className={` ${styles.imghrms} img-fluid`}
              alt="HR Directory Image"
            />
          </Col>
        </Row>

        <Row className={`${styles.row4}`}>
          <Col xs={12} md={6} lg={6} className={`${styles.col4}`}>
            <div className={styles.travExpDiv}>
              <h1 className={styles.hrHeading1}>Investment Declaration</h1>
              <span className={styles.para21}>
                Increase your employees compliance with tax norms and ensure
                correct tax deduction at source.
              </span>
            </div>
            <div className={styles.travExpDiv}>
              <h1 className={styles.hrHeading1}>Tax Calculator </h1>
              <span className={styles.para21}>
                Tax calculation makes it easy for you to calculate your tax
                liability and gives you detailed information on how much tax you
                owe or how much of a rebate you can expect.
              </span>
            </div>
            <div className={styles.travExpDiv}>
              <h1 className={styles.hrHeading1}>
                Statutory Reports & Registers
              </h1>
              <span className={styles.para21}>
                Easily access all monthly and annual statutory reports with just
                a single click. From PF, ESIC, P.Tax, LWF to TDS reports, we
                have an exhaustive bucket of reports for all such statutory
                filing needs.
              </span>
            </div>
            <div className={styles.travExpDiv}>
              <h1 className={styles.hrHeading1}>Reimbursement Processing</h1>
              <span className={styles.para21}>
                Create and customize your own reimbursement policies according
                to the type of expenses your employees incur.
              </span>
            </div>
          </Col>

          <Col xs={12} md={6} lg={6} className={`${styles.col4}`}>
            <img
              src="/media/bigpayroll.87e479ebe6b41325df0e.png"
              className={` ${styles.imghrms} img-fluid`}
              alt="HR Directory Image"
            />
          </Col>
        </Row>
    
      </Container>
      <Footer />
    </>
  );
};

export default OutSourcing;
