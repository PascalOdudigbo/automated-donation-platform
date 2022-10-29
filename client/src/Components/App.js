import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import Login from "./Login";
import SignUp from "./SignUp";
import AdministratorLogin from "./AdministratorLogin";
import AdminDashboard from "./AdminDashboard";
import Solution from "./Solution";
import Research from "./Research";
import CharityRegister from "./CharityRegister";
import Team from "./Team";
import AboutUs from "./AboutUs";
import CharitiesDashboard from "./CharitiesDashboard";

import DonorsDonateToCharity from "./DonorsDonateToCharity";

import CharityProfile from "./CharityProfile";



function App() {
  const [userData, setUserData] = useState({});
  return (
    <>
      <Routes>
        <Route path="/adminlogin" element={<AdministratorLogin userData={setUserData} />} />
        <Route path="/admin/*" element={<AdminDashboard userData={userData} />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/donate" element={<Login userData={setUserData} />} />
        <Route path="/login" element={<Login userData={setUserData} />} />
        <Route path="/signup" element={<SignUp userData={setUserData} />} />
        <Route path="/charity-register" element={<CharityRegister userData={setUserData} />} />
        <Route path="/solution" element={<Solution />} />
         <Route path="/edit-profile" element={< CharityProfile/>} />
        <Route path="/donate" element={<Login userData={setUserData} />} />
        <Route path="/signup" element={<SignUp userData={setUserData} />} />
        <Route path="/research" element={<Research />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/charity/*" element={<CharitiesDashboard charityData={userData} />} />
        <Route path="/donate-to-charity" element={<DonorsDonateToCharity/>}/>
      </Routes>

    </>
  );
}

export default App;
