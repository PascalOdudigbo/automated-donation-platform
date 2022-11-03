import React, { useState, useEffect, useCallback } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'
// import logo from "../images/logo.png";
import DonorsViewDonationList from './DonorsViewDonationList';
import EditDonations from './EditDonations';
import NavBar from './NavBar';
import {
    BsInstagram,
    BsFacebook,
    BsGithub,
    BsTwitter,
    BsLinkedin,
} from "react-icons/bs";
// import axios from 'axios';

let allDonorDonations = JSON.parse(localStorage.getItem("allDonorDonations"));

function DonorsViewDonations({ donors }) {
    const [donorData, setDonorData] = useState([]);
    const [, setAllDonations] = useState(0);
    const [amountDonated, setAmountDonated] = useState([]);
    const [totalCharities, setTotalCharities] = useState(0);
    const [totalCharitiesDonatedTo, setTotalCharitiesDonatedTo] = useState(0);
    const [targetDonation, setTargetDonation] = useState({});
    const navigate = useNavigate();


    function formatDate(date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    const handleDonationReminders = useCallback(()=>{
        allDonorDonations.forEach(donation => {
            let donationDate = donation?.created_at?.toString().slice(0, 10);
            let todaysDate = new Date();
            todaysDate.toString().slice(0, 15);
            let todaysDateFormattedString = formatDate(todaysDate);

            let thisMonth = todaysDateFormattedString[5] + todaysDateFormattedString[6];
            thisMonth = parseInt(thisMonth);

            let thisYear = todaysDateFormattedString[0] + todaysDateFormattedString[1] + todaysDateFormattedString[2] + todaysDateFormattedString[3];
            thisYear = parseInt(thisYear);

            let donationYear = donationDate[0] + donationDate[1] + donationDate[2] + donationDate[3];
            donationYear = parseInt(donationYear);

            let donationMonth = donationDate[5] + donationDate[6];
            donationMonth = parseInt(donationMonth);

            let donationDay = donationDate[8] + donationDate[9];
            donationDay = parseInt(donationDay);

            let todaysDay = todaysDateFormattedString[8] + todaysDateFormattedString[9];
            todaysDay = parseInt(todaysDay);


            if (donation?.donation_frequency !== "once"){
                if( donationDay === todaysDay && donationMonth < thisMonth){
                    alert(`Don't forget to make a $${donation?.amount} donation to ${donation?.charity?.name} today.`)
                }
            }else if(donation?.donation_frequency !== "once" && donationMonth >= thisMonth ){
                if( donationDay === todaysDay  && donationYear !== thisYear){
                    alert(`Don't forget to make a $${donation?.amount} donation to ${donation?.charity?.name} today.`)
                }
            }

        })
    }, []);


    useEffect(() => {
        fetch("/meDonor")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                if (!data?.error) {
                    setDonorData(data)
                    fetch(`/a_donors_donations/${data?.id}`)
                        .then((response) => response.json())
                        .then((donations) => {
                            // console.log("DONORS DONATIONS:", donations);
                            if (!donations?.error) {
                                setAllDonations(donations);
                                localStorage.setItem("allDonorDonations", JSON.stringify(donations));
                                let idArray = [];
                                let totalAmount = 0;
                                donations.forEach(donation => {
                                    totalAmount += donation?.amount;
                                    idArray.push(donation?.charity?.id);
                                })
                                setAmountDonated(totalAmount);
                                let unique = [...new Set(idArray)]
                                setTotalCharitiesDonatedTo(unique?.length)
                                handleDonationReminders()

                            }
                        })
                        .catch((err) => console.error(err));
                }
            })
            .catch((err) => console.error(err));

        fetch("/charities")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                if (!data?.error) {
                    setTotalCharities(data?.length)
                }
            })
            .catch((err) => console.error(err));



    }, [handleDonationReminders]);


    function handleDonationEdited() {
        fetch("/meDonor")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                if (!data?.error) {
                    setDonorData(data)
                    fetch(`/a_donors_donations/${data?.id}`)
                        .then((response) => response.json())
                        .then((donations) => {
                            // console.log("DONORS DONATIONS:", donations);
                            if (!donations?.error) {
                                setAllDonations(donations);
                                localStorage.setItem("allDonorDonations", JSON.stringify(donations));
                                let idArray = [];
                                let totalAmount = 0;
                                donations.forEach(donation => {
                                    totalAmount += donation?.amount;
                                    idArray.push(donation?.charity?.id);
                                })
                                setAmountDonated(totalAmount);
                                let unique = [...new Set(idArray)]
                                setTotalCharitiesDonatedTo(unique?.length)

                            }
                        })
                        .catch((err) => console.error(err));
                }
            })
            .catch((err) => console.error(err));

        fetch("/charities")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                if (!data?.error) {
                    setTotalCharities(data?.length)
                }
            })
            .catch((err) => console.error(err));


    }
    
       function handleLogout(){
        fetch("/logoutDonor", {
            method: "DELETE",
        }).then(() => navigate("/"));
    }

    
   
    return (
        <div>
            <div className="donorsDasboardContainer">
                <div className="donorsDasboardLogoAndTitleContainer">
                    <NavBar />
                    <button className='donorLogout' onClick={handleLogout}>Logout</button>
                    <div className="donorsViewDonationStatisticsContainer">
                        <div className="donorsViewDonationStatistic">
                            <h3>TOTAL DONATED</h3>
                            <p>{`$${amountDonated}`}</p>
                        </div>

                        <div className="donorsViewDonationStatistic">
                            <h3>TOTAL CHARITIES</h3>
                            <p>{totalCharities}</p>
                        </div>

                        <div className="donorsViewDonationStatistic">
                            <h3>CHARITIES DONATED TO</h3>
                            <p>{totalCharitiesDonatedTo}</p>
                        </div>
                    </div>
                    <Routes>
                        <Route path={`editDonations`} element={<EditDonations targetDonation={targetDonation} handleDataEdited={handleDonationEdited} />} />

                    </Routes>
                    {/* <img onClick={() => navigate("/")} className="donorsDasboardLogo" src={logo} alt="logo" /> */}
                    <div className='donorsTableContainer'>
                    <h1 className="donorsDasboardTitle">{`ALL ${donorData?.first_name?.toUpperCase()} ${donorData?.last_name?.toUpperCase()}'s DONATIONS`}</h1>
                    <table className='donorsTable'>
                        <tbody>
                            <tr>
                                <th>
                                    <h3 className="ui center aligned header">CHARITY NAME</h3>
                                </th>
                                <th>
                                    <h3 className="ui center aligned header">CHARITY E-MAIL</h3>
                                </th>
                                <th>
                                    <h3 className="ui center aligned header">AMOUNT</h3>
                                </th>
                                <th>
                                    <h3 className="ui center aligned header">FREQUENCY</h3>
                                </th>
                                <th>
                                    <h3 className="ui center aligned header">DATE DONATED</h3>
                                </th>
                                <th>
                                    <h3 className="ui center aligned header">EDIT</h3>
                                </th>

                            </tr>
                            {allDonorDonations?.map((donation) => <DonorsViewDonationList
                                key={donation?.id}
                                charityName={donation?.charity?.name}
                                charityEmail={donation?.charity?.email}
                                amountDonated={donation?.amount}
                                donationFrequency={donation?.donation_frequency === "once" ? "one-time" : donation?.donation_frequency}
                                donationDate={donation?.created_at.slice(0, 10)}
                                edit={<Link className={"editlink"} to={`editDonations`} onClick={() => setTargetDonation(donation)}>Edit</Link>}
                            />)}
                        </tbody>
                    </table>
                    </div>
                    <div className="donorsViewFooter">
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
            </div>



        </div>

    )
}

export default DonorsViewDonations