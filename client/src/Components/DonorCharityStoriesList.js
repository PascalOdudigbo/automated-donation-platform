import React from "react";

function DonorCharityStoriesList({ allStories }) {
    return (
        <>
            {
                allStories?.map(story =>
                    <div
                        className="donorCharityStoryContainer"
                        key={story?.id}
                    >
                        <h3 className="donorCharityStoryTitle">{story?.title?.toUpperCase()}</h3>
                        <h5 className="donorCharityStoryBeneficiary">{`Beneficiary: ${story?.beneficiary?.name}`}</h5>
                        <h5 className="donorCharityStoryInventory">{`Outreach Item: ${story?.inventory?.item}`}</h5>
                        <h5 className="donorCharityStoryInventoryQuantity">{`Item Quantity: ${story?.inventory?.quantity}`}</h5>
                        <br/>
                        <p className="donorCharityStory">{story?.beneficiary_story}</p>
                        <br/>

                    </div>)
            }
        </>
    );

}
export default DonorCharityStoriesList;