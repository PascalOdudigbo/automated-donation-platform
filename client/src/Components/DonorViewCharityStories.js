import React, { useState } from "react";


function DonorViewCharityStories(charityData) {
    const [charityData, setCharityData] = useState({});
    return (
        <div className="donorViewCharityStoryContainer">
            <div className="navContainer">
                <NavBar />
            </div>
            <h1 className="donorViewCharityStoryPageTitle">{`${charityData?.name.toUpperCase()}'s BENEFICIARY STORIES`}</h1>

            <div className="donorViewCharityStoryPageCharityAboutContainer">
                <h4 className="donorViewCharityStoryPageCharityAboutTitle">{`What's ${charityData?.name} All About`}</h4>

                <p className="donorViewCharityStoryPageCharityAbout">
                    {charityData?.charity_profile?.about_us}
                </p>
            </div>

            <div className="charityAllStoriesContainer">

            </div>

        </div>
    );

}
export default DonorViewCharityStories;