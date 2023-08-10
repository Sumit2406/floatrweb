import React, {useEffect} from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact"
import Blogs from "../screens/Blogs"
import Carrer from "../screens/Career"
import Products from "../screens/Products"
import Description from '../screens/Description';
import OtpScreen from '../screens/OtpScreen';
import Referral from '../screens/Referral';
import Register from '../screens/Register';
import "../scss/App.scss"
import Dashboard from '../screens/Dashboard';
import Errorpage from '../screens/Errorpage';
import OnBoarding from '../screens/KYC/OnBoarding';
import KycOtp from '../screens/KYC/KycOtp';

import  { getToken } from '../helpers/axiosInstance';
import { useNavigate } from 'react-router-dom';
import ContactDetails from '../screens/KYC/ContactDetails';
import DigilockerPage from '../screens/KYC/DigilockerPage';
import Aboutme from '../screens/KYC/Aboutme';

export default function Navigation() {
const navigate =useNavigate();
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const data = await getToken();
        console.log(data.steps);

        //Commented due to Page not getting moved need to implement Nested Route
        // if(data.steps === 'Registered'){
        //   navigate('Dashboard')
        // }

      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };
fetchToken();  
  }, [navigate]);

  

  return (
    <div className='mainbody'>
<Routes>
  <Route path="/" element={<Home />} /> 
<Route path='/OtpScreen' element={<OtpScreen/>}/>
<Route path='/Referral' element={<Referral/>}/>
<Route path='/Register' element={<Register/>}/>
<Route path="/Dashboard" element={<Dashboard />} />
<Route path="/Onboarding" element={<OnBoarding/>} />
<Route path="/ContactDetails" element={<ContactDetails/>} />
<Route path="/ContactDetails" element={<ContactDetails/>} />
<Route path="/KycOtp" element={<KycOtp/>} />
<Route path="/DigilockerPage" element={<DigilockerPage/>} />
<Route path="/Aboutme" element={<Aboutme/>} />


  <Route path="/products" element={<Products />} /> 
  <Route path="/about" element={<About />} /> 
  <Route path="/blogs" element={<Blogs />} /> 
  <Route path="/career" element={<Carrer /> } /> 
  <Route path="/contact" element={<Contact />} /> 
  <Route path="/description" element={<Description/>}/>
  <Route path='/*' element={<Errorpage/>}/>
</Routes>
    </div>
  )
}
