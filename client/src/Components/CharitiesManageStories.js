import React, { useState, useEffect } from "react";

let targetInventory = {}
let targetBeneficiary = {}

function CharitiesManageStories() {
  const [story, setStory] = useState({});
  const [charityData, setCharityData] = useState({});
  const [isLoadingSave, setIsLoadingSave] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [totalStories, setTotalStories] = useState(0);
  const [totalBeneficiaries, setTotalBeneficiaries] = useState(0);
  const [totalDonors, setTotalDonors] = useState(0);
  const [totalAmountDonated, setTotalAmountDonated] = useState(0);
  const [beneficiaryStory, setBeneficiaryStory] = useState("");
  const [targetStory, setTargetStory] = useState({});

  useEffect(() => {
    fetch("/meCharity")
      .then((response) => response.json())
      .then((data) => {
        // setCharityData(data);
        fetch(`/a_charitys_beneficiaries/${data?.id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("STORIES:", data);
            setStory(data);
            // handleDashboardStatistics(res.data)
            setTotalStories((totalStories) => (totalStories = data?.length));
            setTargetStory({});
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);

  //   function handleRefreshData() {
//   fetch(`/a_charitys_beneficiaries/${charityData?.id}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("BENEFICIARIES:", data);
//       setBeneficiaries(data);
//       // handleDashboardStatistics(res.data)
//       setTotalBeneficiaries(
//         (totalBeneficiaries) => (totalBeneficiaries = data?.length)
//       );
//       setTargetBeneficiary({});
//       setBeneficiaryName("");
//       setBeneficiaryLocation("");
//       setBeneficiaryDescription("");
//     })
//     .catch((err) => console.error(err));
  //   }

  //   function handleSave() {
  //     if (targetBeneficiary?.id) {
  //       setIsLoadingSave(true);
  //       axios
  //         .put(`/beneficiaries/${targetBeneficiary.id}`, {
  //           name: beneficiaryName,
  //           location: beneficairyLocation,
  //           description: beneficiaryDescription,
  //         })
  //         .then((res) => {
  //           setIsLoadingSave(false);
  //           console.log(res.data);
  //           alert("Beneficiary Updated!");
  //           handleRefreshData();
  //         })
  //         .catch((error) => {
  //           setIsLoadingSave(false);
  //           if (error.response) {
  //             //console.log(error?.response?.data?.error)
  //             alert(error.response.data.error);
  //           }
  //         });
  //     } else {
  //       setIsLoadingSave(true);
  //       axios
  //         .post(`/beneficiaries`, {
  //           name: beneficiaryName,
  //           location: beneficairyLocation,
  //           description: beneficiaryDescription,
  //         })
  //         .then((res) => {
  //           setIsLoadingSave(false);
  //           console.log(res.data);
  //           alert("Beneficiary Added!");
  //           setBeneficiaries([...allBeneficiaries, res.data])
  //           handleRefreshData();

  //           axios
  //             .post(`/charity_beneficiaries/`, {
  //               beneficiary_id: res.data.id,
  //               charity_id: charityData.id,
  //             })
  //             .then((res) => {
  //               setIsLoadingSave(false);
  //               console.log(res.data);
  //               // alert("Beneficiary Added!")
  //               // handleEditProject()
  //             })
  //             .catch((error) => {
  //               setIsLoadingSave(false);
  //               if (error.response) {
  //                 //console.log(error?.response?.data?.error)
  //                 alert(error.response.data.error);
  //               }
  //             });
  //         })
  //         .catch((error) => {
  //           setIsLoadingSave(false);
  //           if (error.response) {
  //             //console.log(error?.response?.data?.error)
  //             alert(error.response.data.error);
  //           }
  //         });
  //     }
  //   }

  //   function handleDelete() {
  //     setIsLoadingDelete(true);
  //     axios.delete(`/beneficiaries/${targetBeneficiary.id}`)
  //       .then(() =>{
  //         setIsLoadingDelete(false);
  //         alert("Delete successful");
  //         });
  //         handleRefreshData();
  //   }

  return (
    <div className="charitiesManageStoriesContainer">
      <div className="charitiesManageStoriesStatisticsContainer">
        <div className="charitiesManageStoriesStatistic">
          <h3>TOTAL STORIES</h3>
          <p>{totalStories}</p>
        </div>

        <div className="charitiesManageStoriesStatistic">
          <h3>TOTAL BENEFICIARIES</h3>
          <p>{totalBeneficiaries}</p>
        </div>

        <div className="charitiesManageBeneficiariesStatistic">
          <h3>TOTAL DONORS</h3>
          <p>{totalDonors}</p>
        </div>

        <div className="charitiesManageBeneficiariesStatistic">
          <h3>TOTAL DONATIONS</h3>
          <p>{totalAmountDonated}</p>
        </div>
      </div>

      <div className="charitiesManageAndUpdateStoriesContainer">
        <div className="charitiesManageStoriesAllStories">
          <h2 className="CMS-AllStoriesTitle">MANAGE STORIES</h2>
          {/* <CharitiesBeneficiaryList
                allStories={allStories}
                setTargetBeneficiary={setTargetBeneficiary}
                setBeneficiaryName={setBeneficiaryName}
                // setBeneficiaryLocation={setBeneficiaryLocation}
                // setBeneficiaryDescription={setBeneficiaryDescription}
              /> */}
        </div>

        <div className="CMS-UpdateOrAddStoryContainer">
          <h2 className="targetCharityStoryName">
            {targetStory?.name
              ? targetStory?.name?.toUpperCase()
              : "ADD OR UPDATE STORY"}
          </h2>
          <form className="CMS-UpdateOrAddStoryForm">
            {/* <div className="CMS-UpdateOrAddStoryFormDropDownContainer">
              <div className="CMS-dropdownBeneficiary">
                <button className="CMS-dropdownBeneficiaryDropbtn">Select Beneficiary</button>
                <div className="CMS-dropdownBeneficiaryDropdown-content">
                  {allBeneficiaries?.map((data) => (
                    <p
                      onClick={() => {
                        targetBeneficiary = data?.beneficiary;
                        console.log("TARGET BENEFICIARY", targetBeneficiary);
                      }}
                    >
                      {data?.beneficiary?.name}
                    </p>
                  ))}
                </div>

                <div className="CMS-dropdownInventoryDropdown">
                  <button className="CMS-dropdownInventoryDropbtn">Select Inventory</button>
                  <div className="CMS-dropdownBeneficiaryDropdown-content">
                    {allInventories?.map((data) => (
                      <p
                        onClick={() => {
                          targetInventory = data?.inventory;
                          console.log("TARGET INVENTORY", targetInventory);
                        }}
                      >
                        {data?.inventory?.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div> */}


            <textarea
              id="descriptionTxtArea"
              name="descriptionTxtArea"
              rows="4"
              cols="50"
              placeholder="Beneficiary story"
              value={beneficiaryStory}
              onChange={(e) => setBeneficiaryStory(e.target.value)}
            />
            <br />
            <div className="updateOrDeleteStoryBtnContainer">
              <button
                className="saveBtn"
                type="button"
                onClick={() => {
                //   handleSave();
                }}
              >
                {isLoadingSave ? "Loading..." : "Save"}
              </button>
              <button
                className="deleteBtn"
                type="button"
                onClick={() => {
                //   handleDelete();
                }}
              >
                {isLoadingDelete ? "Loading..." : "Delete"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CharitiesManageStories;
