import React, { useState,useEffect} from "react";
import axios from "axios";

function BeneficiariesStoriesList (){
  const [allCharities, setAllCharities] = useState([]);

  // const [allStories, setAllStories] = useState([]);

  useEffect(() => {
    axios.get("/charities")
    .then(res => {
        console.log(res.data);
        setAllCharities(allCharities => allCharities = res.data);
        // handleDashboardStatistics(res.data);
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
              {/* {{allCharities}} */}
            </h3>

    </div>
    
    </>
  )
}

export default BeneficiariesStoriesList
