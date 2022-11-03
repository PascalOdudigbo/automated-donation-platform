import React, { useEffect, useState } from "react";
import DonorCharityStoriesList from "./DonorCharityStoriesList";
import NavBar from "./NavBar";
// get our footer icon imports
import {
    BsInstagram,
    BsFacebook,
    BsGithub,
    BsTwitter,
    BsLinkedin,
  } from "react-icons/bs";
  
let charityData = JSON.parse(localStorage.getItem("selectedCharity"));

function DonorViewCharityStories() {
    // const [charityData, setCharityData] = useState({});
    const [allStories, setAllStories] = useState([]);

    useEffect(()=>{
        charityData = {};
        charityData = JSON.parse(localStorage.getItem("selectedCharity"));
        fetch(`/a_charitys_stories/${charityData?.id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("STORIES:", data);
          if (!data.error) {
            setAllStories(data);
          }
        })
        .catch((err) => console.error(err));

    }, [])

    return (
        <div className="donorViewCharityStoryContainer">
            <div className="navContainer">
                <NavBar />
            </div>
            <h1 className="donorViewCharityStoryPageTitle">{`${charityData?.name?.toUpperCase()}'s BENEFICIARY STORIES`}</h1>

            <div className="donorViewCharityStoryPageCharityAboutContainer">
                <h3 className="donorViewCharityStoryPageCharityAboutTitle">{`WHAT's ${charityData?.name?.toUpperCase()} ALL ABOUT`}</h3>

                <p className="donorViewCharityStoryPageCharityAbout">
                    {charityData?.charity_profile?.about_us}
                </p>
            </div>

            <div className="donorCharityAllStoriesContainer">
                <DonorCharityStoriesList allStories={allStories}/>
            </div>

            <div className="DVCfooter">
              <h3>follow us</h3>
              <ul>
                <li>
                  <BsInstagram />
                </li>
                <li>
                  <BsFacebook />
                </li>
                <li>
                  <BsTwitter />
                </li>
                <li>
                  <BsGithub />
                </li>
                <li>
                  <BsLinkedin />
                </li>
              </ul>
              <h4>2022 Copyright NIA Africa Ltd</h4>
            </div>

        </div>
    );

}
export default DonorViewCharityStories;