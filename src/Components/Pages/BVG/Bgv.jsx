import { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import styles from "./Bgv.module.css";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { FaHouseLock } from "react-icons/fa6";
import { GrIntegration } from "react-icons/gr";
import { MdManageSearch } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdCastForEducation } from "react-icons/md";
import { LuUserRoundCheck } from "react-icons/lu";
import { BsDatabaseGear } from "react-icons/bs";
import { MdCreateNewFolder } from "react-icons/md";
import { SiWikimediafoundation } from "react-icons/si";
import { FaBanSmoking } from "react-icons/fa6";
import { GiPassport } from "react-icons/gi";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineMan2 } from "react-icons/md";
import { FcSearch } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { MdOutlineImagesearchRoller } from "react-icons/md";
import { HiSearch } from "react-icons/hi";
import { MdOutlineDomainVerification } from "react-icons/md";
import { MdOutlineHomeWork } from "react-icons/md";
import { FaChessKing } from "react-icons/fa";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { MdSupervisedUserCircle } from "react-icons/md";
import { PiShoppingBagOpenBold } from "react-icons/pi";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { IoWaterOutline } from "react-icons/io5";
import { SiPcgamingwiki } from "react-icons/si";
import { BsBook } from "react-icons/bs";
import { MdModeOfTravel } from "react-icons/md";
const Bgv = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(`--header 'Content-Type: application/json' 
--data '{
  "name": "morpheus",
  "job": "leader"
}'`);
  const [activeButton, setActiveButton] = useState('Curl');
  const [paragraph, setParagraph] = useState('');
  const [activeCardData, setActiveCardData] = useState("cardData5");
  const [activeQuestion, setActiveQuestion] = useState(null);
  
  const sectionRefs = useRef([]);
  const cardRefs = useRef([]);



  const paragraphs = {
    Curl: `--header 'Content-Type: application/json' 
--data '{
  "name": "morpheus",
  "job": "leader"
}'`,
    JavaScript:`     {['Curl', 'JavaScript', 'PHP', 'Python', 'Ruby'].map((language) => (
          <button
            key={language}
            className={styles.button}
            onClick={() => handleButtonClick(language)}
          >
            {language}
          </button>
        ))}
      </div>

      <div className={styles.textChange}>
        {/* Render the selected language and paragraph */}
        {selectedLanguage && (
          <>
            <h3>{selectedLanguage}</h3>
            <p className={styles.selectedText}>{paragraph}</p>
          </>
        )}`,
    PHP: `<!DOCTYPE html>
<html>
<body>

<pre>
<?php
$a = 5;       // Integer
$b = 5.34;    // Float
$c = "hello"; // String
$d = true;    // Boolean
$e = NULL;    // NULL

$a = (string) $a;
$b = (string) $b;
$c = (string) $c;
$d = (string) $d;
$e = (string) $e;

//To verify the type of any object in PHP, use the var_dump() function:
var_dump($a);
var_dump($b);
var_dump($c);
var_dump($d);
var_dump($e);
?> 
</pre>

<p>Note that when casting a Boolean into string it gets the value "1", and when casting NULL into string it is converted into an empty string "".</p>

</body>
</html>`,
    Python: `#X represents the size of a tumor in centimeters.
X = numpy.array([3.78, 2.44, 2.09, 0.14, 1.72, 1.65, 4.92, 4.37, 4.96, 4.52, 3.69, 5.88]).reshape(-1,1)

#Note: X has to be reshaped into a column from a row for the LogisticRegression() function to work.
#y represents whether or not the tumor is cancerous (0 for "No", 1 for "Yes").
y = numpy.array([0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1])

We will use a method from the sklearn module, so we will have to import that module as well:

from sklearn import linear_model`,
    Ruby: `<!DOCTYPE html>
<html>
<body>

<h1>The textarea element</h1>

<form action="/action_page.php">
  <p><label for="w3review">Review of W3Schools:</label></p>
  <textarea id="w3review" name="w3review" rows="4" cols="50">At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.</textarea>
  <br>
  <input type="submit" value="Submit">
</form>

<p>Click the "Submit" button and the form-data will be sent to a page on the 
server called "action_page.php".</p>

</body>
</html>
`
  };
  const handleButtonClick = (language) => {
    setSelectedLanguage(language);
    setParagraph(paragraphs[language]); 
    setActiveButton(language);
  };


  const toggleAnswerVisibility = (questionId) => {
  
    setActiveQuestion((prevState) =>
      prevState === questionId ? null : questionId
    );
  };



  const handleButtonCardClick = (dataType) => {
    setActiveCardData(dataType);
  };

  const cardData = [
    {
      image: "/media/bg3.jpg",
      title: "Top Indian unicorns love us",
      text: "From promising upstarts to growing SMEs and Enterprises - top companies rely on SpringVerify to screen their candidates before onboarding.",
      link: "#"
    },
    {
      image: "/media/bg2.jpg",
      title: "Delightful candidate experience",
      text: "Our friction-free process offers your candidates a seamless screening experience from form submission to status tracking and process completion.",
      link: "#"
    },
    {
      image: "/media/bgv9.jpg",
      title: "Tailored solutions for your needs",
      text: "We know your business is unique. That’s why we carefully analyze and understand your business first to offer solutions purely based on your needs.",
      link: "#"
    },
    {
      image: "/media/bgv2.png",
      title: "Dedicated customer support",
      text: "As soon as you sign up, we assign a Dedicated Customer Success Manager to assist you proactively throughout your journey with us. Plus, our support team delivers an outstanding service to help you navigate through challenges.",
      link: "#"
    },
    {
      image: "/media/bgv3.png",
      title: "Supports bulk and seasonal hiring",
      text: "Empower high-volume hiring by running checks on multiple candidates simultaneously. Cut costs, save time and manage resources efficiently.",
      link: "#"
    }
  ];
  const cardData4 = [
    {
      icon: <MdOutlineMan2 />,
      title: "Employee Screening",
      text: "Authentication of workforce to accelerate onboarding and verification.",
      link: "#"
    },
    {
      icon: <FcSearch />,
      title: "Risk and Compliance",
      text: "Our friction-free process offers your candidates a seamless screening experience from form submission to status tracking and process completion.",
      link: "#"
    },
    {
      icon: <MdOutlineImagesearchRoller />,
      title: "Instant API Verification",
      text: "Advanced technology and comprehensive database for real-time verifications.",
      link: "#"
    },
    {
      icon: <CgProfile />,
      title: "Banking and Financial Services",
      text: "Digitally transform your customer onboarding and verification journeys.",
      link: "#"
    }
  ];
  const cardData8 = [
    {
      icon: <MdOutlineLaptopChromebook />,
      title: "IT/ITES",
      text: "End-to-end background verification for white-collar employees",
      bgColor: "#E3F8F6",
      iconColor: "#FFDE59",
      link: "#"
    },
    {
      icon: <MdSupervisedUserCircle />,
      title: "BFSI",
      text: "Digital transformation solutions for banking and financial services",
      bgColor: "#cdf1e6",
      iconColor: "#8b0000",
      link: "#"
    },
    {
      icon: <PiShoppingBagOpenBold />,
      title: "E-commerce",
      text: "Track fraudulent buyers and identify gig-worker and seller risks",
      bgColor: "#FFF5FA",
      iconColor: "#E3B529",
      link: "#"
    },
    {
      icon: <MdOutlinePrecisionManufacturing />,
      title: "Manufacturing",
      text: "Comprehensive verifications for blue-collar workforce",
      bgColor: "#f8f8ff",
      iconColor: "#CC6CE7",
      link: "#"
    },
    {
      icon: <FaHandsHoldingCircle />,
      title: "Healthcare",
      text: "Screening and monitoring of doctors and healthcare professionals",
      bgColor: "#9dc209",
      iconColor: "#fc0fc0",
      link: "#"
    },
    {
      icon: <IoWaterOutline />,
      title: "Telecom",
      text: "Verification and onboarding of new customers",
      bgColor: "#536872",
      iconColor: "#adff2f",
      link: "#"
    },
    {
      icon: <SiPcgamingwiki />,
      title: "Gaming",
      text: "KYC verification for faster Player onboarding ",
      bgColor: "#FFF5FA",
      iconColor: "#954535 ",
      link: "#"
    },

    {
      icon: <BsBook />,
      title: "Education",
      text: "Complete verification for secure hiring in academic institutes",
      bgColor: "#F8FFF5",
      iconColor: "#FFDE59",
      link: "00"
    },
    {
      icon: <MdModeOfTravel />,
      title: "Travel",
      text: "Verify agencies, agents and travelers for fraud prevention",
      bgColor: "#F5FAFF",
      iconColor: "#e3f988 ",
      link: "#"
    }
  ];
  const cardData5 = [
    {
      icon: <HiSearch />,
      title: "White Collar Verification",
      text: "Seamless verification and onboarding of professionals",
      link: "#"
    },
    {
      icon: <MdOutlineDomainVerification />,
      title: "Blue Collar Verification",
      text: "Fast, accurate, and hassle-free blue-collar workforce verification",
      link: "#"
    },

    {
      icon: <FaChessKing />,
      title: "Gig Worker Verification",
      text: "Protect against reputational & financial risks with gig worker verification.",
      link: "#"
    },
    {
      icon: <MdOutlineHomeWork />,
      title: "Leadership Verification",
      text: "360-degree verification checks for C-suite and senior leadership",
      link: "#"
    }
  ];
  const cardData9 = [
    {
      title: "140+",
      text1: "Countries",
      text: "AuthBridge is trusted by over 2,000 clients in 140 countries for their background check needs.",
      link: "#"
    },
    {
      title: "2,000+",
      text1: "Customers",
      text: "Over 2,000 companies, both big and small, are growing their business with Authbridge.",
      link: "#"
    },

    {
      title: "1B+",
      text1: "Proprietary Data Records",
      text: "Our database contains over 1 billion proprietary data records for conducting background checks.",
      link: "#"
    },
    {
      title: "15M+",
      text1: "Monthly Verifications",
      text: "AuthBridge conducts an impressive volume of 15 million background checks every month",
      link: "#"
    }
  ];
  const cardData6 = [
    {
      icon: <HiSearch />,
      title: "KYC Solutions",
      text: "Transform your KYC and customer identity verification with our AI-powered KYC solutions.",
      link: "#"
    },
    {
      icon: <MdOutlineDomainVerification />,
      title: "Hindsighting Audit",
      text: "Strengthen risk management practices, enhance compliance & optimize lending process",
      link: "#"
    },

    {
      icon: <FaChessKing />,
      title: "Digital Address Verification",
      text: "Verify the identity and physical address of employees, vendors, customers remotely",
      link: "#"
    },
    {
      icon: <MdOutlineHomeWork />,
      title: "Business Intelligence",
      text: "Comprehensive up-to date and authentic source of data for all aspects of the business",
      link: "#"
    }
  ];
  const cardData7 = [
    {
      icon: <HiSearch />,
      title: "Distributor Due Diligence",
      text: "Comprehensive evaluation and assessment of current and potential Distributors or dealers.",
      link: "#"
    },
    {
      icon: <MdOutlineDomainVerification />,
      title: "Customer Onboarding",
      text: "End-to-End customer onboarding and screening solutions to help you stay ahead of fraud",
      link: "#"
    },

    {
      icon: <FaChessKing />,
      title: "Vendor Due Diligence",
      text: "Comprehensive evaluation and assessment of potential business partners or suppliers.",
      link: "#"
    },
    {
      icon: <MdOutlineHomeWork />,
      title: "Alternate Data Services",
      text: "Augment traditional data sources with valuable insights and enhance decision making",
      link: "#"
    }
  ];
  const cardData2 = [
    {
      title: "Better productivity with workflow automation",
      text: "Save time, automate repetitive tasks and eliminate manual errors. Manage high-volume verifications, track progress, and hire with confidence using SpringVerify.",
      icon: <IoSettingsOutline />
    },
    {
      title: "Plus, your security is our priority",
      text: "We secure all your data with end-to-end encryptions using advanced security controls and complete information governance. Rightly so, we are certified by PCI and ISO ISO27001:2013.",
      icon: <FaHouseLock />
    },
    {
      title: "Integrates with your existing HR systems",
      text: "SpringVerify plugs with your existing ATS and HRIS tools easily. You can rest assured that you don’t have to dedicate time and effort to get started.",
      icon: <GrIntegration />
    },
    {
      title: "World’s first instant KYC on Whatsapp",
      text: "Make instant verifications a reality with ParishramVerify on Whatsapp. Save time, solidify trust and hire on the go.",
      icon: <PiWhatsappLogoDuotone />
    }
  ];
  // Check All in In one Places Obbject
  const cardData3 = [
    {
      icon: <MdManageSearch />,
      title: "ID Verification"
    },
    {
      icon: <FaHome />,
      title: "Address Verification"
    },

    {
      icon: <IoBagCheckOutline />,
      title: "Employment Verification"
    },

    {
      icon: <MdCastForEducation />,
      title: "Education Verification"
    },
    {
      icon: <MdCastForEducation />,
      title: "Court Records Verification"
    },
    {
      icon: <LuUserRoundCheck />,
      title: " Reference Check"
    },
    {
      icon: <BsDatabaseGear />,
      title: " Global database Verification"
    },
    {
      icon: <MdCreateNewFolder />,
      title: "Credit Check"
    },
    {
      icon: <SiWikimediafoundation />,
      title: "Social Media Verification"
    },
    {
      icon: <FaBanSmoking />,
      title: "Drug Test Screening"
    },
    {
      icon: <GiPassport />,
      title: "Passport Verification"
    },
    {
      icon: <FaRegBuilding />,
      title: "DIN Verification"
    }
  ];
  // Intersection Observer to handle section and card visibility on scroll
  useEffect(() => {
    const options = {
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        } else {
          entry.target.classList.remove(styles.show);
        }
      });
    }, options);

    sectionRefs.current.forEach((section) => sectionObserver.observe(section));

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        } else {
          entry.target.classList.remove(styles.show);
        }
      });
    }, options);

    cardRefs.current.forEach((card) => cardObserver.observe(card));

    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
    };
  }, []);
  const handleDocumentationClick = () => {
    window.open('https://documenter.getpostman.com/view/5190410/2sAYHxm3iH', '_blank');
  };


  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Container className={styles.heroContainer}>
        <h1 className={styles.heading}>Parishram Resources</h1>
          <Row className="justify-content-center">
            <Col md={8} lg={6} className={styles.textContainer}>
              <h2 className={styles.heroTitle}>
                Document Verification Made Easy
              </h2>
              <p className={styles.heroDescription}>
                Ensure the authenticity of your documentation with advanced
                verification and cutting-edge technology.
              </p>
              <Link to="/contactus" smooth={true} >
                <Button className={`${styles.serviceButton} `}>
                  Get Started
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        ref={(el) => sectionRefs.current.push(el)}
        className={styles.testimonialsSection}
      >
        <Container>
          <Row>
            <Col
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
              }}
            >
              <Col xl={6}>
                <div>
                  <h1 className={styles.card_h1}>Pick your Industry</h1>
                  <span className={styles.title_card1}>
                    Discover how we enable 2000+ companies with comprehensive
                    Screening & Due Diligence
                  </span>
                </div>
              </Col>
              {cardData8.map((card, index) => (
                <Col lg={2} xs={12} key={index}>
                  <Card
                    key={index}
                    className={styles.card_2}
                    style={{
                      height: "40vh",
                      backgroundColor: card.bgColor
                    }}
                  >
                    <Card.Body>
                      <span
                        className={styles.icons3}
                        style={{ color: card.iconColor }}
                      >
                        {card.icon}
                      </span>

                      <Card.Title
                        className={styles.title_card}
                        style={{ color: "black" }}
                      >
                        {card.title}
                      </Card.Title>
                      <Card.Text style={{ color: "black",fontSize:"13px" }}>
                        {card.text}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
      {/* All Checks  */}
      <section
        ref={(el) => sectionRefs.current.push(el)}
        className={styles.testimonialsSection}
      >
        <Container>
          <Row>
            <Col>
              <h2 className={styles.sectionTitle}>
                All the checks you need in one place
              </h2>

              <Row>
                {cardData3.map((card, index) => (
                  <Col lg={3} key={index}>
                    <Card
                      ref={(el) => cardRefs.current.push(el)}
                      className={styles.card}
                    >
                      <Card.Body className={styles.card_body}>
                        <Card.Title className={styles.title_card1}>
                          <span className={styles.icons_1}>{card.icon}</span>
                          {card.title}
                        </Card.Title>
                        <Card.Text style={{ marginBottom: "20px" }}>
                          {card.text}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        ref={(el) => sectionRefs.current.push(el)}
        className={styles.testimonialsSection}
      >
        <Container>
          <Row>
            <Col>
              <h2 className={styles.sectionTitle}>
                Everything you need to build your preferred verification funnel
              </h2>
              <div className="text-center mb-5">
                Make timely and informed decisions while hiring with
                ParishramVerifys suite of services
              </div>
              <Row>
                {/* Mapping through cardData2 */}
                {cardData2.map((card, index) => (
                  <Col lg={6} key={index}>
                    <Card
                      ref={(el) => cardRefs.current.push(el)}
                      className={styles.card}
                      style={{height:"40vh"}}
                    >
                      <Card.Body >
                        <Card.Title className={styles.title_card}>
                          <span className={styles.icons}>{card.icon}</span>
                          {card.title}
                        </Card.Title>
                        <Card.Text style={{ marginBottom: "20px" }}>
                          {card.text}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        ref={(el) => sectionRefs.current.push(el)}
        className={styles.largeSection}
      >
        <Container>
          <Row>
            <Col>
              <h2 className={styles.sectionTitle}>Built for Scale</h2>

              <div className={styles.cardsContainer_1}>
                {cardData4.map((card, index) => (
                  <Card key={index} className={styles.card_2}>
                    <Card.Body>
                      <span className={styles.icons3}>{card.icon}</span>

                      <Card.Title
                        className={styles.title_card}
                        style={{ color: "white" }}
                      >
                        {card.title}
                      </Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <a
                        href={card.link}
                        style={{ color: "white" }}
                        className={styles.readMoreLink}
                      >
                        {/* <FaArrowRight className={styles.readMoreIcon} /> Read
                        More */}
                      </a>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      
      <section
        ref={(el) => sectionRefs.current.push(el)}
        className={styles.testimonialsSection}
      >
        <Container>
          <Row>
            <Col>
              <h2 className={styles.sectionTitle}>
                A-Z Solutions For All Your Authentication Needs
              </h2>
              <div 
                style={{ display: "flex", gap: "20px", marginBottom: "20px",  }}
              >
                <button className={styles.btnBgv} onClick={() => handleButtonCardClick("cardData5")}>
                  Employee Screening
                </button>
                <button className={styles.btnBgv} onClick={() => handleButtonCardClick("cardData6")}>
                  Financial Intelligence
                </button>
                <button className={styles.btnBgv} onClick={() => handleButtonCardClick("cardData7")}>
                  Due Diligence
                </button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={styles.cardsContainer_1}>
                {/* Render cards based on activeCardData */}
                {activeCardData === "cardData5"
                  ? cardData5.map((card, index) => (
                      <Card key={index} className={styles.card_3}>
                        <Card.Body className={styles.card_body}>
                          <span
                            className={styles.icons3}
                            style={{ color: "black" }}
                          >
                            {card.icon}
                          </span>
                          <Card.Title
                            className={`${styles.title_card} text-center `}
                          >
                            {card.title}
                          </Card.Title>
                          <Card.Text
                            className="text-center"
                            style={{ color: "black" }}
                          >
                            {card.text}
                          </Card.Text>
                          <a
                            href={card.link}
                            style={{ color: "black" }}
                            className={styles.readMoreLink}
                          >
                            {/* Read More  <FaArrowRight className={styles.readMoreIcon} />  */}
                          </a>
                        </Card.Body>
                      </Card>
                    ))
                  : activeCardData === "cardData6"
                  ? cardData6.map((card, index) => (
                      <Card key={index} className={styles.card_3}>
                        <Card.Body className={styles.card_body}>
                          <span
                            className={styles.icons3}
                            style={{ color: "black" }}
                          >
                            {card.icon}
                          </span>
                          <Card.Title
                            className={`${styles.title_card} text-center`}
                            style={{ color: "black" }}
                          >
                            {card.title}
                          </Card.Title>
                          <Card.Text
                            className="text-center"
                            style={{ color: "black" }}
                          >
                            {card.text}
                          </Card.Text>
                          <a
                            href={card.link}
                            style={{ color: "black" }}
                            className={styles.readMoreLink}
                          >
                            Read More{" "}
                            <FaArrowRight className={styles.readMoreIcon} />
                          </a>
                        </Card.Body>
                      </Card>
                    ))
                  : activeCardData === "cardData7"
                  ? cardData7.map((card, index) => (
                      <Card
                        key={index}
                        className={styles.card_3}
                        style={{ color: "white" }}
                      >
                        <Card.Body className={styles.card_body}>
                          <span
                            className={styles.icons3}
                            style={{ color: "black" }}
                          >
                            {card.icon}
                          </span>
                          <Card.Title
                            className={`${styles.title_card} text-center`}
                          >
                            {card.title}
                          </Card.Title>
                          <Card.Text
                            className="text-center"
                            style={{ color: "black" }}
                          >
                            {card.text}
                          </Card.Text>
                          <a
                            href={card.link}
                            style={{ color: "black" }}
                            className={styles.readMoreLink}
                          >
                            {/* Read More <FaArrowRight className={styles.readMoreIcon} />  */}
                          </a>
                        </Card.Body>
                      </Card>
                    ))
                  : null}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        ref={(el) => sectionRefs.current.push(el)}
        className={styles.largeSection}
      >
        <Container>
          <Row>
            <Col>
              <h2 className={styles.sectionTitle}>
                What makes Parishram Bgv unique?
              </h2>

              <div className={styles.cardsContainer_1}>
                {cardData.map((card, index) => (
                  <Card key={index} className={styles.card_1}>
                    <div className={styles.cardImageContainer_1}>
                      <img
                        src={card.image}
                        alt={card.title}
                        className={styles.cardImage_1}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className={styles.title_card}>
                        {card.title}
                      </Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <a href={card.link} className={styles.readMoreLink}>
                        {/* <FaArrowRight className={styles.readMoreIcon} /> Read
                        More */}
                      </a>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        id="bgvDetails"
        ref={(el) => sectionRefs.current.push(el)}
        className={styles.details}
      >
        <Container>
          <Row>
            <Col lg={7}>
              <Card
                ref={(el) => cardRefs.current.push(el)}
                className={styles.card}
              >
                <Card.Body>
                  <Card.Title className={styles.title_card}>
                    Reliable background verifications. Purpose-built for
                  </Card.Title>
                  <h1 className={styles.card_h1}>high-growth companies.</h1>
                  <Card.Text>
                    From agile startups to top enterprises - companies trust
                    SpringVerify to make smart hiring decisions with prompt,
                    reliable, and accurate background checks.
                  </Card.Text>
                  <Button
                    as={Link}
                    to="/contactus"
                    className={styles.button_bgv}
                    size="lg"
                  >
                    Contact us
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={5} className={styles.blueGradientCol}>
              <Card
                ref={(el) => cardRefs.current.push(el)}
                className={`${styles.card} ${styles.blueGradientCard}`}
                // style={{
                //   background: "linear-gradient(135deg, #005bb5, #0099ff)"
                // }}
              >
                <Card.Body>
                  <div className={styles.cardImageContainer}>
                    <img
                      src="/media/bg1.jpg"
                      alt="Background Checks"
                      className={styles.cardImage}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

 

      <section
        ref={(el) => sectionRefs.current.push(el)}
        className={styles.largeSection}
      >
        <Container className={styles.container_bgCoplor}>
          <Row>
            <Col lg={7} className="mb-5">
              <h2 className={styles.sectionTitle}>
                Clear Insights, Clear Decisions.
              </h2>
              <span className="" style={{marginLeft:"90px"}}>
                Business grows when you build trust in people
              </span>
            </Col>
            <Col lg={5} className={`${styles.col3} mb-5 `}>
              <Button as={Link} to="/contactus" className={styles.button_bgv}>
                Contact Us
              </Button>
              <Button as={Link} to="/contactus" className={styles.button_bgv}>Book a Demo</Button>
            </Col>
          </Row>
          <Row>
            {/* <div className={styles.cardsContainer_1}> */}
            {cardData9.map((card, index) => (
              <Col lg={3} key={index} className={styles.col_Back}>
                <Card key={index} className={styles.card_7}>
                  <Card.Body>
                    <span className={styles.icons3} style={{ color: "black" }}>
                      {card.title}
                    </span>

                    <Card.Title
                      className={styles.title_card}
                      style={{ color: "black" }}
                    >
                      {card.text1}
                    </Card.Title>

                    <Card.Text style={{ color: "black" }}>
                      {card.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {/* </div> */}
          </Row>
        </Container>
      </section>
      <section
        ref={(el) => sectionRefs.current.push(el)}
        className={styles.securitySection}
      >
        <Container>
          <Row className={styles.apiRow}>
          <Col className={styles.colImg_Change}> 
      <div className={styles.api}>
    
        {['Curl', 'JavaScript', 'PHP', 'Python', 'Ruby'].map((language) => (
          <button
            key={language}
            className={`${styles.button1} ${activeButton === language ? styles.active : ''}`}
            onClick={() => handleButtonClick(language)}
          >
            {language}
          </button>
        ))}
      </div>

      <div className={styles.textChange}>
        {/* Render the selected language and paragraph */}
        {selectedLanguage && (
          <>
            <h3>{selectedLanguage}</h3>
            <p className={styles.selectedText}>{paragraph}</p>
          </>
        )}
      </div>
    </Col>
            <Col>
              <div className={styles.cardsContainer_1}>
                <Card className={styles.card_1}>
                  <Card.Body className={styles.cardbd}>
                  <span 
              className={styles.apiDocumentation} 
              onClick={handleDocumentationClick}
              style={{ cursor: 'pointer' }}
            >
              API Documentation
            </span>
                    <Card.Title className={styles.title_card}>
                      Powerful and flexible API
                    </Card.Title>
                    <Card.Text>
                      Our powerful API gives you an unmatched verification
                      experience. Meaning, you can start building on your
                      existing HRIS and ATS platforms effortlessly. Plus,
                      Blockchain and Machine Learning make your background
                      checks faster, easier, and more accurate.
                    </Card.Text>
                    <a className={styles.readMoreLink}    onClick={handleDocumentationClick}>
                      Access our API Documentation
                      <FaArrowRight className={styles.readMoreIcon} />
                    </a>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        ref={(el) => sectionRefs.current.push(el)}
        className={styles.testimonialsSection}
      >
        <Container>
          <Row>
            <Col>
              <h2 className={styles.sectionTitle}>What our client says</h2>

              <Row>
                <Col lg={4}>
                  <Card
                    ref={(el) => cardRefs.current.push(el)}
                    className={styles.card}
                  >
                    <Card.Body>
                      <Card.Text>
                        The system saved us so much time and effort. Reliable
                        and easy to use!
                      </Card.Text>
                      <Card.Footer>
                        <small>- Jane Doe, CEO</small>
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4}>
                  <Card
                    ref={(el) => cardRefs.current.push(el)}
                    className={styles.card}
                  >
                    <Card.Body>
                      <Card.Text>
                        Made the process incredibly efficient. Highly
                        recommended!
                      </Card.Text>
                      <Card.Footer>
                        <small>- John Smith, Operations Manager</small>
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>
                <Col lg={4}>
                  <Card
                    ref={(el) => cardRefs.current.push(el)}
                    className={styles.card}
                  >
                    <Card.Body>
                      <Card.Text>
                        Fast, accurate, and trustworthy. Best verification tool
                        we have used.
                      </Card.Text>
                      <Card.Footer>
                        <small>- Alice Johnson, HR Director</small>
                      </Card.Footer>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section 5: FAQ */}
      <section
        ref={(el) => sectionRefs.current.push(el)}
        className={styles.faqSection}
      >
        <Container>
          <div className={styles.section}>
            <h2 style={{ color: "black", marginLeft: "80px" }}>
              Frequently Asked Questions
            </h2>
            <Row>
              <Col md={12}>
                {/* First Question */}
                <div className={styles.questionDiv}>
                  <div className={styles.showdiv}>
                    <h3 style={{ color: "black" }}>
                      What is Background Verification?
                    </h3>
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
                    Background verification is the process that verifies
                    employment history, financial records, criminal records and
                    other activities to verify their authenticity.
                  </span>
                  <hr />
                </div>

                {/* Second Question */}
                <div className={styles.questionDiv}>
                  <div className={styles.showdiv}>
                    <h3 style={{ color: "black" }}>
                      Why do we do Background verification?
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
                    You can see that one of the main reasons for conducting
                    background checks on potential employees is Protect yourself
                    by proving that you have taken all necessary precautions to
                    protect yourself this employee is not a risk to you/your
                    client/the workplace.
                  </span>
                  <hr />
                </div>
                {/* Theird Question */}
                <div className={styles.questionDiv}>
                  <div className={styles.showdiv}>
                    <h3 style={{ color: "black" }}>
                      How many days it will take for background verification?
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
                    It takes on average 3-4 weeks, and sometimes 6-8 weeks, to
                    obtain a complete report about the background of the
                    potential employee. This includes verification of past
                    employment details, education qualifications, and criminal
                    records.
                  </span>
                  <hr />
                </div>
                {/* fourth Question */}
                <div className={styles.questionDiv}>
                  <div className={styles.showdiv}>
                    <h3 style={{ color: "black" }}>
                      What happens if background check fails?
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
                    Failing an employment screening usually means that you will
                    need to look for a new job. A violation or red flag that
                    causes disqualification in one hiring process may not have
                    the same effect everywhere. Some employers are more
                    accommodating and willing to give second chances to
                    candidates.
                  </span>
                  <hr />
                </div>
                {/* five Question */}
                <div className={styles.questionDiv}>
                  <div className={styles.showdiv}>
                    <h3 style={{ color: "black" }}>
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
                    Parishram has flexible, per-user pricing plans that make it
                    a great option for businesses of any size or industry. Pay
                    for only what you need. For more information, check out our
                    pricing page.
                  </span>
                  <hr />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Section 6: Final Call to Action */}
     
      <Footer />
    </div>
  );
};

export default Bgv;
