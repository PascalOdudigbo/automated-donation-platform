import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import CharitiesBeneficiaryList from "./CharitiesBeneficiaryList";

function CharitiesManageBeneficiaries({
  allBeneficiaries,
  setBeneficiaries,
}) {
  const [charityData, setCharityData] = useState({});
  const [totalBeneficiaries, setTotalBeneficiaries] = useState(
    allBeneficiaries?.length
  );
  const [totalStories, setTotalStories] = useState(0);
  const [totalDonors, setTotalDonors] = useState(0);
  const [totalDonations, setTotalDonations] = useState(0);
  const [targetBeneficiary, setTargetBeneficiary] = useState({});
  const [beneficiaryName, setBeneficiaryName] = useState(
    targetBeneficiary?.name
  );
  const [beneficairyLocation, setBeneficiaryLocation] = useState(
    targetBeneficiary?.location
  );
  const [beneficiaryDescription, setBeneficiaryDescription] = useState(
    targetBeneficiary?.description
  );
  const [isLoadingSave, setIsLoadingSave] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const handleRefreshData = useCallback(()=> {
    fetch("/meCharity")
      .then((response) => response.json())
      .then((data) => {
        fetch(`/a_charitys_beneficiaries/${data?.id}`)
          .then((response) => response.json())
          .then((data) => {
            // console.log("BENEFICIARIES:", data);
            if (!data.error) {
              setBeneficiaries(data);
              setTotalBeneficiaries(data?.length);
              setTargetBeneficiary({});
              setBeneficiaryName("")
              setBeneficiaryLocation("")
              setBeneficiaryDescription("")
            }

          })
          .catch((err) => console.error(err));

          fetch(`/a_charitys_stories/${data?.id}`)
              .then((response) => response.json())
              .then((data) => {
                // console.log("STORIES:", data);
                if (!data.error) {
                  setTotalStories(data?.length);
                }
              })
              .catch((err) => console.error(err));

          fetch(`/a_charitys_donations/${data?.id}`)
          .then((response) => response.json())
          .then((data) => {
            // console.log("INVENTORIES:", data);
            if (!data?.error) {
              // setAllDonations(data);
              let idArray = [];
              let totalAmount = 0;
              data.forEach(donation => {
                totalAmount += donation.amount;
                idArray.push(donation?.donor?.id);
              })
              setTotalDonations(totalAmount);
              let unique = [...new Set(idArray)]
              setTotalDonors(unique?.length)

            }
          })
          .catch((err) => console.error(err));

      })
      .catch((err) => console.error(err));
  }, [setBeneficiaries])

  useEffect(() => {
    fetch("/meCharity")
      .then((response) => response.json())
      .then((data) => {
        setCharityData(data);
        fetch(`/a_charitys_beneficiaries/${data?.id}`)
          .then((response) => response.json())
          .then((data) => {
            // console.log("BENEFICIARIES:", data);
            if (!data?.error) {
              setBeneficiaries(data);
              setTotalBeneficiaries(data?.length);
              setTargetBeneficiary({});
              handleRefreshData();
            }
          })
          .catch((err) => console.error(err));

        fetch(`/a_charitys_stories/${data?.id}`)
          .then((response) => response.json())
          .then((data) => {
            // console.log("STORIES:", data);
            if (!data?.error) {
              setTotalStories(data?.length);
            }
          })
          .catch((err) => console.error(err));

        fetch(`/a_charitys_donations/${data?.id}`)
          .then((response) => response.json())
          .then((data) => {
            // console.log("INVENTORIES:", data);
            if (!data?.error) {
              // setAllDonations(data);
              let idArray = [];
              let totalAmount = 0;
              data.forEach(donation => {
                totalAmount += donation.amount;
                idArray.push(donation?.donor?.id);
              })
              setTotalDonations(totalAmount);
              let unique = [...new Set(idArray)]
              setTotalDonors(unique?.length)

            }
          })
          .catch((err) => console.error(err));

      })
      .catch((err) => console.error(err));
  }, [handleRefreshData, setBeneficiaries]);

 

  function handleSave() {
    if (targetBeneficiary?.id) {
      setIsLoadingSave(true);
      axios
        .put(`/beneficiaries/${targetBeneficiary.id}`, {
          name: beneficiaryName,
          location: beneficairyLocation,
          description: beneficiaryDescription,
        })
        .then((res) => {
          setIsLoadingSave(false);
          // console.log(res.data);
          alert("Beneficiary Updated!");
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
      axios
        .post(`/beneficiaries`, {
          name: beneficiaryName,
          location: beneficairyLocation,
          description: beneficiaryDescription,
        })
        .then((res) => {
          setIsLoadingSave(false);
          // console.log("NEW BENEFICIARY",res.data);
          alert("Beneficiary Added!");
          setBeneficiaries([...allBeneficiaries, { beneficiary: res.data }])
          // handleRefreshData();

          axios
            .post(`/charity_beneficiaries/`, {
              beneficiary_id: res.data.id,
              charity_id: charityData.id,
            })
            .then((res) => {
              setIsLoadingSave(false);
              // console.log(res.data);

            })
            .catch((error) => {
              setIsLoadingSave(false);
              if (error.response) {
                //console.log(error?.response?.data?.error)
                alert(error.response.data.error);
              }
            });
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

  function handleDelete() {
    setIsLoadingDelete(true);
    // console.log(targetBeneficiary);
    axios.delete(`/beneficiaries/${targetBeneficiary.id}`)
      .then(() => {
        setIsLoadingDelete(false);
        alert("Delete successful");
        handleRefreshData();
      });
  }

  return (
    <div className="charitiesManageBeneficiariesContainer">
      <div className="charitiesManageBeneficiariesStatisticsContainer">
        <div className="charitiesManageBeneficiariesStatistic">
          <h3>TOTAL BENEFICIARIES</h3>
          <p>{totalBeneficiaries}</p>
        </div>

        <div className="charitiesManageBeneficiariesStatistic">
          <h3>TOTAL STORIES</h3>
          <p>{totalStories}</p>
        </div>

        <div className="charitiesManageBeneficiariesStatistic">
          <h3>TOTAL DONORS</h3>
          <p>{totalDonors}</p>
        </div>

        <div className="charitiesManageBeneficiariesStatistic">
          <h3>TOTAL DONATIONS</h3>
          <p>{`$${totalDonations}`}</p>
        </div>
      </div>

      <div className="charitiesManageAndUpdateBeneficiariesContainer">
        <div className="charitiesManageBeneficiariesAllBeneficiaries">
          <h2 className="CMB-AllBeneficiariesTitle">MANAGE BENEFICIARIES</h2>
          <div className="CMB-BeneficiaryItemContainer">
            <CharitiesBeneficiaryList
              allBeneficiaries={allBeneficiaries}
              setTargetBeneficiary={setTargetBeneficiary}
              setBeneficiaryName={setBeneficiaryName}
              setBeneficiaryLocation={setBeneficiaryLocation}
              setBeneficiaryDescription={setBeneficiaryDescription}
            />
          </div>

        </div>

        <div className="CMB-UpdateOrAddBeneficiaryContainer">
          <h2 className="adminTargetCharityName">
            {targetBeneficiary?.name
              ? targetBeneficiary?.name?.toUpperCase()
              : "ADD OR UPDATE BENEFICIARY"}
          </h2>
          <form className="CMB-UpdateOrAddBeneficiaryForm">
            <input className="CMB-UpdateOrAddBeneficiaryFormInput"
              placeholder="Name"
              value={beneficiaryName}
              onChange={(e) => setBeneficiaryName(e.target.value)}
            />
            <input className="CMB-UpdateOrAddBeneficiaryFormInput"
              placeholder="Location"
              value={beneficairyLocation}
              onChange={(e) => setBeneficiaryLocation(e.target.value)}
            />

            <textarea
              id="descriptionTxtArea"
              className="CMB-UpdateOrAddBeneficiaryFormTextArea"
              name="descriptionTxtArea"
              rows="4"
              cols="50"
              placeholder="Beneficiary description"
              value={beneficiaryDescription}
              onChange={(e) => setBeneficiaryDescription(e.target.value)}
            />
            <br />
            <div className="updateOrDeleteBeneficiaryBtnContainer">
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
                style={{backgroundColor: "#fcb500"}}
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
export default CharitiesManageBeneficiaries;
