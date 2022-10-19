import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar(){
   const navigate = useNavigate();


   return (
    <div className={"navbar"}>
        <div className="title">
            <h1 onClick={()=>navigate("/")}>NIA AFRICA</h1>
        </div>

        <NavLink
            className={"link"}
            to={'/solution'}
        >
            Solution
        </NavLink>

        <NavLink
            className={"link"}
            to={'/research'}
        >
            Research
        </NavLink>

        <NavLink
            className={"link"}
            to={'/team'}
        >
            Team
        </NavLink>

        <NavLink
            className={"link"}
            to={'/about-us'}
        >
            About Us
        </NavLink>

        <NavLink
            className={"link"}
            to={'/donate'}
        >
            Donate
        </NavLink>


    </div>
   );
}

export default NavBar;