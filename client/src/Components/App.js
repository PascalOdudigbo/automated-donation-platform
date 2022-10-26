import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import Login from "./Login";
import SignUp from "./SignUp";
import AdministratorLogin from "./AdministratorLogin";
import AdminDashboard from "./AdminDashboard";
import Solution from "./Solution";
import Research from "./Research";
import CharityLogin from "./CharityLogin";
import CharitySignUp from "./CharitySignUp";
import Team from "./Team";
import CharitiesDashboard from "./CharitiesDashboard";



function App() {
  const [userData, setUserData] = useState({});
  return (
    <>
      <Routes>
        <Route path="/adminlogin" element={<AdministratorLogin userData={setUserData} />} />
        <Route path="/admin/*" element={<AdminDashboard userData={userData}/>}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<Team/>} />
        <Route path="/donate" element={<Login userData={setUserData} />} />
        <Route path="/signup" element={<SignUp userData={setUserData} />} />
        <Route path="/charitylogin" element={<CharityLogin userData={setUserData} />} />
        <Route path="/charityregister" element={<CharitySignUp userData={setUserData} />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/donate" element={<Login userData={setUserData} />} />
        <Route path="/signup" element={<SignUp userData={setUserData} />} />
        <Route path="/research" element={<Research />} />
        <Route path="/charity/*" element={<CharitiesDashboard charityData={userData}/>}/>
      </Routes>

    </>
  );
}

export default App;
