import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

//import {useNavigate} from "react-router-dom"

function HomePage(){
    //const navigate = useNavigate()
    const [allCharities, setAllCharities] = useState([])
    
    useEffect(()=>{
        axios.get("charities/index")



    }, [])
    
    
    
    return(
        <>
            <div className="navConatiner">
                <NavBar/>


            </div>
        </>

    );

}

export default HomePage;