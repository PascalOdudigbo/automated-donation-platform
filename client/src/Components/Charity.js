import React from "react";

function Charity({name, address, description, handleDonationToCharity}){
    return(
        <div className="charity">
            <h4>{name}</h4>
            <h5>{address}</h5>
            <p>{description}</p>
            <button onclick={handleDonationToCharity}>Donate</button>
        </div>
    );

}

export default Charity;