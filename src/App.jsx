
import './App.css'
// import Login from './Components/LoginPage/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

import EmployeeMaster from './Components/Pages/EmployeeMaster/EmployeeMaster';
import Layout from './Components/Users/LayOut/LayOut';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home/Home';
// import Header from './Components/Header/Header';
import Login from './Components/LoginPage/Login';

import ContactUs from './Components/Pages/Contact/ContactUs';
import About from './Components/About_Mission/About';
import Hrms from './Components/Pages/Hrms/Hrms';
import PayRoll from './Components/Pages/Payroll/PayRoll';
import OutSourcing from './Components/Pages/OutSourcing.jsx/OutSourcing';
import Recrcuitment from './Components/Pages/Recruitment/Recrcuitment';
import Bgv from './Components/Pages/BVG/Bgv';
import Talent from './Components/Pages/Talent/Talent';
import OffBoarding from './Components/Pages/OffBoarding/OffBoarding';
import Header2 from './Components/Header/Header2';
import ProtectedRoute from './Components/ProtectedRoutes/ProtectedRout';




const App = () => {
  return (
    <div>



<Router   future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}>

<Header2/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
     

        <Route path="contactus" element={<ContactUs />} />
        <Route path="aboutus" element={<About />} />
        <Route path="hrms" element={<Hrms />} />
        <Route path="payroll" element={<PayRoll />} />
        <Route path="outsourcing" element={<OutSourcing />} />
        <Route path="recruitment" element={<Recrcuitment />} />
        <Route path="talentacquisition" element={<Talent />} />
        <Route path="offboarding" element={<OffBoarding />} />
        <Route path="bgv" element={<Bgv />} />
       {/* Wrap the user and employeemaster routes inside Layout */}
       <Route element={<ProtectedRoute />}>
       <Route path="/home" element={<Layout />}>
        
            <Route path="employeemaster" element={<EmployeeMaster />} />
          </Route>
          </Route>
        </Routes>
        </Router>
    </div>
  )
}

export default App
