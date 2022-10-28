import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

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
                console.log("DATA", data);
                console.log("CHARITY ABOUT:", data?.charity_profile?.about_us);
                setCharity(data);
                setAboutUs(data?.charity_profile?.about_us);
                setTargetProfile(data?.charity_profile)

                if (data?.error) {
                    navigate("/");
                }
            })
            .catch((err) => console.error(err));

        // fetch(`/charity_profiles/${charity?.id}`)
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log("CHARITY PROFILE:", data);
        //     if (!data?.error) {
        //       setCharity(data?.length);
        //     }
        //   })
        //   .catch((err) => console.error(err));



    }, []);

    function handleRefreshData() {
        fetch("/meCharity")
            .then((response) => response.json())
            .then((data) => {
                console.log("DATA", data);
                setCharity(data);
                setAboutUs(data?.charity_profile?.about_us);
                setTargetProfile(data?.charity_profile)

            }
            )
            .catch((err) => console.error(err));

    }


    function handleSave() {
        console.log("Charity", charity)
        if (charity?.charity_profile?.about_us != undefined) {
            setIsLoadingSave(true);

            axios
                .put(`/charity_profiles/${targetProfile?.id}`, {
                    charity_id: charity?.id,
                    about_us: aboutUs

                })
                .then((res) => {
                    setIsLoadingSave(false);
                    console.log(res.data);
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
                    console.log(res.data);
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
        <div>

            <h1>{`${charity?.name?.toUpperCase()}'s PROFILE`}</h1>



            <form className="CMS-UpdateOrAddStoryForm">

                <div className="CMB-UpdateOrAddInventoryFormInputContainer">


                    <textarea
                        id="storyTxtArea"
                        className="CMS-UpdateOrAddStoryFormTextArea"
                        name="storyTxtArea"
                        rows="4"
                        cols="50"
                        placeholder="What is your charity about"
                        value={aboutUs}
                        onChange={(e) => setAboutUs(e.target.value)}
                    />
                    <br />
                </div>
                <div className="updateOrDeleteStoryBtnContainer">
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
    )
}

export default CharityProfile



