import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EditDonations({ targetDonation, handleDataEdited }) {
    // charity name, Charity email, amount donated, Donation frequency, Donation date, Edit)

    const [charityName, setcharityName] = useState(targetDonation?.charity?.name);
    const [charityEmail, setcharityEmail] = useState(targetDonation?.charity?.email);
    const [amountDonated, setAmountDonated] = useState(targetDonation?.amount);
    const [donationFrequency, setDonationFrequency] = useState(targetDonation?.donation_frequency);
    const navigate = useNavigate();


    function handleOnSubmit(event){
        event.preventDefault();
        const editedData = {
            donation_frequency: donationFrequency
        } 
        axios.patch(`/donations/${targetDonation.id}`,editedData)
        .then((res) => {
            console.log(res.data);
            alert("Donations Updated!");
            handleDataEdited();
            navigate("/donors-donations")
          })
          .catch((error) => {
            if (error.response) {
              alert(error.response.data.error);
            }
          });
    }



    return (
        <div className='editDonation'>
            <form className={"form"} >
                <input className='editDonationInput' type="text" name="charityName" placeholder="donation name" value={charityName} readOnly />
                <input className='editDonationInput' type="text" name="charityEmail" placeholder="donation email" value={charityEmail} readOnly />
                <input className='editDonationInput' type="text" name="amountDonated" placeholder="amount donated" value={amountDonated} readOnly />
                <div class="dropdown">
                    <button class="dropbtn">Select Donation Frequency</button>
                    <div class="dropdown-content">
                        <p
                            onClick={(e) => {
                                setDonationFrequency(e.target.innerText);
                            }}
                        >
                            once
                        </p>
                        <p
                            onClick={(e) => {
                                setDonationFrequency(e.target.innerText);
                            }}
                        >
                            monthly
                        </p>
                    </div>
                </div>
                <button onSubmit={handleOnSubmit} className="editButton" type="submit">
                    Edit
                </button>
            </form>


        </div>
    )
}

export default EditDonations