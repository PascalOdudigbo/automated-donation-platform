import React from "react";

function Charity({name, address, description, handleDonateClicked}){
    return(
        <div className="charity">
            <h2>{name}</h2>
            <h5>{address}</h5>
            <p>{description}</p>
            <button onClick={()=>{handleDonateClicked()}}>Donate</button>
        </div>
    );

}

export default Charity;