import {Routes, Route} from "react-router-dom";
//import React,{ useState, useEffect } from "react";
import HomePage from "./HomePage";
import Login from "./Login";
function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/donate" element={<Login/>}/>
   </Routes>
   
   </>
  );
}

export default App;
