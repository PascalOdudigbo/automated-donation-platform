import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// get our footer icon imports
import {
  BsInstagram,
  BsFacebook,
  BsGithub,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

let charityData = JSON.parse(localStorage.getItem("selectedCharity"));
let donorData = JSON.parse(localStorage.getItem("donorData"));

function DonorsDonateToCharity() {
  const [donationFrequency, setDonationFrequency] = useState("");
  const [donationAmount, setDonationAmount] = useState(0);
  const [anonymousOrNot, setAnonymousOrNot] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/meDonor")
      .then((response) => response.json())
      .then((data) => {
        data.error ? navigate("/login") : navigate("/donate-to-charity");
        localStorage.setItem("donorData", JSON.stringify(data));
      })
      .catch((err) => console.error(err));
  }, []);

  function causeRefresh() {
    console.log("Refresh Called");
    window.location.reload();
    console.log(charityData)
    console.log("After Refresh");
    window.location.reload();
    window.stop()
  }

  function handleDonation() {
    let donationData = {
      donor_id: donorData?.id,
      charity_id: charityData?.id,
      amount: donationAmount,
      donation_frequency: donationFrequency,
      anonymous: anonymousOrNot,
    };
    // console.log("DONATION DATA", donationData);
    axios
      .post("/donations", donationData)
      .then((res) => {
        // console.log(res.data);
        alert(
          `Thanks ${donorData?.first_name} for your ${
            donationFrequency === "once" ? "one-time" : donationFrequency
          } donation to ${charityData.name}`
        );

        navigate("/donors-donations")
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.error);
        }
      });
  }
  return (
    <div className="donorsDonateToCharityContainer">
      <NavBar />
      {causeRefresh()}
      <p className="DonationPageText">
        Thank you for supporting <em>NiaAfrica’s</em> efforts to ensure that
        girls can safely navigate puberty and step into their potential. You may
        donate once, monthly or give in honor or memory of someone.
        <br />
        Your donation will help us bring smiles to the faces of the
        underprivileged by meeting the guidelines for proper menstrual hygiene
        as defined by UNICEF. This donation is tax-deductible.
      </p>
      <h1 className="charityBeingDonatedTo">{`A DONATION TO ${charityData?.name?.toUpperCase()}`}</h1>
      <div className="donationFrequencyContainer">
        <h3
          className="donationFrequencyOnce"
          onClick={() => setDonationFrequency("once")}
        >
          ONE TIME
        </h3>
        <h3
          className="donationFrequencyMonthly"
          onClick={() => setDonationFrequency("monthly")}
        >
          MONTHLY
        </h3>
      </div>

      <br />
      <p className="paragraphForPrice">{`Choose a ${
        donationFrequency === "once"
          ? "one-time"
          : donationFrequency === "monthly"
          ? "monthly"
          : "donation"
      } amount`}</p>
      <div className="donationAmountContainer">
        <div className="donationAmount" onClick={() => setDonationAmount(500)}>
          <h3 className="donationText">500</h3>
        </div>

        <div className="donationAmount" onClick={() => setDonationAmount(250)}>
          <h3 className="donationText">250</h3>
        </div>

        <div className="donationAmount" onClick={() => setDonationAmount(125)}>
          <h3 className="donationText">125</h3>
        </div>

        <div className="donationAmount" onClick={() => setDonationAmount(50)}>
          <h3 className="donationText">50</h3>
        </div>

        <div className="donationCurrency">
          <h3 className="donationText">USD</h3>
        </div>
      </div>

      <form className="anonymousDonorOrNot">
        <label>
          <input
            type="radio"
            name="react-tips"
            value="true"
            checked={anonymousOrNot === true}
            onClick={() => {
              if (anonymousOrNot === true) {
                setAnonymousOrNot(false);
              } else {
                setAnonymousOrNot(true);
              }
            }}
            className="form-check-input"
          />
          Make this donation anonymously
        </label>
      </form>

      <div className="payPalDonateBtn">
        {/* <PayPalScriptProvider options={{ "client-id": "test" }}>
          <PayPalButtons
            style={{ layout: "horizontal" }}
            fundingSource={undefined}
            disabled={true}
            createOrder={(data, actions) => {
              return actions.data.create({
                donation: [
                  {
                    amount: {
                      value: donationAmount,
                    },
                  },
                ],
              });
            }}
            onApprove={handleDonation}
          />
        </PayPalScriptProvider> */}

        <h3 className="donationDetails">{`${
          donationFrequency === "once"
            ? "ONE-TIME"
            : donationFrequency.toUpperCase()
        } DONATION $${donationAmount} USD`}</h3>

        <button className="donateBtn" onClick={handleDonation}>
          DONATE
        </button>
      </div>

      <div className="footer">
        <h3>follow us</h3>
        <ul>
          <li>
            <BsInstagram />
          </li>
          <li>
            <BsFacebook />
          </li>
          <li>
            <BsTwitter />
          </li>
          <li>
            <BsGithub />
          </li>
          <li>
            <BsLinkedin />
          </li>
        </ul>
        <h4>2022 Copyright NIA Africa Ltd</h4>
      </div>
    </div>
  );
}
export default DonorsDonateToCharity;
