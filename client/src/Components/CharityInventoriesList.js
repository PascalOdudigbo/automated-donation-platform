import React from 'react'

function CharityInventoriesList({
    allInventories,
    setTargetInventory,
    setInventoryItem,
    setInventoryQuantity
}) {
    return (
        <>
            <div className="CMB-BeneficiaryItem">
                {allInventories?.map((inventory) => 
                    <div
                        key={inventory?.id}
                        onClick={() => {
                            setTargetInventory(inventory);
                            setInventoryItem(inventory?.item);
                            setInventoryQuantity(inventory?.quantity);
                        }}
                    >
                        {inventory?.item}
                    </div>
)}
            </div>
        </>
    )
}

export default CharityInventoriesList