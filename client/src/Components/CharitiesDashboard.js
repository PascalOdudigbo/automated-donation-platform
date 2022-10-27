import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import CharitiesManageBeneficiaries from "./CharitiesManageBeneficiaries";
import CharitiesManageStories from "./CharitiesManageStories";
import CharityInventoriesManagement from "./CharityInventoriesManagement";


function CharitiesDashboard(charityData) {
  const [charity, setCharity] = useState(charityData);
  const [beneficiaries, setBeneficiaries] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/meCharity")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setCharity(data);

        if (data?.error) {
          navigate("/login");
        }
        else if(data?.approved === null){
            alert("Your charity registration is still pending approval!")
          }
        else if(data?.approved === false){
            alert("Your charity registration wad denied!")
        }
        else {
          fetch(`/a_charitys_beneficiaries/${data?.id}`)
            .then((response) => response.json())
            .then((data) => {
              console.log("BENEFICIARIES:", data);
              setBeneficiaries(data);
              // handleDashboardStatistics(res.data)
            })
            .catch((err) => console.error(err));
        }
      })
      .catch((err) => console.error(err));
  }, []);

  function handleLogout() {
    fetch("/logoutCharity", {
      method: "DELETE",
    }).then(() => navigate("/"));
  }

  return (
    <div className="charitiesDasboardContainer">
      <div className="charitiesDasboardLogoAndTitleContainer">
        <img className="charitiesDasboardLogo"src={logo} alt="logo"/>
        <h1 className="charitiesDasboardTitle">CHARITIES PORTAL</h1>
      </div>

      <div className="charitiesDasboardProfileAndNavigationContainer">
        <div className="charitiesDasboardProfileContainer">
          <div className="charitiesDasboardProfileImageContainer">
            <img className="charityImage" src="" alt="charity image" />
            <h3 id="Name" className="charityName">
              {charity?.name}
            </h3>
          </div>
          <button className="charityEditProfileBtn">Edit Profile</button>
        </div>

        <div className="charitiesDasboardNavigationContainer">
          <Link
            className="charitiesDasboardNavigationLink"
            to="manage-beneficiaries"
          >
            MANAGE BENEFICIARIES
          </Link>
          <Link className="charitiesDasboardNavigationLink" to="manage-inventories">
            MANAGE INVENTORIES
          </Link>
          <Link className="charitiesDasboardNavigationLink" to="manage-stories">
            MANAGE STORIES
          </Link>
          <Link className="charitiesDasboardNavigationLink" to="">
            VIEW DONORS
          </Link>
        </div>

        <button className="charityLogoutbtn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <Routes>
        <Route
          path="/manage-beneficiaries"
          element={
            <CharitiesManageBeneficiaries allBeneficiaries={beneficiaries} setBeneficiaries={setBeneficiaries}/>
          
          }
        />
        {/* CharitiesManageInventories should be in the route below and its the parent component of CharitiesInventoryList*/}
        {/* <Route path="manage-inventories"/> */}



        <Route
          path="/manage-stories"
          element={
            <CharitiesManageStories />
          }
        />
        <Route path="/manage-inventories" element={<CharityInventoriesManagement allBeneficiaries={beneficiaries}/>}/>
      </Routes>
    </div>
  );
}
export default CharitiesDashboard;
