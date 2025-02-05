import { Card, Carousel, Col, Container, Row, Button } from "react-bootstrap";
import styles from "./Recruitment.module.css";
import { useSpring, animated } from "react-spring";
import { useState, useEffect } from "react";
import Candidate_Apply from "../Contact/CandidateContact/Candidate_Apply";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { FaCreativeCommonsBy } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { LiaBehanceSquare } from "react-icons/lia";
import { TbUserScreen } from "react-icons/tb";
import { CiSaveUp1 } from "react-icons/ci";
import { FaAddressCard } from "react-icons/fa";
import { SiWorkplace } from "react-icons/si";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { PiProhibitFill } from "react-icons/pi";
const Recruitment = () => {
  // React Spring animations for title and cards
  const titleAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(-100px)" },
    config: { tension: 200, friction: 20 }
  });

  const cardAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    config: { tension: 200, friction: 30 },
    delay: 500
  });

  const [showDescription, setShowDescription] = useState(false);
  const [expandedText, setExpandedText] = useState({
    component1: false,
    component2: false,
    feature1: false,
    feature2: false
  });
  // State to track which FAQ answer is currently visible
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Function to toggle visibility of a specific question
  const toggleAnswerVisibility = (questionId) => {
    // If the same question is clicked again, close it, otherwise open the clicked question
    setActiveQuestion((prevState) =>
      prevState === questionId ? null : questionId
    );
  };
  const toggleText = (key) => {
    setExpandedText((prevState) => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  useEffect(() => {
    setShowDescription(true);
  }, []);

  return (
    <>
      <Container fluid className={styles.pageContainer}>
        {/* Main Carousel with project overview */}
        <Carousel className={styles.carousel} interval={5000}>
          <Carousel.Item>
            <img
              className={`${styles.carouselImage} d-block w-100`}
              src="/media/recuritment_.jpg"
              alt="Second slide"
            />
            <div className={styles.carouselTextOverlay}>
              <h1>Parishram Resources</h1>
            </div>
            <Carousel.Caption>
              <h3>Feature Highlights</h3>
              <p>
                Attract quality candidates with Parishram all-in-one talent
                acquisition solution
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={`${styles.carouselImage} d-block w-100`}
              src="/media/recuritment_top_1-1181396.jpg"
              alt="Third slide"
            />
            <div className={styles.carouselTextOverlay}>
              <h1>Parishram Resources</h1>
            </div>
            <Carousel.Caption>
              <h3>Parishram Recruit</h3>
              <p>
                offers a powerful ATS and CRM in a single recruitment platform.
                With scalability, customization, and remote hiring tools,
                Recruit has everything your staffing agency or internal HR team
                needs to match the right candidate to the right role.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className={`${styles.carouselImage} d-block w-100`}
              src="/media/recuritment_top_2.jpg"
              alt="Fourth slide"
            />
            <div className={styles.carouselTextOverlay}>
              <h1>Parishram Resources</h1>
            </div>
            <Carousel.Caption>
              <h3>Dynamic Solutions</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>

        {/* Animated Title */}
        <animated.h1
          style={titleAnimation}
          className={`${styles.title} animatedTitle`}
        >
          Recruitments
        </animated.h1>

        {/* Animated Description */}
        <animated.p
          style={titleAnimation}
          className={`${styles.description} ${
            showDescription ? "show" : ""
          } animatedDescription`}
        >
          Parishram Recruits world-class recruitment software will help you
          find, evaluate, and communicate with candidates for any role. That
          means a more efficient hiring process and new hires that add more
          value to your organization or your clients.
        </animated.p>

        {/* Card Layout with Alternating Sections */}
        <div
          className={styles.section}
          style={{ backgroundColor: "#f1f1f1", paddingTop: "0" }}
        >
          <Row className="bg-dark">
            <Col md={6} sm={12}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card}>
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className={`${styles.img_card} d-block w-100`}
                        src="/media/card1-9841329.jpg"
                        alt="Image 1"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className={`${styles.img_card} d-block w-100`}
                        src="/media/card3-3127883.jpg"
                        alt="Image 2"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className={`${styles.img_card} d-block w-100`}
                        src="/media/card2-2422290 (1).jpg"
                        alt="Image 3"
                      />
                    </Carousel.Item>
                  </Carousel>
                  <Card.Body>
                    <Card.Title>
                      Build a hiring process that puts relationships before
                      resumes
                    </Card.Title>
                    <Card.Text>
                      {expandedText.component1
                        ? "With Parishram Recruit's AI-powered candidate ranking, you'll spend less time checking for prerequisites and more time communicating with qualified individuals. Send custom assessments, conduct collaborative interviews, and extend offers that you can feel confident about."
                        : "Make your hiring process more efficient, ensuring you find the perfect candidate faster and with greater accuracy."}
                      <Button
                        variant="link"
                        onClick={() => toggleText("component1")}
                      >
                        {expandedText.component1 ? "Show Less" : "Read More"}
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>

            <Col md={6} sm={12}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card}>
                  <Card.Body>
                    {/* Image */}
                    <img
                      className={`${styles.img_card1} d-block w-100`}
                      src="/media/recrutment4.jpg"
                      alt="recrutment4"
                    />

                    {/* Title */}
                    <Card.Title className="mt-5">Track & Engage</Card.Title>

                    {/* Paragraph Text with Show Less Button */}
                    <Card.Text>
                      {expandedText.component2
                        ? "With Parishram Recruit's AI-powered candidate ranking, you can streamline your recruitment process. Spend less time filtering resumes and more time focusing on meaningful conversations with qualified candidates. Take control of your hiring with custom assessments and collaborative interviews to ensure you make confident decisions."
                        : "With Parishram Recruit's AI-powered candidate ranking, you can streamline your recruitment process."}
                      <Button
                        variant="link"
                        onClick={() => toggleText("component2")}
                      >
                        {expandedText.component2 ? "Show Less" : "Read More"}
                      </Button>
                    </Card.Text>
                    <Link to="/contactus" className={`${styles.TakeDemo}  `}>
                      Take a Demo
                    </Link>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>
          </Row>
        </div>

        <div className={styles.section} style={{ backgroundColor: "#f1f1f1" }}>
          <h2>Pre-made and custom assessments</h2>
          <Row>
            <Col md={3}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card}>
                  <Card.Body>
                    <div className={styles.iconWrapper}>
                      <TbUserScreen className={styles.icon} />
                    </div>
                    <Card.Title>Pre-screening</Card.Title>
                    <Card.Text>
                      Improve diversity with automated EEO and OFCCP surveys.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>

            {/* Background Check Card */}
            <Col md={3}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card}>
                  <Card.Body>
                    <div className={styles.iconWrapper}>
                      <ImProfile className={styles.icon} />
                    </div>
                    <Card.Title>Background</Card.Title>
                    <Card.Text>
                      Verify identity and employment information before hiring.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>

            {/* General Card */}
            <Col md={3}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card}>
                  <Card.Body>
                    <div className={styles.iconWrapper}>
                      <FaCreativeCommonsBy className={styles.icon} />
                    </div>
                    <Card.Title>General</Card.Title>
                    <Card.Text>
                      Craft custom assessments that target the exact gaps you
                      are trying to fill.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>

            {/* Behavioral Card */}
            <Col md={3}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card}>
                  <Card.Body>
                    <div className={styles.iconWrapper}>
                      <LiaBehanceSquare className={styles.icon} />
                    </div>
                    <Card.Title>Behavioral</Card.Title>
                    <Card.Text>
                      Assess how candidates collaborate with peers and react to
                      work challenges.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>
          </Row>
        </div>

        {/* Back Gropund Srcreenng */}
        <div className={styles.section} style={{ backgroundColor: "#f1f1f1" }}>
          {/* <h2>Employee Background Screening</h2>
          <Row>
            <Col md={6}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card12}>
                  <Card.Body>
                    <div className={styles.iconWrapper}></div>
                    <Card.Title>Background Screening</Card.Title>
                    <Card.Text>
                      Employee background screening validates the candidate’s
                      entire employment history, including past employers,
                      designations and tenues. This includes information about
                      the reasons for leaving previous jobs as well as
                      eligibility for rehire.
                    </Card.Text>
                    <div className={styles.additionalBox}>
                      <h4>
                        Parishram over the years has helped several leading
                        corporates reduce the risk of hiring employee background
                        screening.
                      </h4>
                      <p>
                        Pre or post-employment screening is vital for
                        maintaining workplace safety. Benefits of employee
                        background screening and of conducting background check
                        throughout individuals’ employment tenure cannot be
                        marginalized. Our system is flexible, discreet and cost
                        effective to the changing threat perception, globally.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>

            <Col md={6}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card12}>
                  <Card.Body className={styles.cardBody}>
                    <img
                      className={styles.cardImage1}
                      src="/media/backGround_Screening.png"
                    />
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>
          </Row> */}
          <Row style={{ backgroundColor: "white" }}>
          <Col md={4}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card}>
                  <Card.Body>
                    <div className={styles.iconWrapper}>
                      <LiaBehanceSquare className={styles.icon1} />
                      <Card.Title className={styles.cardTitle}>
                        Keep up with the legal compliance
                      </Card.Title>
                    </div>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>

            <Col md={4}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card}>
                  <Card.Body>
                    <div className={styles.iconWrapper}>
                      <MdOutlineHealthAndSafety className={styles.icon1} />
                      <Card.Title className={styles.cardTitle}>
                        Improved Safety and Security
                      </Card.Title>
                    </div>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>

            <Col md={4}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card}>
                  <Card.Body>
                    <div className={styles.iconWrapper}>
                      <PiProhibitFill className={styles.icon1} />
                      <Card.Title className={styles.cardTitle}>
                        Reduced Drug/Alcohol Abuse
                      </Card.Title>
                    </div>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>
            <Col md={4}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card}>
                  <Card.Body>
                    <div className={styles.iconWrapper}>
                      <CiSaveUp1 className={styles.icon1} />
                      <Card.Title className={styles.cardTitle}>
                        SAVE TIME & MONEY
                      </Card.Title>
                    </div>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>

            <Col md={4}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card}>
                  <Card.Body>
                    <div className={styles.iconWrapper}>
                      <FaAddressCard className={styles.icon1} />
                      <Card.Title className={styles.cardTitle}>
                        A fair scrutinization of facts in the resume
                      </Card.Title>
                    </div>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>

            <Col md={4}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card}>
                  <Card.Body>
                    <div className={styles.iconWrapper}>
                      <SiWorkplace className={styles.icon1} />
                      <Card.Title className={styles.cardTitle}>
                        Keeps your workplace safe and secured for existing
                        employees
                      </Card.Title>
                    </div>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>

      
          </Row>
        </div>
        {/*BackGround Screening */}

        <div className={styles.section} style={{ backgroundColor: "#f1f1f1" }}>
          <h2>Store and filter candidate profiles faster with AI</h2>
          <Row>
            <Col md={6}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card12}>
                  <Card.Body>
                    <div className={styles.iconWrapper}>
                      <TbUserScreen className={styles.icon} />
                    </div>
                    <Card.Title>Centralized candidate database</Card.Title>
                    <Card.Text>
                      Import candidate data from multiple sources, such as
                      employee or partner referrals, job boards, email
                      attachments, and webforms.
                    </Card.Text>
                    <div className={styles.additionalBox}>
                      <h4>AI Advantage</h4>
                      <p>
                        With skillsets defined for your job descriptions, Zia
                        will hand-pick the best role for each candidate in your
                        database.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>

            <Col md={6}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card12}>
                  <Card.Body className={styles.cardBody}>
                    <img
                      className={styles.cardImage}
                         src="/media/AI2.jpg"
                    />
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>

            {/* <Col md={6}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card}>
                  <Card.Body>
                    <div className={styles.iconWrapper}>
                      <FaCreativeCommonsBy className={styles.icon} />
                    </div>
                    <Card.Title>Talent pipeline</Card.Title>
                    <Card.Text>
                      Track where every candidate is in their hiring journey
                      with just a few clicks, and get a quick look at the status
                      of all your open roles
                    </Card.Text>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>

            <Col md={6}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card}>
                  <Card.Body className={styles.cardBody}>
                    <img
                      className={styles.cardImage}
                      src="/media/AI2.jpg"
                    />
                  </Card.Body>
                </Card>
              </animated.div>
            </Col> */}
            <Col md={6}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card12}>
                  <Card.Body>
                    <div className={styles.iconWrapper}>
                      <TbUserScreen className={styles.icon} />
                    </div>
                    <Card.Title>Talent pools</Card.Title>
                    <Card.Text>
                      Find matches faster by categorizing candidates by
                      industry, location, skills, and more, reducing your
                      organizations time-to-fill.
                    </Card.Text>
                    <div className={styles.additionalBox}>
                      <h4>AI Advantage</h4>
                      <p>
                        Zia automatically adds candidates to your talent pool so
                        you can compare, evaluate, and hire faster.
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>

            <Col md={6}>
              <animated.div style={cardAnimation}>
                <Card className={styles.card12}>
                  <Card.Body className={styles.cardBody}>
                    <img
                      className={styles.cardImage}
                      src="/media/aI3.jpg"
                    />
                  </Card.Body>
                </Card>
              </animated.div>
            </Col>
          </Row>
        </div>
   
        <div className={styles.section} style={{ backgroundColor: "#ffffff" }}>
          <h2>Contact Us</h2>
          <Row>
            <Col md={6} xs={12}>
              <Candidate_Apply />
            </Col>
          </Row>

        </div>
        <div className={styles.section} style={{ backgroundColor: "black",color:"white" }}>
          <h2 style={{ color: "white", marginLeft: "80px" }}>
            Frequently Asked Questions
          </h2>
          <Row>
            <Col md={12}>
              {/* First Question */}
              <div className={styles.questionDiv}>
                <div className={styles.showdiv}>
                  <h3 style={{ color: "white" }}>What is Parishram Recruit?</h3>
                  <span
                    onClick={() => toggleAnswerVisibility(1)} 
                    className={styles.plusButton}
                  >
                    {activeQuestion === 1 ? "-" : "+"}{" "}
                    {/* Display - if active, else + */}
                  </span>
                </div>

                <span
                  className={`${styles.answer} ${
                    activeQuestion === 1 ? styles.showAnswer : ""
                  }`}
                >
                  Parishram Recruit is a cloud-based hiring platform that gives
                  HR teams and recruitment agencies the digital tools needed to
                  fill roles quickly and efficiently. Its free to try, and it
                  requires no on-premise software or data storage. From sourcing
                  candidates to prepping them for onboarding, Recruit helps you
                  manage your entire talent pipeline from a single app. Its
                  available through web browsers on any internet-capable device
                  or as a mobile app for Android and iOS.
                </span>
                <hr  className={styles.classNamejwdh}/>
              </div>

              {/* Second Question */}
              <div className={styles.questionDiv}>
                <div className={styles.showdiv}>
                  <h3 style={{ color: "white" }}>
                    Whats the difference between an ATS and a recruitment CRM?
                  </h3>
                  <span
                    onClick={() => toggleAnswerVisibility(2)}
                    className={styles.plusButton}
                  >
                    {activeQuestion === 2 ? "-" : "+"}{" "}
                    {/* Display - if active, else + */}
                  </span>
                </div>

                <span
                  className={`${styles.answer} ${
                    activeQuestion === 2 ? styles.showAnswer : ""
                  }`}
                >
                  Parishram Recruit comes with both an Applicant Tracking System
                  (ATS) and a Candidate Relationship Management platform, often
                  called a recruitment CRM. While an ATS focuses on faster
                  sourcing and better hiring processes through automated
                  workflows, a recruitment CRM has tools that help you nurture
                  passive job seekers and build relationships with candidates.
                  Combined, they allow you to provide an exceptional candidate
                  experience and better quality placements without sacrificing
                  efficiency or speed.
                </span>
                <hr  className={styles.classNamejwdh}/>
              </div>
              {/* Theird Question */}
              <div className={styles.questionDiv}>
                <div className={styles.showdiv}>
                  <h3 style={{ color: "white" }}>
                    What makes Parishram Recruit stands out from other service
                    providers?
                  </h3>
                  <span
                    onClick={() => toggleAnswerVisibility(3)}
                    className={styles.plusButton}
                  >
                    {activeQuestion === 3 ? "-" : "+"}{" "}
                
                  </span>
                </div>

                <span
                  className={`${styles.answer} ${
                    activeQuestion === 3 ? styles.showAnswer : ""
                  }`}
                >
                  Put simply, the customizability and commitment to going beyond
                  the standard ATS experience sets Parishram Recruit apart. Recruit
                  been recognized as a leader in the talent acquisition space
                  for providing end-to-end recruitment features that are
                  tailored to each customers exact needs. Our recruitment CRM
                  functionality has been shown to reduce candidate drop-off
                  rates and pave the way for better employee retention, and our
                  integrations make the entire hiring process seamless no matter
                  what other business apps you use. Read more about how Zoho
                  Recruit has helped businesses around the world.
                </span>
                <hr  className={styles.classNamejwdh}/>
              </div>
                  {/* fourth Question */}
                  <div className={styles.questionDiv}>
                <div className={styles.showdiv}>
                  <h3 style={{ color: "white" }}>
                  How can I get started with Parishram Recruit?
                  </h3>
                  <span
                    onClick={() => toggleAnswerVisibility(4)}
                    className={styles.plusButton}
                  >
                    {activeQuestion === 4 ? "-" : "+"}{" "}
                 
                  </span>
                </div>

                <span
                  className={`${styles.answer} ${
                    activeQuestion === 4 ? styles.showAnswer : ""
                  }`}
                >
          If youre ready to dive right in, check out our 15-day free trial. No forced contracts, and no credit card required.
                </span>
                <hr  className={styles.classNamejwdh}/>
              </div>
                   {/* five Question */}
                   <div className={styles.questionDiv}>
                <div className={styles.showdiv}>
                  <h3 style={{ color: "white" }}>
                  How are Parishram Recruit licenses priced?
                  </h3>
                  <span
                    onClick={() => toggleAnswerVisibility(5)}
                    className={styles.plusButton}
                  >
                    {activeQuestion === 5 ? "-" : "+"}{" "}
                 
                  </span>
                </div>

                <span
                  className={`${styles.answer} ${
                    activeQuestion === 5 ? styles.showAnswer : ""
                  }`}
                >
 Parishram has flexible, per-user pricing plans that make it a great option for businesses of any size or industry. Pay for only what you need. For more information, check out our pricing page.
                </span>
                <hr  className={styles.classNamejwdh}/>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Recruitment;
