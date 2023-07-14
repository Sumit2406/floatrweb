import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact"
import Blogs from "../screens/Blogs"
import Carrer from "../screens/Career"
import Products from "../screens/Products"
import Description from '../screens/Description';
import "../scss/App.scss"


export default function Navigation() {
  return (
    <div className='mainbody'>
<Routes>
  <Route path="/" element={<Home />} /> 
  <Route path="/contact" element={<Contact />} /> 
  <Route path="/about" element={<About />} /> 
  <Route path="/products" element={<Products />} /> 
  <Route path="/blogs" element={<Blogs />} /> 
  <Route path="/career" element={<Carrer /> } /> 
  <Route path="/description" element={<Description/>}/>
  
</Routes>
    </div>
  )
}
