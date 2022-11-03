function AdminCharitiesList({
    allCharities,
    setCurrentItem,
    setDisplayData
}) {
    // console.log(allCharities);
    return (
        <div className="charityItem">
            {
                allCharities.map(charity=><div
                key={charity?.id}
                onClick={() => {
                    
                    setCurrentItem(charity);
                    setDisplayData(
                    `ADDRESS: ${charity?.address}  
                    \nEmail: ${charity?.email}
                    \n
                    `
                    );
                }}
                
                >
                <div className="charityNameAndStatus">
                    <h2 className="charityName">{charity.name}</h2>
                    <h2 className="charityStatus">{charity.approved ? "Approved" : charity.approved === null  ? "Pending" : "Not Approved"}</h2>
                </div>
               
                </div>)
            }
            
        </div>
    );
}
export default AdminCharitiesList;
