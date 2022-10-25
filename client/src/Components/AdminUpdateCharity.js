import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'
import axios from "axios";

//defined a global variable to hold desired approval status as usestate is asynchronous
let approvalStatus = false;

function AdminUpdateCharity({ selectedItem, handleDataEdit, handleDataDelete, displayData }) {
    console.log("SELECTED ITEM:", selectedItem)
    // const [approvalStatus, setApprovalStatus] = useState("");
   
    const [isLoadingApproved, setIsLoadingApproved] = useState(false);
    const [isLoadingReject, setIsLoadingReject] = useState(false);
    const [isLoadingDelete, setIsLoadingDelete] = useState(false);



    function handleOnSubmit() {
        let status = false

        if (approvalStatus == "Approved") {
            setIsLoadingApproved(true);
            status = true;
        }
        else {
            status = false;
            setIsLoadingReject(true);
        }

        axios.patch(`/charities/${selectedItem.id}`,

            {
                approved: status
            })
            .then(res => {
                setIsLoadingApproved(false);
                setIsLoadingReject(false);
                console.log(res.data)
                alert("Approval Status Updated!")
                handleDataEdit();
            })
            .catch(error => {
                setIsLoadingApproved(false);
                setIsLoadingReject(false)
                if (error.response) {
                    //console.log(error?.response?.data?.error)
                    alert(error.response.data.error)
                }
            });

    }




    return (
        <>
            <h2 className="adminTargetCharityName">{selectedItem?.name ? selectedItem?.name?.toUpperCase() : "CHARITY NAME"}</h2>
            <form className={"form"}>
                <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Charity details" value={displayData} readOnly>

                </textarea>
                <br />
                <div className="updateOrDeleteCharityBtnContainer">
                <button className="approveBtn" type="button" onClick={()=>{
                    // setApprovalStatus(approvalStatus=> approvalStatus = "Approved");
                    approvalStatus = "Approved"
                    handleOnSubmit();

                }}>
                    {isLoadingApproved ? "Loading..." : "Approve"}
                </button>
                <button className="rejectBtn" type="button" onClick={()=>{
                    // setApprovalStatus(approvalStatus=> approvalStatus = "Rejected");
                    approvalStatus= "Rejected"
                    handleOnSubmit();

                }}>
                    {isLoadingReject ? "Loading..." : "Reject"}
                </button>
                <button className="deleteBtn" type="button" onClick={() => {
                    setIsLoadingDelete(true)
                    handleDataDelete(selectedItem?.id)
                    setIsLoadingDelete(false);
                    }}>
                    {isLoadingDelete ? "Loading..." : "Delete"}
                </button>
                </div>
                
            </form>
        </>
    );
}
export default AdminUpdateCharity;
