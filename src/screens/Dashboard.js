import React from 'react'
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
const navigate=useNavigate();
  const dashbordbtn = () => {
    console.log(localStorage);
    localStorage.clear();
    navigate('/')
  };

  const kycOnboardingbtn = () => {
    navigate('/Onboarding')
  };

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <h2>All API implemented successfully for login</h2>
      <Button btnLabel="LogOut" rectangualar="false" btnClick={dashbordbtn} disable="false"/>
      <h3>Click below to move to KYC Page</h3>  
      <Button btnLabel="Kyconbording" rectangualar="false" btnClick={kycOnboardingbtn} disable="false"/>
    </div>
  )
}
