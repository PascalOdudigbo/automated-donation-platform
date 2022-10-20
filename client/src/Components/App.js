import {Routes, Route} from "react-router-dom";
import React,{ useState, useEffect} from "react";
import HomePage from "./HomePage";
import Login from "./Login";
import SignUp from "./SignUp"

function App() {
  const [userData, setUserData] = useState({});
  return (
   <>
   <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/donate" element={<Login userData={setUserData} />} />
      <Route path="/signup" element={<SignUp userData={setUserData} />}/>
   </Routes>
   
   </>
  );
}

export default App;
