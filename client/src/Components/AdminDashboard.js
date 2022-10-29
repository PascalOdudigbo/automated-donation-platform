import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import logo from "../images/logo.png";
import AdminCharitySearch from "./AdminCharitySearch";
import AdminCharitiesList from "./AdminCharitiesList";
import AdminUpdateCharity from "./AdminUpdateCharity";


function AdminDashboard({ userData }) {
    const [user, setUser] = useState(userData);
    const [allCharities, setAllCharities] = useState([]);
    const [currentItem, setCurrentItem] = useState({});
    const [approved, setApproved] = useState(0);
    const [pending, setPending] = useState(0);
    const [rejected, setRejected] = useState(0);
    const [total, setTotal] = useState(0);
    const [displayData, setDisplayData] = useState(``);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('/meAdministrator')
            .then(response => response.json())
            .then(data => {
               // console.log(data)
                setUser(data);

                if ((data?.error)) {
                    navigate("/");
                }
                else {
                    axios.get("/charities")
                        .then(res => {
                            //console.log(res.data);
                            setAllCharities(res.data);
                            handleDashboardStatistics(res.data)
                        })
                        .catch(error => {
                            if (error.response) {
                                alert(error.response.data.error);
                            }
                        });
                }


            })
            .catch(err => console.error(err));


    }, [])

    function handleDashboardStatistics(data){
        setApproved(0);
        setPending(0);
        setRejected(0);
        setTotal(0);
        setTotal(total => total = data.length);
        data.forEach(charity => {
            if (charity.approved === true) {
                setApproved(approved => approved += 1);

            } else if (charity.approved === false) {
                setRejected(rejected => rejected += 1);

            } else if (charity.approved === null) {
                setPending(pending => pending += 1)
            }
        })
    }

    function handleFilteredData(searchData) {
        if (searchData === "") {
            axios.get("/charities")
                .then(res => {
                   // console.log(res.data);
                    setAllCharities(res.data)
                })
                .catch(error => {
                    if (error.response) {
                        alert(error.response.data.error);
                    }
                });
        } else {
            const filteredCharities = allCharities.filter((charity) => charity.name.toLowerCase().includes(searchData.toLowerCase()));
            setAllCharities(filteredCharities);
        }

    }

    function handleCharityDelete(id) {
        axios.delete(`charities/${id}`)
            .then(() => alert('Delete successful'));

        const newCharitiesData = allCharities.filter(charity => charity.id !== id);
        setAllCharities(newCharitiesData);
        handleDashboardStatistics(newCharitiesData)
        setDisplayData(``);
    }

    function handleCharityEdit() {
        axios.get("/charities")
            .then(res => {
               // console.log(res.data);
                setAllCharities(allCharities => allCharities = res.data);
                handleDashboardStatistics(res.data);
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.error);
                }
            });
    }

    function handleLogout(){
        fetch("/logoutAdministrator", {
            method: "DELETE",
        }).then(() => navigate("/"));
    }


    return (
        <div className="adminDashboardContainer">
            <div className="logoAndTitle">
                <img onClick={() => navigate("/")} src={logo} alt="logo" />
                <h1 className="pageTitle">ADMIN DASHBOARD</h1>
            </div>

            <div className="profileAndStatsContainer">
                <div className="profileContainer">
                    <div className="adminImageContainer">
                        <img className="adminImage" src="" alt="admin image" />
                    </div>
                    <div className="adminNameContainer">
                        <label className="adminNameLabel" htmlFor="Name">Name:</label>
                        <h3 id="Name" className="adminName">{`${user?.first_name} ${user?.last_name}`}</h3>
                    </div>
                    <button className="uploadImage">Upload Image</button>
                    <button className="adminLogoutbtn" onClick={handleLogout}>Logout</button>
                </div>

                <div className="statisticsContainer">
                    <div className="statistic">
                        <h3>APPROVED</h3>
                        <p>{approved}</p>
                    </div>

                    <div className="statistic">
                        <h3>PENDING</h3>
                        <p>{pending}</p>
                    </div>

                    <div className="statistic">
                        <h3>REJECTED</h3>
                        <p>{rejected}</p>
                    </div>

                    <div className="statistic">
                        <h3>TOTAL</h3>
                        <p>{total}</p>
                    </div>

                </div>

            </div>

            <AdminCharitySearch handleSearchData={handleFilteredData} />

            <div className="allCharitiesAndUpdateContainer">
                <div className="charitiesList">
                    <h2 className="adminAllCharities">CHARITIES</h2>
                    <AdminCharitiesList allCharities={allCharities} setCurrentItem={setCurrentItem} setDisplayData={setDisplayData} />
                </div>
                <div className="UpdateCharityContainer">
                    <AdminUpdateCharity selectedItem={currentItem} handleDataEdit={handleCharityEdit} handleDataDelete={handleCharityDelete} displayData={displayData} />
                </div>

            </div>

        </div>
    )

}

export default AdminDashboard;