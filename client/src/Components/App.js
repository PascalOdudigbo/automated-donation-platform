import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import Login from "./Login";
import SignUp from "./SignUp";
import AdministratorLogin from "./AdministratorLogin";
import AdminDashboard from "./AdminDashboard";
import Research from "./Research";

function App() {
  const [userData, setUserData] = useState({});
  return (
    <>
      <Routes>
        <Route path="/adminlogin" element={<AdministratorLogin userData={setUserData} />} />
        <Route path="/admin/*" element={<AdminDashboard/>}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<Login userData={setUserData} />} />
        <Route path="/signup" element={<SignUp userData={setUserData} />} />
        <Route path="/research" element={<Research />} />
      </Routes>

    </>
  );
}

export default App;
