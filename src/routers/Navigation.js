import React from 'react'
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

export default function Navigation() {
  return (
    <div className='mainbody'>
<Routes>
  <Route path="/" element={<Home />} /> 
<Route path='/OtpScreen' element={<OtpScreen/>}/>
<Route path='/Referral' element={<Referral/>}/>
<Route path='/Register' element={<Register/>}/>
<Route path='/Dashboard' element={<Dashboard/>}/>

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
