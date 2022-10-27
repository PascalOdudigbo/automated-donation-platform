import React, { useState, useEffect } from "react";
import CharityInventoriesList from './CharityInventoriesList';
import axios from "axios";

let targetBeneficiary = {};
function CharityInventoriesManagement({
  allBeneficiaries,
  allStories,
  allDonors,
  allDonations,
  setBeneficiaries,
}) {
  const [allInventories, setAllInventories] = useState([]);
  const [totalBeneficiaries, setTotalBeneficiaries] = useState(
    allBeneficiaries?.length
  );
  const [charityData, setCharityData] = useState({});
  const [totalStories, setTotalStories] = useState(allStories?.length);
  const [totalDonors, setTotalDonors] = useState(allDonors?.length);
  const [totalDonations, setTotalDonations] = useState(allDonations?.length);
  const [targetInventory, setTargetInventory] = useState({});
  const [isLoadingSave, setIsLoadingSave] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [inventoryItem, setInventoryItem] = useState(
    targetInventory?.item
  );
  const [inventoryQuantity, setInventoryQuantity] = useState(
    targetInventory?.quantity
  );

  useEffect(() => {
    fetch("/meCharity")
      .then((response) => response.json())
      .then((data) => {
        setCharityData(data);
        fetch(`/charities_inventories/${data?.id}`)
          .then((response) => response.json())
          .then((data) => {
            console.log("INVENTORIES:", data);
            setAllInventories(data);
            setTotalBeneficiaries(
              (totalBeneficiaries) => (totalBeneficiaries = data?.length)
            );
            // setTargetBeneficiary({});
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  }, []);



  function handleRefreshData() {
    fetch(`/charities_inventories/${charityData?.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("INVENTORIES:", data);
        setAllInventories(data);
        setTotalBeneficiaries(totalBeneficiaries => totalBeneficiaries = data?.length);
        setTargetInventory({});
        setInventoryItem("")
        setInventoryQuantity("")
      })
      .catch((err) => console.error(err));
  }

  function handleSave() {
    if (targetInventory?.id) {
      setIsLoadingSave(true);
      axios
        .put(`/inventories/${targetInventory.id}`, {
          item: inventoryItem,
          quantity: inventoryQuantity,
          charity_id: charityData.id,
          beneficiary_id: targetBeneficiary.id
        })
        .then((res) => {
          setIsLoadingSave(false);
          console.log(res.data);
          alert("Inventory Updated!");
          handleRefreshData();
        })
        .catch((error) => {
          setIsLoadingSave(false);
          if (error.response) {
            alert(error.response.data.error);
          }
        });
    } else {
      setIsLoadingSave(true);
      axios
        .post(`/inventories`, {
          item: inventoryItem,
          quantity: inventoryQuantity,
          charity_id: charityData.id,
          beneficiary_id: targetBeneficiary.id
        })
        .then((res) => {
          setIsLoadingSave(false);
          console.log(res.data);
          alert("Inventory Added!");
          setAllInventories([...allInventories, res.data])
          handleRefreshData();

         
        })
        .catch((error) => {
          setIsLoadingSave(false);
          if (error.response) {
            alert(error.response.data.error);
          }
        });
    }
  }

  function handleDelete() {
    setIsLoadingDelete(true);
    axios.delete(`/inventories/${targetInventory.id}`)
      .then(() => {
        setIsLoadingDelete(false);
        alert("Delete successful");
      });
    handleRefreshData();
  }


  return (
    <div className="charitiesManageInventoriesContainer">
      <div className="charitiesManageInventoriesStatisticsContainer">
        <div className="charitiesManageInventoriesStatistic">
          <h3>NO.OF STORIES</h3>
          <p>{totalStories}</p>
        </div>
        <div className="charitiesManageInventoriesStatistic">
          <h3>NO.OF BENEFICIARIES</h3>
          <p>{totalBeneficiaries}</p>
        </div>

        <div className="charitiesManageInventoriesStatistic">
          <h3>NO.OF DONORS</h3>
          <p>{totalDonors}</p>
        </div>

        <div className="charitiesManageInventoriesStatistic">
          <h3>TOTAL AMOUNT DONATED</h3>
          <p>{totalDonations}</p>
        </div>
      </div>

      <div className="charitiesManageAndUpdateInventoriesContainer">
        <div className="charitiesManageInventoriesAllInventories">
          <h2 className="CMB-AllInventoriesTitle">MANAGE INVENTORIES</h2>
          <div className="CMB-InventoryItemContainer">
          <CharityInventoriesList
            allInventories={allInventories}
            setTargetInventory={setTargetInventory}
            setInventoryItem={setInventoryItem}
            setInventoryQuantity={setInventoryQuantity}
            />
            </div>
        </div>
        <div className="CMB-UpdateOrAddInventoryContainer">
          <h2 className="adminTargetInventoryName">
            {targetInventory?.item
              ? targetInventory?.item?.toUpperCase()
              : "ADD OR UPDATE INVENTORY"}
          </h2>
          <form className="CMB-UpdateOrAddInventoryForm">
            <div className="inventoryDropdown">
              <button className="inventoryDropbtn">Select Beneficiary</button>
              <div className="inventoryDropdown-content">
               {allBeneficiaries?.map(data=>
               <p onClick={()=>{
                targetBeneficiary=data?.beneficiary
                console.log("TARGET INVENTORY", targetBeneficiary)
               }}>
                {data?.beneficiary?.name}
                </p>)}
              </div>
            </div>
            <input
               className="CMB-UpdateOrAddInventoryFormInput"
              placeholder="Item"
              value={inventoryItem}
              onChange={(e) => setInventoryItem(e.target.value)}
            />
            <input
              className="CMB-UpdateOrAddInventoryFormInput"
              placeholder="Quantity"
              value={inventoryQuantity}
              onChange={(e) => setInventoryQuantity(e.target.value)}
              />
            <br />
            <div className="updateOrDeleteCharityButtonContainer">
              <button
                className="saveButton"
                type="button"
                onClick={() => {
                  handleSave();
                }}
              >
                {isLoadingSave ? "Loading..." : "Save"}
              </button>
              <button
                className="deleteButton"
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
  )
}

export default CharityInventoriesManagement