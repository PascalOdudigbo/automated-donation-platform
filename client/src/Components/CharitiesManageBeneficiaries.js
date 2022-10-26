import axios from "axios";
import React, { useState, useEffect } from "react";
import CharitiesBeneficiaryList from "./CharitiesBeneficiaryList";

function CharitiesManageBeneficiaries({
  allBeneficiaries,
  allStories,
  allDonors,
  allDonations,
  setBeneficiaries,
}) {
  const [charityData, setCharityData] = useState({});
  const [totalBeneficiaries, setTotalBeneficiaries] = useState(
    allBeneficiaries?.length
  );
  const [totalStories, setTotalStories] = useState(allStories?.length);
  const [totalDonors, setTotalDonors] = useState(allDonors?.length);
  const [totalDonations, setTotalDonations] = useState(allDonations?.length);
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

  useEffect(() => {
    fetch("/meCharity")
      .then((response) => response.json())
      .then((data) => {
        setCharityData(data);
        fetch(`/a_charitys_beneficiaries/${data?.id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("BENEFICIARIES:", data);
            setBeneficiaries(data);
            // handleDashboardStatistics(res.data)
            setTotalBeneficiaries(
              (totalBeneficiaries) => (totalBeneficiaries = data?.length)
            );
            setTargetBeneficiary({});
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);

  function handleRefreshData() {
    fetch(`/a_charitys_beneficiaries/${charityData?.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("BENEFICIARIES:", data);
        setBeneficiaries(data);
        // handleDashboardStatistics(res.data)
        setTotalBeneficiaries(totalBeneficiaries=> totalBeneficiaries = data?.length);
        setTargetBeneficiary({});
        setBeneficiaryName("")
        setBeneficiaryLocation("")
        setBeneficiaryDescription("")
      })
      .catch((err) => console.error(err));
  }

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
          console.log(res.data);
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
          console.log(res.data);
          alert("Beneficiary Added!");
          setBeneficiaries([...allBeneficiaries, res.data])
          handleRefreshData();

          axios
            .post(`/charity_beneficiaries/`, {
              beneficiary_id: res.data.id,
              charity_id: charityData.id,
            })
            .then((res) => {
              setIsLoadingSave(false);
              console.log(res.data);
              // alert("Beneficiary Added!")
              // handleEditProject()
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
    axios.delete(`/beneficiaries/${targetBeneficiary.id}`)
      .then(() =>{ 
        setIsLoadingDelete(false);
        alert("Delete successful");
        });
        handleRefreshData();
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
          <p>{totalDonations}</p>
        </div>
      </div>

      <div className="charitiesManageAndUpdateBeneficiariesContainer">
        <div className="charitiesManageBeneficiariesAllBeneficiaries">
          <h2 className="CMB-AllBeneficiariesTitle">MANAGE BENEFICIARIES</h2>
          <CharitiesBeneficiaryList
            allBeneficiaries={allBeneficiaries}
            setTargetBeneficiary={setTargetBeneficiary}
            setBeneficiaryName={setBeneficiaryName}
            setBeneficiaryLocation={setBeneficiaryLocation}
            setBeneficiaryDescription={setBeneficiaryDescription}
          />
        </div>

        <div className="CMB-UpdateOrAddBeneficiaryContainer">
          <h2 className="adminTargetCharityName">
            {targetBeneficiary?.name
              ? targetBeneficiary?.name?.toUpperCase()
              : "ADD OR UPDATE BENEFICIARY"}
          </h2>
          <form className="CMB-UpdateOrAddBeneficiaryForm">
            <input
              placeholder="Name"
              value={beneficiaryName}
              onChange={(e) => setBeneficiaryName(e.target.value)}
            />
            <input
              placeholder="Location"
              value={beneficairyLocation}
              onChange={(e) => setBeneficiaryLocation(e.target.value)}
            />

            <textarea
              id="descriptionTxtArea"
              name="descriptionTxtArea"
              rows="4"
              cols="50"
              placeholder="Beneficiary description"
              value={beneficiaryDescription}
              onChange={(e) => setBeneficiaryDescription(e.target.value)}
            />
            <br />
            <div className="updateOrDeleteCharityBtnContainer">
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
export default CharitiesManageBeneficiaries;
