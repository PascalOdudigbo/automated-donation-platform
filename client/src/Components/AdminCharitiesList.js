import { Link } from "react-router-dom";
import AdminCharity from "./AdminCharity";
import AdminCharitySearch from "./AdminCharitySearch";


function AdminCharitiesList({allCharities, setCurrentItem, handleFilteredData, handleDelete}){
    //console.log(allCharities);
    return(
        <div>
            <AdminCharitySearch handleSearchData={handleFilteredData} />
            <h2>CHARITIES</h2>
            <table>
                <tbody>
                    <tr>
                    <th>
                        <h3 className="Tableheader">Index</h3>
                    </th>
                    <th>
                        <h3 className="Tableheader">Name</h3>
                    </th>
                    <th>
                        <h3 className="Tableheader">Address</h3>
                    </th>
                    <th>
                        <h3 className="Tableheader">Email</h3>
                    </th>
                    <th>
                        <h3 className="Tableheader">Approved</h3>
                    </th>
                    <th>
                        <h3 className="Tableheader">Edit</h3>
                    </th>
                    <th>
                        <h3 className="Tableheader">Delete</h3>
                    </th>
                    </tr>
                    { 
                    
                    //map through AdminCharity here
                    allCharities.map((charity)=><AdminCharity
                        key={charity.id}
                        id={charity.id}
                        name={charity.name}
                        address={charity.address}
                        email={charity.email}
                        approved={charity.approved}
                        edit={<Link className={"editlink"} to={""} onClick={()=>setCurrentItem(charity)}>Edit</Link>}
                        deletebtn={<button className={"deletebtn"} onClick={()=>{handleDelete(charity.id)}}>Delete</button>}
                    />)
                    
                    }
                </tbody>
            </table>
        </div>
    );
}
export default AdminCharitiesList;