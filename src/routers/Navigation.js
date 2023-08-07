import React, {useEffect,useState} from 'react'
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

import  { getToken } from '../helpers/axiosInstance';
import { useNavigate } from 'react-router-dom';


export default function Navigation() {
  const [isRegistered, setIsRegistered] = useState(false);
const navigate =useNavigate();
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await getToken();
        const data = token;
        console.log(data.steps);
        // Do something with the token
        setIsRegistered(data.steps === 'Registered');
        isRegistered? navigate('Dashboard') : navigate('/')
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };
fetchToken();  
  }, [isRegistered,navigate]);

  

  return (
    <div className='mainbody'>
<Routes>
  <Route path="/" element={<Home />} /> 
<Route path='/OtpScreen' element={<OtpScreen/>}/>
<Route path='/Referral' element={<Referral/>}/>
<Route path='/Register' element={<Register/>}/>
<Route path="/Dashboard" element={<Dashboard />} />


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
