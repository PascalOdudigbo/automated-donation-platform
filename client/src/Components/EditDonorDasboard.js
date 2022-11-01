import React,{useState} from 'react'

function EditDonorDasboard({ targetDonor, handleDataEdit }) {
    // Charity name, Charity email, amount donated, Donation frequency, Donation date, Edit)
    
    const[charityName, setCharityName] = useState(targetDonor.charityName);
    const[charityEmail, setCharityEmail] = useState(targetDonor.charityEmail);
    const[amount, setAmount] = useState(targetDonor.amount);
    const[frequency, setFrequency] = useState(targetDonor.frequency);
    const [date, setDate] = useState(targetDonor.date);
    const [donor, setDonor] = useState();
    
        function handleOnChange(event){
        if(event.target.charityName === "charityName"){
            setCharityName(event.target.value);
        }
        else if (event.target.name === "charityEmail"){
            setCharityEmail(event.target.value);
        }
        else if (event.target.name === "amount"){
            setAmount(event.target.value);
        }
        else if (event.target.name === "frequency"){
            setFrequency(event.target.value);
        }
        else{
            setDate(event.target.value);
        }
       
    }

    function handleOnSubmit(event){
        event.preventDefault();
        const editedData = {
            name: charityName,
            email: charityEmail,
            amount: amount,
            frequency: frequency, 
            date: date
        } 
        fetch(`a_donors_donations ${donor.id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedData)
        })
        .then(response=>response.json())
        .then(()=> handleDataEdit());
    }
    
    
    
  return (
      <div>
        {/* <h2>EDIT {name.toUpperCase()}'s DONOR DETAILS</h2> */}
        <form className={"form"} onSubmit={handleOnSubmit}>
            <input type="text" name="chaityName" placeholder="Name" value={charityName} readOnly/>
            <input type="text" name="work" placeholder="Work" value={charityEmail} readOnly/>
            <input type="text" name="cell" placeholder="Cell" value={amount} readOnly/>
            <input type="text" name="address" placeholder="address" value={frequency} onChange={handleOnChange}/>
            <input type="email" name="email" placeholder="email" value={date} readOnly/>
            <button className="ui button" type="submit">
                Edit 
            </button>
        </form>
      
      
      </div>
  )
}

export default EditDonorDasboard