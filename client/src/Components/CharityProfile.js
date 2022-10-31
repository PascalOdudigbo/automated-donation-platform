import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import {
    BsInstagram,
    BsFacebook,
    BsGithub,
    BsTwitter,
    BsLinkedin,
} from "react-icons/bs";

function CharityProfile() {
    const [charity, setCharity] = useState();
    const [aboutUs, setAboutUs] = useState();
    const [targetProfile, setTargetProfile] = useState({});
    const [isLoadingSave, setIsLoadingSave] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/meCharity")
            .then((response) => response.json())
            .then((data) => {
                // console.log("DATA", data);
                // console.log("CHARITY ABOUT:", data?.charity_profile?.about_us);
                setCharity(data);
                setAboutUs(data?.charity_profile?.about_us);
                setTargetProfile(data?.charity_profile)

                if (data?.error) {
                    navigate("/");
                }
            })
            .catch((err) => console.error(err));

    }, []);

    function handleRefreshData() {
        fetch("/meCharity")
            .then((response) => response.json())
            .then((data) => {
                // console.log("DATA", data);
                setCharity(data);
                setAboutUs(data?.charity_profile?.about_us);
                setTargetProfile(data?.charity_profile)

            }
            )
            .catch((err) => console.error(err));

    }


    function handleSave() {
        // console.log("Charity", charity)
        if (charity?.charity_profile?.about_us != undefined) {
            setIsLoadingSave(true);

            axios
                .put(`/charity_profiles/${targetProfile?.id}`, {
                    charity_id: charity?.id,
                    about_us: aboutUs

                })
                .then((res) => {
                    setIsLoadingSave(false);
                    // console.log(res.data);
                    alert("profile Updated!");
                    handleRefreshData();
                })
                .catch((error) => {
                    setIsLoadingSave(false);
                    if (error.response) {
                        //console.log(error?.response?.data?.error)
                        alert(error.response.data.error);
                    }
                });
        }

        else {
            setIsLoadingSave(true);
            axios
                .post(`/charity_profiles`, {
                    charity_id: charity?.id,
                    about_us: aboutUs
                })
                .then((res) => {
                    setIsLoadingSave(false);
                    // console.log(res.data);
                    alert("Charity Profile saved!");
                    // setTargetProfile([...charity, res.data])
                    handleRefreshData();

                })
                .catch((error) => {
                    setIsLoadingSave(false);
                    if (error.response) {
                        //console.log(error?.response?.data?.error)
                        alert(error.response.data.error);
                    }
                });
        }
    }



    return (
        <>
            <NavBar />
             <div className='GoBack'>
                    <Link to="/charity"><button className='Back'>Back</button></Link>
             </div>

            <div className='CMB-UpdateCharityProfileContainer'>
               
                <h1 className='UpdateCharityProfileTitle'>{`${charity?.name?.toUpperCase()}'s PROFILE`}</h1>



                <form className="CMS-UpdateCharityProfileForm">

                    <div className="CMB-UpdateCharityProfileFormContainer">


                        <textarea
                            id="storyTxtArea"
                            className="CMS-UpdateCharityProfileFormTextArea"
                            name="storyTxtArea"
                            rows="4"
                            cols="50"
                            placeholder="What is your charity about"
                            value={aboutUs}
                            onChange={(e) => setAboutUs(e.target.value)}
                        />
                        <br />
                    </div>
                    <div className="UpdateCharityProfileBtnContainer">
                        <button
                            className="saveBtn"
                            type="button"
                            onClick={() => {
                                handleSave();
                            }}
                        >
                            {isLoadingSave ? "Loading..." : "Save"}
                        </button>
                    </div>
                </form>

            </div>
            <div className="charityFooter">
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
        </>
    )
}

export default CharityProfile



