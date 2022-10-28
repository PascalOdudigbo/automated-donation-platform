import React, { useState, useEffect } from "react";
import BeneficiariesStoriesList from "./BeneficiariesStoriesList";
import axios from "axios";
import '../CSS/_charitiesManageStories.scss';


let targetInventory = {};
let targetBeneficiary = {};

function CharitiesManageStories({ allInventories, allBeneficiaries, setAllInventories, setAllBeneficiaries, setAllStoriesDadhboard }) {
  console.log("INVENTORIES INSIDE STORIES", allInventories)
  const [allStories, setAllStories] = useState([]);
  const [isLoadingSave, setIsLoadingSave] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [totalStories, setTotalStories] = useState(0);
  const [totalBeneficiaries, setTotalBeneficiaries] = useState(allBeneficiaries?.length);
  const [totalDonors, setTotalDonors] = useState(0);
  const [totalAmountDonated, setTotalAmountDonated] = useState(0);
  const [beneficiaryStory, setBeneficiaryStory] = useState("");
  const [targetStory, setTargetStory] = useState({});
  const [storyTitle, setStoryTitle] = useState("");


  useEffect(() => {
    fetch("/meCharity")
      .then((response) => response.json())
      .then((data) => {
        // setCharityData(data);
        fetch(`/a_charitys_stories/${data?.id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("STORIES:", data);
            if (!data.error) {
              setAllStories(data);
              // handleDashboardStatistics(res.data)
              setTotalStories((totalStories) => (totalStories = data?.length));
              setAllStoriesDadhboard(data?.length);
              setTargetStory({});
              handleRefreshData();
            }

          })
          .catch((err) => console.error(err));

        fetch(`/a_charitys_beneficiaries/${data?.id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("BENEFICIARIES:", data);
            if (!data?.error) {
              setTotalBeneficiaries(data?.length);
              handleRefreshData();
            }
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);

  function handleRefreshData() {
    fetch("/meCharity")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        fetch(`/a_charitys_beneficiaries/${data?.id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("BENEFICIARIES:", data);
            if (!data.error) {
              setAllBeneficiaries(data);
              // handleDashboardStatistics(res.data)
              setTotalBeneficiaries(data?.length);
            }
          })
          .catch((err) => console.error(err));

        fetch(`/charities_inventories/${data?.id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("INVENTORIES:", data);
            if (!data.error) {
              setAllInventories(data);
            }
          })
          .catch((err) => console.error(err));

        fetch(`/a_charitys_stories/${data?.id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("STORIES:", data);
            if (!data.error) {
              setAllStories(data);
              setTotalStories((totalStories) => (totalStories = data?.length));
              setTargetStory({});
              setStoryTitle("");
              setBeneficiaryStory("");
            }
          })
          .catch((err) => console.error(err));
      }
      )
      .catch((err) => console.error(err));


  }



  function handleSave() {
    fetch("/meCharity")
      .then((response) => response.json())
      .then((data) => {

        if (targetStory?.id) {
          setIsLoadingSave(true);

          axios
            .put(`/stories/${targetStory?.id}`, {
              title: storyTitle,
              beneficiary_story: beneficiaryStory,
              beneficiary_id: targetBeneficiary?.id,
              charity_id: data?.id,
              inventory_id: targetInventory?.id
            })
            .then((res) => {
              setIsLoadingSave(false);
              console.log(res.data);
              alert("Story Updated!");
              handleRefreshData();
            })
            .catch((error) => {
              setIsLoadingSave(false);
              if (error.response) {
                //console.log(error?.response?.data?.error)
                alert(error.response.data.error);
              }
            });
        } else {
          setIsLoadingSave(true);
          const postData = {
            title: storyTitle,
            beneficiary_story: beneficiaryStory,
            beneficiary_id: targetBeneficiary?.id,
            charity_id: data?.id,
            inventory_id: targetInventory?.id
          }
          console.log("POST DATA: ", postData)
          axios
            .post(`/stories`, postData)
            .then((res) => {
              setIsLoadingSave(false);
              console.log(res.data);
              alert("Story Added!");
              setAllStories([...allStories, res.data])
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
      )
      .catch((err) => console.error(err));
  }

  function handleDelete() {
    setIsLoadingDelete(true);
    axios.delete(`/stories/${targetStory.id}`)
      .then(() => {
        setIsLoadingDelete(false);
        alert("Delete successful");
        handleRefreshData();
      });
  }

  return (
    <div className="charitiesManageStoriesContainer">
      <div className="charitiesManageStoriesStatisticsContainer">
        <div className="charitiesManageStoriesStatistic">
          <h3>TOTAL BENEFICIARIES</h3>
          <p>{totalBeneficiaries}</p>
        </div>

        <div className="charitiesManageStoriesStatistic">
          <h3>TOTAL STORIES</h3>
          <p>{totalStories}</p>
        </div>

        <div className="charitiesManageStoriesStatistic">
          <h3>TOTAL DONORS</h3>
          <p>{totalDonors}</p>
        </div>

        <div className="charitiesManageStoriesStatistic">
          <h3>TOTAL DONATIONS</h3>
          <p>{totalAmountDonated}</p>
        </div>
      </div>

      <div className="charitiesManageAndUpdateStoriesContainer">
        <div className="charitiesManageStoriesAllStories">
          <h2 className="CMS-AllStoriesTitle">MANAGE STORIES</h2>
          <div className="CMS-StoriesItemContainer">
            <BeneficiariesStoriesList
              allStories={allStories}
              setTargetStory={setTargetStory}
              setStoryTitle={setStoryTitle}
              setBeneficiaryStory={setBeneficiaryStory}
            />
          </div>
        </div>

        <div className="CMS-UpdateOrAddStoryContainer">
          <h2 className="targetCharityStoryName">
            {targetStory?.name
              ? targetStory?.name?.toUpperCase()
              : "ADD OR UPDATE STORY"}
          </h2>
          <form className="CMS-UpdateOrAddStoryForm">
            {/* <div className="CMS-UpdateOrAddStoryFormDropDownContainer"> */}
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
                        targetInventory = data;
                        console.log("TARGET INVENTORY", targetInventory);
                      }}
                    >
                      {data?.item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            {/* </div> */}
            <div className="CMB-UpdateOrAddInventoryFormInputContainer">

              <input className="CMS-UpdateOrAddStoryFormInput"
                placeholder="Name"
                value={storyTitle}
                onChange={(e) => setStoryTitle(e.target.value)}
              />
              <textarea
                id="storyTxtArea"
                className="CMS-UpdateOrAddStoryFormTextArea"
                name="storyTxtArea"
                rows="4"
                cols="50"
                placeholder="Beneficiary story"
                value={beneficiaryStory}
                onChange={(e) => setBeneficiaryStory(e.target.value)}
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
              <button
                className="deleteBtn"
                type="button"
                onClick={() => {
                  handleDelete();
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
