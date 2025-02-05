import { Col, Container, Row } from "react-bootstrap"
import Footer from "../../Footer/Footer"
import styles from "./Contact.module.css"
import ContactInputs from "./ContactInputs"

const ContactUs = () => {
  return (
    <>
      <Container fluid className={`${styles.container} gradient-background`}>
<Row className={styles.row}>
    <Col className={`${styles.col} `} >
    <h1 className={styles.heading} >Parishram Resources</h1>
</Col>

</Row>

<Row className={styles.row}>
    <Col   className={`${styles.col} mx-auto`}  >
    <h3 className={styles.text_h3}>Contact Us for a Demo</h3>
<ContactInputs/>
<span className={styles.textt}>WE USUALLY REPLY WITHIN 24-48 HOURS</span>
</Col>
<Col className={`${styles.col} `} >
<img className={styles.imgcontact} src="/media/mockuper.5762d71a8b5d8c771d61.png" alt="" />
</Col>
</Row>

</Container>
      <Footer/>
    </>
  )
}

export default ContactUs
