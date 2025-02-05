import { Col, Container, Row } from "react-bootstrap";
import styles from "./about.Module.css";
import Footer from "../Footer/Footer";
import ContactInputs from "../Pages/Contact/ContactInputs";

const About = () => {
  return (
    <>
        <Container fluid className={`${styles.container}`}>
        <Row className={`${styles.row}`}>
    <Col className={`${styles.col1}`}>
            <img src="/media/professional.ee7f3131e601b134b448.png" alt="AboutUs" className={styles.image} />
            <h1 className={styles.headingText}>Parishram Resources</h1>
            <div className={`${styles.paragraph}`}>
              <h2 className={styles.tag_h2}>Professional Services</h2>
             <p className={styles.hrms_para}>
              We offer professional services that can span multiple industries,
              including finance, accounting, legal, marketing, and virtually
              every type of consultancy you can think of.
            </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Wrapper div for rows with the same width as the Container */}
      <Container className={styles.rowWrapper}>
      <Row>
          <Col className={styles.col11}>
            <h2>Our Mission</h2>
            <span>
              Parishram Resources aim to earn recognition across INDIA and
              beyond for our expertise. Our efficient & cost-effective business
              support delivers the highest standard of customer delivery in a
              timely manner that will ensure that your business grows and
              sustains.
            </span>
            <span>
              Parishram Resources Pvt. Ltd. is a well-entrenched organization in
              the business of HR Services. We are specialized in end-to-end
              Integrated HR Solutions & Staffing.
            </span>
            <span>
              Parishram is part of a large conglomerate with more than USD 10
              Billion of assets under management, dealing with Financial
              Services, Infrastructure, Townships, Oil & Gas,
              Telecommunications; Facility Management, Staffing Solutions, and
              Integrated Security Services.
            </span>
          </Col>
        </Row>
        <Row className={styles.row2}>
   
          <Col xs={12} md={6} lg={6} className={`${styles.col2} `}>
          <div className={styles.col_uldiv}>
            <ul className={`${styles.col_ul}`}>
              <li className={`${styles.col_li}`}>Finance & Accounting</li>
            </ul>
            <span className={styles.para2}>
              Receive steady and continuous compliance support and proper
              guidance to remain compliant and updated with the changes in
              Payroll Related Compliances Management, Compliances for any office
              registered under Shops or Commercial Establishments, and
              Compliances for Factory & Plant armored by an empaneled legal
              pool, assistance in inspections & audits, reply to notices,
              representation in tribunal and courts etc.
            </span>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6} className={`${styles.col2} `}>
          <div className={styles.col_uldiv}>
            <ul className={`${styles.col_ul}`}>
              <li className={`${styles.col_li}`}>Compliance</li>
            </ul>
            <span className={styles.para2}>
              Receive steady and continuous compliance support and proper
              guidance to remain compliant and updated with the changes in
              Payroll Related Compliances Management, Compliances for any office
              registered under Shops or Commercial Establishments, and
              Compliances for Factory & Plant armored by an empaneled legal
              pool, assistance in inspections & audits, reply to notices,
              representation in tribunal and courts etc.
            </span>
            </div>
          </Col>
        </Row>
        <Row className={styles.row1}>
          <Col xs={12} md={6} lg={6} className={`${styles.col2} `}>
       <div className={styles.col_uldiv}>
       <ul className={`${styles.col_ul}`}>
              <li className={`${styles.col_li}`}>Benefits Administration</li>
            </ul>
            <span className={styles.para2}>
              Considering that there are numerous challenges pension
              administrators face, a single point comprehensive solution, which
              perfectly manages the complete gamut of activities related to
              employee retirement benefits like PF Management, Gratuity,
              Superannuation, etc. is offered by highly skilled and experienced
              professionals.
            </span>
       </div>
          </Col>
          <Col xs={12} md={6} lg={6} className={`${styles.col2} `}>
              <div className={styles.col_uldiv}>
            <ul className={`${styles.col_ul}`}>
              <li className={`${styles.col_li}`}>Taxation</li>
            </ul>
            <span className={styles.para2}>
              We specialize in direct and indirect taxation and offer our
              services through a network of Chartered Accountants and Lawyers.
              We assist you with efficient solutions within the ambit of
              taxation laws and keep you up to date with the latest changes in
              tax laws, as and when they arise.
            </span>
            </div>
          </Col>

        </Row>

        <hr />
        <Row>
          <Col md={7} xs={12}>
            <h3 className={styles.text_h3}>Contact Us </h3>
            <ContactInputs />
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
