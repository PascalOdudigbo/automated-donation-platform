import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className={"navbar"}>
      <div className="logo">
        <img onClick={() => navigate("/")} src={logo} alt="logo" />
      </div>

      <NavLink className={"link"} to={"/solution"}>
        Solution
      </NavLink>

      <NavLink className={"link"} to={"/research"}>
        Research
      </NavLink>

      <NavLink className={"link"} to={"/team"}>
        Team
      </NavLink>

      <NavLink className={"link"} to={"/about-us"}>
        About Us
      </NavLink>
      
      <NavLink className={"link"} to={"/login"}>
        Login
      </NavLink>

      <NavLink className={"RegisterCharityNavLink"} to={"/charity-register"}>
        Register Charity
      </NavLink>
    </div>
  );
}

export default NavBar;
