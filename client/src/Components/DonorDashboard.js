import React, {useState, useEffect} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import logo from "../images/logo.png";
import EditDonorDasboard from './EditDonorDasboard';


function DonorDashboard() {
    const [donorData, setDonorData] = useState([]);
    const [currentDonor, setCurrentDonor] = useState({});
    const navigate = useNavigate();
    
    
    useEffect(() => {
    fetch("/meDonor")
      .then((response) => response.json())
      .then((data) => {
        // data.error ? navigate("/login") : navigate("/donors-donations");
        localStorage.setCurrentDonor("donorData", JSON.stringify(data));
      })
      .catch((err) => console.error(err));
    }, []);
    
    
       function handleDonorEdit(){
        fetch("/donations")
        .then(response => response.json())
        .then(data => setDonorData(data));
        //history("/allAddresses");
    }
    return (
        <div>
            <div className="donorsDasboardContainer">
                <div className="donorsDasboardLogoAndTitleContainer">
                    {/* <img onClick={() => navigate("/")} className="donorsDasboardLogo" src={logo} alt="logo" /> */}
                    <h1 className="donorsDasboardTitle">Donors Dashboard</h1>
                </div>
            </div>
            <Routes>
            <Route  path={`/editAddress`} element={<EditDonorDasboard targetDonor={currentDonor} handleDataEdit={handleDonorEdit}/>}/>
            
            </Routes>


        </div>

    )
}

export default DonorDashboard