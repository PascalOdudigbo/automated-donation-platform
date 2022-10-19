import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Charity from "./Charity";
import axios from "axios";

//import {useNavigate} from "react-router-dom"

function HomePage(){
    //const navigate = useNavigate()
    const [allCharities, setAllCharities] = useState([])
    
    useEffect(()=>{
        axios.get("/charities")
        .then(res => {
            console.log(`Charities Data:`, res.data)
            setAllCharities(res.data);
        }); 
    }, [])
    
    
    
    return(
        <>
            <div className="navConatiner">
                <NavBar/>
                <h4>Charities</h4>
                <div className="CharitiesContainer">
                    {
                        allCharities?.map(charity=>{
                            <Charity
                                key={charity.id}
                                name={charity.name}
                                
                            
                            />
                        })
                    }
                </div>

            </div>
        </>

    );

}

export default HomePage;