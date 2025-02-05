import { useState, useRef, useEffect } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginsubData } from "../../Redux/Features/Counter/LoginRedux/Login_Slice";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

function Login() {
  // Refs for DOM elements
  const switchCtnRef = useRef(null);
  const switchC1Ref = useRef(null);
  const switchC2Ref = useRef(null);
  const switchCircleRefs = [useRef(null), useRef(null)];
  const aContainerRef = useRef(null);
  const bContainerRef = useRef(null);

  // State for form values
  const [email, setEmail] = useState("vikranttiwari@gmail.com");
  const [password, setPassword] = useState("admin");
  const navigate=useNavigate()
  const alert=useAlert()
  const {isAuthenticated,user,error}=useSelector(state=>state.loginData)
  console.log("----------------User",user)
  // console.log("-------------------------isAuth",isAuthenticated)
  const dispatch = useDispatch();
  const [isSwitchVisible, setIsSwitchVisible] = useState(true);

  // Toggle form visibility
  const changeForm = () => {
    // Toggle animation class
    switchCtnRef.current.classList.add("is-gx");

    // Remove the animation class after 1.5 seconds
    setTimeout(() => {
      switchCtnRef.current.classList.remove("is-gx");
    }, 1500);

    // Toggle transform and position
    switchCtnRef.current.classList.toggle("is-txr");
    switchCircleRefs[0].current.classList.toggle("is-txr");
    switchCircleRefs[1].current.classList.toggle("is-txr");

    switchC1Ref.current.classList.toggle("is-hidden");
    switchC2Ref.current.classList.toggle("is-hidden");
    aContainerRef.current.classList.toggle("is-txl");
    bContainerRef.current.classList.toggle("is-txl");
    bContainerRef.current.classList.toggle("is-z200");
  };

  useEffect(() => {
    const allButtons = document.querySelectorAll(".submit");
    const switchBtns = document.querySelectorAll(".switch-btn");

    switchBtns.forEach((button) =>
      button.addEventListener("click", changeForm)
    );

    return () => {
      switchBtns.forEach((button) =>
        button.removeEventListener("click", changeForm)
      );
    };
  }, []);

  // Handle the login form submission
  const loginsub = (e) => {
    e.preventDefault();

    // Dispatch the login action
    dispatch(loginsubData({ email, password }));
  };
  useEffect(() => {
    if (isAuthenticated) {
      alert.success(`Login Successfully  !!`);
      navigate("/home");
    } else if (error) {
      console.error("Authentication Error:", error);
      alert.error(error);
    }
  }, [navigate, isAuthenticated, error, alert, ]);

  return (
    <>
      <div className="main_container">
        <div className="main">
    
          <div
            className="container1 a-container"
            id="a-container"
            ref={aContainerRef}
          >
            <form
              className="form"
              id="a-form"
              method=""
              onSubmit={loginsub} 
              action=""
            >
              <h2 className="form_title title">Create Account</h2>
              <div className="form__icons"></div>
              <span className="form__span">or use email for registration</span>
              <input
                className="form__input"
                type="text"
                placeholder="Name"
                name=""
                
              />
              <input
                className="form__input"
                type="text"
                placeholder="Email"
                value={email}
                name=""
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="form__input"
                value={password}
                name=""
                onChange={(e) => setPassword(e.target.value)} 
                type="password"
                placeholder="Password"
              />
              <button className="form__button button submit">SIGN UP</button>
            </form>
          </div>

          {/* Sign-in container */}
          <div
            className="container1 b-container"
            id="b-container"
            ref={bContainerRef}
          >
            <form
              className="form"
              id="b-form"
              method=""
              onSubmit={loginsub} 
              action=""
            >
              <h2 className="form_title title">Sign in to Website</h2>
              <div className="form__icons"></div>
              <span className="form__span">or use your email account</span>
              <input
                className="form__input"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="form__input"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
              <a className="form__link">Forgot your password?</a>
              <button className="form__button button submit">SIGN IN</button>
            </form>
          </div>

          {/* Switch panel */}
          <div className="switch" id="switch-cnt" ref={switchCtnRef}>
            <div className="switch__circle" ref={switchCircleRefs[0]}></div>
            <div
              className="switch__circle switch__circle--t"
              ref={switchCircleRefs[1]}
            ></div>
            <div className="switch__container" id="switch-c1" ref={switchC1Ref}>
              <h2 className="switch__title title">Welcome Back!</h2>
              <p className="switch__description description">
                To keep connected with us please login with your personal info
              </p>
              <button className="switch__button button switch-btn">
                SIGN IN
              </button>
            </div>
            <div
              className="switch__container is-hidden"
              id="switch-c2"
              ref={switchC2Ref}
            >
              <h2 className="switch__title title">Hello Friend!</h2>
              <p className="switch__description description">
                Enter your personal details and start your journey with us
              </p>
              <button className="switch__button button switch-btn">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
