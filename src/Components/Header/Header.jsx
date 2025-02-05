import { ReactNavbar } from "overlay-navbar";
import { MdAccountCircle } from "react-icons/md";

// import { BiUserMinus } from "react-icons/bi";
import { useEffect, useState } from "react";
import "./Header.css";
import { RiContactsBookLine } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa";

const Header = () => {
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
        {/* Scrollbar elements */}
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

        <ReactNavbar
          logo="/media/logo.png"
          logoWidth="200px"
          burgerColor="black"
          
          burgerClassName="menuBurger"
      
          navColor1="#358BBA"
          navColor2="#1F77A6"
      navColor3="#0E6591"
        navColor4="#00557D"
          burgerColorHover="white"
          // link1Decoration="underline"
          logoHoverColor="blue"
          navClass1="custom_navbar"
          link1Size="1.3rem"
          link1Color="white"
          link1ColorHover="blue"
          link1Padding="1vmax"
          nav2justifyContent="flex-end"
          link1Margin="1.9vmax"
          link2Margin="1.9vmax"
          link3Margin="1.9vmax"
          link4Margin="1vmax"
          nav3justifyContent="flex-start"
          link1Text="Home"
          link1Family="sans-serif"
          link2Text="Hrms"
          link3Text="Recruitment"
          link4Text="Bgv"
          link1Url="/"
          link2Url="/hrms"
          link3Url="/recruitment"
          link4Url="/bgv"
          nav4justifyContent="flex-start"
          searchIconMargin="0.5vmax"
          cartIconMargin="1vmax"
          profileIconMargin="0.5vmax"
          searchIconColor="white"
          cartIconColor="white"
          profileIconColor="white"
          searchIconColorHover="blue"
          cartIconColorHover="blue"
          profileIconColorHover="blue"
          profileIcon={true}
          ProfileIconElement={MdAccountCircle}
          profileIconUrl="/login"
          // searchIcon={true}
          // SearchIconElement={BiUserMinus}
          // SearchIconUrl="/offboarding"
          cartIcon={true}
          CartIconElement={RiContactsBookLine}
          cartIconUrl="/contactus"
     
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

export default Header;
