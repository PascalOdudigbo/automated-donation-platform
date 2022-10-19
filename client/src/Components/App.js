import {Routes, Route} from "react-router-dom";
import React,{ useState, useEffect } from "react";
import HomePage from "./HomePage";
function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<HomePage/>}/>
   </Routes>
   
   </>
  );
}

export default App;
