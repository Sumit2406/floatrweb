import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from "../components/Button";

export default function Errorpage() {

    const navigate=useNavigate();
    const navigateMainpage=()=>{
        navigate('/');
    }
  return (
    <div className='row d-flex justify-content-center mx-auto'>
    <div className='col-12 d-flex align-items-center justify-content-center flex-column erropage'>
      <h1>Oops!</h1>
      <h2>404 - PAGE NOT FOUND</h2>
      <p>The page you are looking for might have been removed</p>
      <p>had its name changed or is temporarily unavailable</p>
      <Button btnLabel="GO TO HOMEPAGE" rectangualar="false" btnClick={navigateMainpage} disable="true" />
    </div>
    
    </div>
  )
}
