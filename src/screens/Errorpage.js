import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Error from "../assets/pngs/Error.png";
import "../scss/App.scss";
export default function Errorpage() {
  const navigate = useNavigate();
  const navigateMainpage = () => {
    navigate("/");
  };
  return (
    <div className="loginBlock container errorpagecontainer">
      {/* <div className="errorpagecontainer"> */}
      <p className="ErrorPageTitle">ERROR</p>
      <div className="errorpage">
        <img src={Error} alt="Error Page" />
      </div>
      <p className="errorpagemsg">Oops! Looks like something rong.</p>
      <p className="errorpagemsg">We are working on it. Sorry!</p>
      <div className="errorpagebutton"><Button
        btnLabel="GO TO HOMEPAGE"
        rectangualar="false"
        btnClick={navigateMainpage}
        disable="true"
      />
      </div>
{/* </div> */}
    </div>
  );
}
