import React from "react";

function Charity({name, address, handleSetSelectedCharity, handleDonateClicked}){
    return(
        <div className="charity" 
        onClick={()=>{
            localStorage.clear();
            handleSetSelectedCharity();
        }}
        >
            <h2>{name}</h2>
            <br/>
            <h5>{address}</h5>
            <button onClick={()=>{handleDonateClicked()}}>Donate</button>
        </div>
    );

}

export default Charity;