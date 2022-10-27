import React from "react";


function BeneficiariesStoriesList ({allStories, setBeneficiaryStory, setTargetStory, setStoryTitle}){

  return(
    <>

    <div className="beneficiaries-list">

              {
                allStories?.map(story => 
                <div className="CMS-StoriesItem"
                key={story?.id} 
                onClick={() => {
                  setTargetStory(story);
                  setBeneficiaryStory(story?.beneficiary_story);
                  setStoryTitle(story?.title);
                }}
                >
                  {story?.title}
                </div>)
              }

    </div>
    
    </>
  )
}

export default BeneficiariesStoriesList
