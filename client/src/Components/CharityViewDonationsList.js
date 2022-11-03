function CharityViewDonationsList({ donorName, donorEmail, amountDonated, donationFrequency, donationDate}){
    return(
        <tr>
            <td>{donorName}</td>
            <td>{donorEmail}</td>
            <td>{amountDonated}</td>
            <td>{donationFrequency}</td>
            <td>{donationDate}</td>
        </tr>
    );
}
export default CharityViewDonationsList;