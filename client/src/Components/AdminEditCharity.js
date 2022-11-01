import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import axios from "axios";

function AdminEditCharity({ selectedItem, handleDataEdit }) {
    const [approved, setAproved] = useState(selectedItem.cell);
    const [isLoading, setIsLoading] = useState(false);

    function handleOnSubmit(event) {
        let approvedStatus = false

        if(approved === "Approved"){
            approvedStatus = true;
        }
        else{
            approvedStatus = false;
        }

        event.preventDefault();
        setIsLoading(true);
        axios.patch(`/charities/${selectedItem.id}`,
            
            {
                approved: approvedStatus
            })
            .then(res => {
                setIsLoading(false);
                console.log(res.data)
                alert("Approval Status Updated!")
                handleDataEdit();
            })
            .catch(error => {
                setIsLoading(false);
                if (error.response) {
                    //console.log(error?.response?.data?.error)
                    alert(error.response.data.error)
                }
            });

    }




    return (
        <>
            <h2>EDIT {selectedItem.name.toUpperCase()}'s APPROVAL STATUS</h2>
            <form className={"form"} onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={selectedItem.name}
                    readonly
                />
                <input
                    type="text"
                    name="address"
                    placeholder="address"
                    value={selectedItem.address}
                    readonly
                />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={selectedItem.email}
                    readonly
                />
                <DropdownButton
                    title="Approval Status"
                    className="userTypeDropDown"
                    onSelect={(e) => {
                        console.log(e);
                        setAproved(e);
                    }}
                >
                    <Dropdown.Item eventKey="Approved">Approved</Dropdown.Item><br/>
                    <Dropdown.Item eventKey="Not Approved">Not Approved</Dropdown.Item><br/>
                </DropdownButton>
                <br/>
                <button className="ui button" type="submit">
                    {isLoading ? "Loading..." : "Save Changes"}
                </button>
            </form>
        </>
    );
}
export default AdminEditCharity;
