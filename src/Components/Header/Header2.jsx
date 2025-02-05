import Header from "navbar-gsap";
import "./Header.css";
import { FaArrowUp } from "react-icons/fa";

import { useEffect, useState } from "react";


// Define the navigation items with links and custom targets
const navItems = [
  { label: "Home", href: "/", target: "_self" },
  { label: "BGV", href: "/bgv", target: "_self" },
  { label: "HRMS", href: "/hrms", target: "_self" },
  { label: "Recruitment", href: "/recruitment", target: "_self" },
  { label: "Contact Us", href: "/contactus", target: "_parent" }
];

const Header2 = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollThumbPosition, setScrollThumbPosition] = useState(0);
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const checkPageHeight = () => {
      const pageHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      if (pageHeight > windowHeight) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("resize", checkPageHeight);
    checkPageHeight();

    return () => {
      window.removeEventListener("resize", checkPageHeight);
    };
  }, []);

  // Scroll to top when button is clicked
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollThumbPosition = (scrollPosition / documentHeight) * 100;

      setScrollThumbPosition(scrollThumbPosition);
      setScrolling(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div
          className={`scrollbar-line scrollbar-line--1 ${
            scrolling ? "show" : ""
          }`}
        ></div>
        <div
          className={`scrollbar-line scrollbar-line--2 ${
            scrolling ? "show" : ""
          }`}
        ></div>
        <div
          className={`scrollbar-line scrollbar-line--3 ${
            scrolling ? "show" : ""
          }`}
        ></div>

        {/* Only one scroll thumb */}
        <div
          className={`scrollbar-thumb scrollbar-thumb-y ${
            scrolling ? "show" : ""
          }`}
          style={{ top: `${scrollThumbPosition}%` }}
        ></div>
        <Header
   style={{zIndex:"2000"}}
          items={navItems}
          backgroundColor="#4E6EE2"
          className="my_custom_header"
        />
        {showScrollButton && (
          <button
            className="scroll_to_top_button"
            style={{ backgroundColor: "black" }}
            onClick={handleScrollToTop}
          >
            <FaArrowUp style={{ fontSize: "90px" }} />
          </button>
        )}
      </header>
    </>
  );
};

export default Header2;
