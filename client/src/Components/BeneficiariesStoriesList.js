import React, { useState,useEffect} from "react";
import axios from "axios";

function BeneficiariesStoriesList (){

  const [allStories, setAllStories] = useState([]);

  useEffect(() => {
    axios.get("/stories")
   
    .then(res => {
        console.log(res.data);
        setAllStories(allStories => allStories= res.data);
    })
    .catch(error => {
        if (error.response) {
            alert(error.response.data.error);
        }
    });
  })




  return(
    <>

    <div className="beneficiaries-list">

    <h3 id="Name" className="storyName">
              {{allStories}}
            </h3>

    </div>
    
    </>
  )
}

export default BeneficiariesStoriesList
