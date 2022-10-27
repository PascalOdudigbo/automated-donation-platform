import React from 'react'

function CharityInventoriesList({
    allInventories,
    setTargetInventory,
    setInventoryItem,
    setInventoryQuantity
}) {
    return (
        <>
            <div >
                {allInventories?.map((inventory) => 
                    <div className="CMB-InventoryItem"
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