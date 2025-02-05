import { useState } from 'react';
import styles from './Layout.module.css';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';  
import { RiAdminFill } from "react-icons/ri";
import { GrResources } from "react-icons/gr";
import { CgUserAdd } from "react-icons/cg";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { IoReceiptOutline } from "react-icons/io5";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FcBusinessman } from "react-icons/fc";
import { TbBrandSuperhuman } from "react-icons/tb";
import { MdOutlinePhonelinkSetup } from "react-icons/md";
import { FaBarsProgress } from "react-icons/fa6";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../Redux/Features/Counter/LoginRedux/Login_Slice';
const Layout = () => {
const dispatch=useDispatch()
const navigate=useNavigate()
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    hrManagement: false,
    settings: false,
    systemInit: false, 
    authorization: false,  
    moreOptionsHover: false, 
  });

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleMouseEnter = (menu) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: true,
    }));
  };

  const handleMouseLeave = (menu) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: false,
    }));
  };
  const handleLogout = async () => {
    try {
  
   

      dispatch(logOut());

     
      localStorage.removeItem("userToken"); 

   
      navigate("/login"); 

      setIsDropdownOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
  
    }
  };
  return (
    <div className={`${styles.layout} ${sidebarVisible ? styles.layoutWithSidebar : styles.layoutWithoutSidebar}`}>
      {/* Sidebar */}
      <div className={`${styles.sidebar} ${sidebarVisible ? styles.show : styles.hide}`}>
        <nav className={styles.nav}>
          <ul>
            {/* Main Dropdown */}
            <li
              className={`${styles.dropdown} ${isDropdownOpen.hrManagement ? styles.open : ''}`}
              onMouseEnter={() => handleMouseEnter('hrManagement')}
              onMouseLeave={() => handleMouseLeave('hrManagement')}
            >
              <div className={styles.dropdownHeader}>
                <span className={styles.menuItem}><RiAdminFill className={styles.menic} />Administration</span>
                <span className={styles.dropdownIcon}>
                  {isDropdownOpen.hrManagement ? '▲' : '▼'}
                </span>
              </div>
              <ul className={`${styles.dropdownMenu} ${isDropdownOpen.hrManagement ? styles.showMenu : ''}`}>
                <li><CgUserAdd className={styles.menic} />Employee List</li>
                <li><FaPersonCircleCheck className={styles.menic} />Attendance</li>
                <li><IoReceiptOutline className={styles.menic} />Payroll</li>

           

        
              </ul>
            </li>

            {/* Settings Dropdown */}
                
            <li
                  className={`${styles.dropdown} ${isDropdownOpen.authorization ? styles.open : ''}`}
                  onMouseEnter={() => handleMouseEnter('authorization')}
                  onMouseLeave={() => handleMouseLeave('authorization')}
                >
                  <div className={styles.dropdownHeader}>
                    <span className={styles.menuItem}><MdOutlinePhonelinkSetup className={styles.menic}/>Set Up</span>
                    <span className={styles.dropdownIcon}>
                      {isDropdownOpen.authorization ? '▲' : '▼'}
                    </span>
                  </div>
                  <ul className={`${styles.dropdownMenu} ${isDropdownOpen.authorization ? styles.showMenu : ''}`}>
                
                  <li
                  className={`${styles.dropdown} ${isDropdownOpen.authorization ? styles.open : ''}`}
                  onMouseEnter={() => handleMouseEnter('authorization')}
                  onMouseLeave={() => handleMouseLeave('authorization')}
                >
                  <div className={styles.dropdownHeader}>
                    <span className={styles.menuItem}><TbBrandSuperhuman className={styles.menic}/>Human Resource</span>
                    <span className={styles.dropdownIcon}>
                      {isDropdownOpen.authorization ? '▲' : '▼'}
                    </span>
                  </div>
                  <ul className={`${styles.dropdownMenu} ${isDropdownOpen.authorization ? styles.showMenu : ''}`}>

                  <li><Link className={styles.link_li} to="/home/employeemaster"><TbBrandSuperhuman className={styles.menic}/>Employee Master</Link></li>
                  <li>Leave</li>
                  <li>Salary</li>
                  <li>IncomeTax Slab Master</li>
                  <li>Investment Plan Master</li>
                   
                   <li>Degination</li>
                  
                  </ul>
                </li>
                    <li>Location</li>
                    <li>General</li>
                  </ul>
                </li>

            <li
                  className={`${styles.dropdown} ${isDropdownOpen.systemInit ? styles.open : ''}`}
                  onMouseEnter={() => handleMouseEnter('systemInit')}
                  onMouseLeave={() => handleMouseLeave('systemInit')}
                >
                  <div className={styles.dropdownHeader}>
                    <span className={styles.menuItem}><FaBarsProgress className={styles.menic}/>System Initialization</span>
                    <span className={styles.dropdownIcon}>
                      {isDropdownOpen.systemInit ? '▲' : '▼'}
                    </span>
                  </div>
                  <ul className={`${styles.dropdownMenu} ${isDropdownOpen.systemInit ? styles.showMenu : ''}`}>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                  </ul>
                </li>
            <li
              className={`${styles.dropdown} ${isDropdownOpen.settings ? styles.open : ''}`}
              onMouseEnter={() => handleMouseEnter('settings')}
              onMouseLeave={() => handleMouseLeave('settings')}
            >
              {/*   style={{ width: "100%" }}*/}
              <div className={styles.dropdownHeader}>
                <span className={styles.menuItem}><GrResources className={styles.menic}/>Human Resources</span>
                <span className={styles.dropdownIcon}>
                  {isDropdownOpen.settings ? '▲' : '▼'}
                </span>
              </div>
              <ul className={`${styles.dropdownMenu} ${isDropdownOpen.settings ? styles.showMenu : ''}`}>
                <li>General Settings</li>
                <li>Roles & Permissions</li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        {/* Top Bar */}
        <div className={`${styles.topBar} ${sidebarVisible ? styles.withSidebar : ''} `}>
          <Button
            variant="outline-secondary"
            onClick={toggleSidebar}
            className={styles.sidebarToggleTop}
          >
            <HiOutlineBars3BottomRight className={styles.linesicon} />
          </Button>
          <div className={styles.searchContainer}>
            <input type="text" className={styles.searchInput} placeholder="Search..." />
            <Button variant="outline-primary" className={styles.searchButton}>🔍</Button>
          </div>

          <div className={styles.userOptions}>
            <span className={styles.profileIcon}><FcBusinessman /></span>
            <DropdownButton
              id="dropdown-basic-button"
              title="⋮"
              variant="link"
              className={styles.moreOptions}
              onMouseEnter={() => handleMouseEnter('moreOptionsHover')}
              onMouseLeave={() => handleMouseLeave('moreOptionsHover')}
            >
              <div className={`${styles.moreOptinsDrop} ${isDropdownOpen.moreOptionsHover ? styles.showMenu : ''}`}>
                <Dropdown.Item href="#/action-1" className={styles.moreDropItem}>Option 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2" className={styles.moreDropItem}>Option 2</Dropdown.Item> 
                <Dropdown.Item href="#/action-3"         onClick={handleLogout}  className={styles.moreDropItem}>Log Out</Dropdown.Item>
              </div>
            </DropdownButton>
          </div>
        </div>

        {/* Main Area */}
        <div className={styles.mainArea}>
          {/* <h1>Welcome to the Parishram Element Dashboard !!</h1> */}

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
