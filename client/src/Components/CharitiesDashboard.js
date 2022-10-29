import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import CharitiesManageBeneficiaries from "./CharitiesManageBeneficiaries";
import CharitiesManageStories from "./CharitiesManageStories";
import CharityInventoriesManagement from "./CharityInventoriesManagement";
import CharityProfile from "./CharityProfile";


function CharitiesDashboard(charityData) {
  const [charity, setCharity] = useState(charityData);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [allInventories, setAllInventories] = useState([]);
  const [allStories, setAllStories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/meCharity")
      .then((response) => response.json())
      .then((data) => {
        console.log(data?.charity_profile?.about_us);
        setCharity(data);

        if (data?.error) {
          navigate("/login");
        }
        else if(data?.approved === null){
            alert("Your charity registration is still pending approval!");
            handleLogout();
            navigate("/");
          }
        else if(data?.approved === false){
            alert("Your charity registration wad denied!")
            handleLogout()
            navigate("/");
        }
        else {
          fetch(`/a_charitys_beneficiaries/${data?.id}`)
            .then((response) => response.json())
            .then((data) => {
              console.log("BENEFICIARIES:", data);
              if(!data?.error){
                setBeneficiaries(data);
              }
              // handleDashboardStatistics(res.data)
            })
            .catch((err) => console.error(err));

            fetch(`/charities_inventories/${data?.id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("INVENTORIES:", data);
            if(!data?.error){
              setAllInventories(data);
            }
            // setTotalBeneficiaries(
            //   (totalBeneficiaries) => (totalBeneficiaries = data?.length)
            // );
            // setTargetBeneficiary({});
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
        <img onClick={() => navigate("/")} className="charitiesDasboardLogo"src={logo} alt="logo"/>
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
         <Link  to="/edit-profile"> <button className="charityEditProfileBtn">Edit Profile</button></Link>
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
      <CharityProfile charity={ charity} setCharity={setCharity} />
      <Routes>
        <Route
          path="/manage-beneficiaries"
          element={
            <CharitiesManageBeneficiaries allBeneficiaries={beneficiaries} setBeneficiaries={setBeneficiaries}/>
          
          }
        />
        <Route
          path="/manage-stories"
          element={
            <CharitiesManageStories allInventories={allInventories} allBeneficiaries={beneficiaries} setAllBeneficiaries={setBeneficiaries} setAllInventories={setAllInventories} setAllStories={setAllStories}/>
          }
        />
        <Route path="/manage-inventories" element={<CharityInventoriesManagement allBeneficiaries={beneficiaries} />} />
         {/* <Route path="/edit-profile" element={<CharityProfile allBeneficiaries={beneficiaries}/>}/> */}
      </Routes>
    </div>
  );
}
export default CharitiesDashboard;
