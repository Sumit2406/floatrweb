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

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <h2>All API implemented successfully for login</h2>
      <Button btnLabel="LogOut" rectangualar="false" btnClick={dashbordbtn} disable="false"/>
    </div>
  )
}
