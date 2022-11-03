import React, { useEffect, useState } from "react";
import CharityViewDonorsList from "./CharityViewDonationsList";

function CharitiesViewDonations() {
    const [totalStories, setTotalStories] = useState(0);
    const [totalBeneficiaries, setTotalBeneficiaries] = useState(0);
    const [totalDonors, setTotalDonors] = useState(0);
    const [totalAmountDonated, setTotalAmountDonated] = useState(0);
    const [allDonations, setAllDonations] = useState([]);

    useEffect(() => {
        fetch("/meCharity")
            .then((response) => response.json())
            .then((data) => {

                fetch(`/a_charitys_stories/${data?.id}`)
                    .then((response) => response.json())
                    .then((data) => {
                        // console.log("STORIES:", data);
                        if (!data.error) {
                            // handleDashboardStatistics(res.data)
                            setTotalStories((totalStories) => (totalStories = data?.length));
                            // handleRefreshData();
                        }

                    })
                    .catch((err) => console.error(err));

                fetch(`/a_charitys_donations/${data?.id}`)
                    .then((response) => response.json())
                    .then((data) => {
                        // console.log("INVENTORIES:", data);
                        if (!data?.error) {
                            setAllDonations(data);
                            let idArray = [];
                            let totalAmount = 0;
                            data.forEach(donation => {
                                totalAmount += donation?.amount;
                                idArray.push(donation?.donor?.id);
                            })
                            setTotalAmountDonated(totalAmount);
                            let unique = [...new Set(idArray)]
                            setTotalDonors(unique?.length)

                        }
                    })
                    .catch((err) => console.error(err));


                fetch(`/a_charitys_beneficiaries/${data?.id}`)
                    .then((response) => response.json())
                    .then((data) => {
                        // console.log("BENEFICIARIES:", data);
                        if (!data?.error) {
                            setTotalBeneficiaries(data?.length);
                            //   handleRefreshData();
                        }
                    })
                    .catch((err) => console.error(err));
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="charitiesViewDonorsContainer">
            <div className="charitiesViewDonorsStatisticsContainer">
                <div className="charitiesViewDonorsStatistic">
                    <h3>TOTAL BENEFICIARIES</h3>
                    <p>{totalBeneficiaries}</p>
                </div>

                <div className="charitiesViewDonorsStatistic">
                    <h3>TOTAL STORIES</h3>
                    <p>{totalStories}</p>
                </div>

                <div className="charitiesViewDonorsStatistic">
                    <h3>TOTAL DONORS</h3>
                    <p>{totalDonors}</p>
                </div>

                <div className="charitiesViewDonorsStatistic">
                    <h3>TOTAL DONATIONS</h3>
                    <p>{`$${totalAmountDonated}`}</p>
                </div>
            </div>

            <div className="CVD-AllDonorsTable">
            
            <h2 className="CVD-AllDonorsTitle">ALL DONATIONS</h2>

                <table>
                    <tbody>
                        <tr>
                            <th>
                                <h3 className="ui center aligned header">Donor Name</h3>
                            </th>
                            <th>
                                <h3 className="ui center aligned header">Donor Email</h3>
                            </th>
                            <th>
                                <h3 className="ui center aligned header">Amount</h3>
                            </th>
                            <th>
                                <h3 className="ui center aligned header">Frequency</h3>
                            </th>
                            <th>
                                <h3 className="ui center aligned header">Date</h3>
                            </th>
                        </tr>
                        {allDonations?.map((donation) => <CharityViewDonorsList
                            key={donation?.id}
                            donorName={donation?.anonymous ? "Anonymous" : `${donation?.donor?.first_name} ${donation?.donor?.last_name}`}
                            donorEmail={donation?.anonymous ? "Anonymous" : `${donation?.donor?.email}`}
                            amountDonated={`$${donation?.amount}`}
                            donationFrequency={donation?.donation_frequency === "once" ? "one-time" : donation?.donation_frequency}
                            donationDate={donation?.created_at.slice(0, 10)}
                        />)}
                    </tbody>
                </table>

            </div>


        </div>
    );

}
export default CharitiesViewDonations;