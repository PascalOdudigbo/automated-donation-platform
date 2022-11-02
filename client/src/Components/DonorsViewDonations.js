import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import logo from "../images/logo.png";
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
import axios from 'axios';

let allDonorDonations = JSON.parse(localStorage.getItem("allDonorDonations"));
let DonorData = {}

function DonorsViewDonations({ donors }) {
    const [donorData, setDonorData] = useState([]);
    const [allDonations, setAllDonations] = useState(0);
    const [amountDonated, setAmountDonated] = useState([]);
    const [totalCharities, setTotalCharities] = useState(0);
    const [totalCharitiesDonatedTo, setTotalCharitiesDonatedTo] = useState(0);
    const [targetDonation, setTargetDonation] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        fetch("/meDonor")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (!data?.error) {
                    setDonorData(data)
                    fetch(`/a_donors_donations/${data?.id}`)
                        .then((response) => response.json())
                        .then((donations) => {
                            console.log("DONORS DONATIONS:", donations);
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
                                let unique = [... new Set(idArray)]
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
                console.log(data)
                if (!data?.error) {
                    setTotalCharities(data?.length)
                }
            })
            .catch((err) => console.error(err));



    }, []);


    function handleDonationEdited() {
        fetch("/meDonor")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (!data?.error) {
                    setDonorData(data)
                    fetch(`/a_donors_donations/${data?.id}`)
                        .then((response) => response.json())
                        .then((donations) => {
                            console.log("DONORS DONATIONS:", donations);
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
                                let unique = [... new Set(idArray)]
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
                console.log(data)
                if (!data?.error) {
                    setTotalCharities(data?.length)
                }
            })
            .catch((err) => console.error(err));


    }
    return (
        <div>
            <div className="donorsDasboardContainer">
                <div className="donorsDasboardLogoAndTitleContainer">
                    <NavBar />
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
                    <h1 className="donorsDasboardTitle">{`ALL ${donorData?.first_name?.toUpperCase()} ${donorData?.last_name?.toUpperCase()}'s DONATIONS`}</h1>
                    <table>
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
                                key={donation?.Id}
                                charityName={donation?.charity?.name}
                                charityEmail={donation?.charity?.email}
                                amountDonated={donation?.amount}
                                donationFrequency={donation?.donation_frequency === "once" ? "one-time" : donation?.donation_frequency}
                                donationDate={donation?.created_at.slice(0, 10)}
                                edit={<Link className={"editlink"} to={`editDonations`} onClick={() => setTargetDonation(donation)}>Edit</Link>}
                            />)}
                        </tbody>
                    </table>
                    <div className="footer">
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