import React, { useState,useEffect} from "react";
// import axios from "axios";

function BeneficiariesStoriesList (){
  const [allCharities, setAllCharities] = useState([]);

  // const [allStories, setAllStories] = useState([]);

  // useEffect(() => {
  //   // axios.get("/stories")
  //   axios.get("/charities")
  //   .then(res => {
  //       console.log(res.data);
  //       setAllCharities(allCharities => allCharities = res.data);
  //       // setAllStories(allStories => allStories= res.data);
  //   })
  //   .catch(error => {
  //       if (error.response) {
  //           alert(error.response.data.error);
  //       }
  //   });
  // })

  useEffect(() => {
    fetch("/stories")
      .then((response) => response.json())
      .then((data) => {
        setStory(data);
        fetch(`/a_beneficiarys_stories/${data?.id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("STORIES:", data);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);


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
