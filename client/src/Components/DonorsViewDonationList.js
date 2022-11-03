import React from 'react'

function DonorsViewDonationList({ charityName, charityEmail, amountDonated, donationFrequency, donationDate, edit }) {
  return (
    <tr>
      <td>{charityName}</td>
      <td>{charityEmail}</td>
      <td>{amountDonated}</td>
      <td>{donationFrequency}</td>
      <td>{donationDate}</td>
      <td>{edit}</td>
    </tr>
  )
}

export default DonorsViewDonationList