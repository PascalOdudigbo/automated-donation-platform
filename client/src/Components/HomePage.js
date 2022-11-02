import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Charity from "./Charity";
import axios from "axios";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import DonorViewCharityStories from "./DonorViewCharityStories";
import { useNavigate } from "react-router-dom"

// get our footer icon imports
import {
  BsInstagram,
  BsFacebook,
  BsGithub,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";


function HomePage() {
  const navigate = useNavigate();
  const [allCharities, setAllCharities] = useState([]);
  // const [selectedCharity, setSelectedCharity] = useState({});
  const picturesUrlArray = [
   "https://www.aljazeera.com/wp-content/uploads/2020/08/563469beabf94e7396e3f2d3ce5df9c4_18.jpeg",
   "https://www.aljazeera.com/wp-content/uploads/2019/03/735455d0278b4c0ea098e7cfe7014af6_8.jpeg?resize=1170%2C780",
   "https://www.kevmrc.com/wp-content/uploads/2022/05/16-girls-education-in-kenya.jpg",
   "https://www.aljazeera.com/wp-content/uploads/2019/03/8473ca4a4b284a9694db3a0b8a7051a7_8.jpeg",
  //  "https://www.aljazeera.com/wp-content/uploads/2019/03/1dce5e02cc10481094344f44ff3bd6d8_8.jpeg?fit=1170%2C780",
   "https://www.aljazeera.com/wp-content/uploads/2019/03/b67991ff069c48e59bb17c431a8378bf_8.jpeg?fit=1170%2C780",
   "https://gdb.voanews.com/FFCE7BFC-9815-4332-9EB8-25F8DC60B5F4_w1023_r1_s.jpg"
  ];
  const [imageUrl, setImageUrl] = useState(picturesUrlArray[0]);

  useEffect(() => {
    axios.get("/charities").then((res) => {
      // console.log(`Charities Data:`, res.data);
      setAllCharities(res.data);
    });


    const interval = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * picturesUrlArray?.length);
      setImageUrl(picturesUrlArray[randomIndex]);
      // console.log("Changed image");
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  function handleDonationToCharity(charity) {
    // setSelectedCharity(charity);
    localStorage.clear();
    localStorage.setItem("selectedCharity", JSON.stringify(charity));
    //console.log("Charity being donated to:", charity);

    fetch("/meDonor")
      .then((response) => response.json())
      .then((data) => {
        data.error ? navigate("/login") : navigate("/donate-to-charity")
        if (!data.error){
          localStorage.setItem("donorData", JSON.stringify(data));
        }
       
      })
      .catch((err) => console.error(err));
  }

  function handleSetSelectedCharity(charity) {
    // setSelectedCharity(charity);
    localStorage.clear();
    localStorage.setItem("selectedCharity", JSON.stringify(charity));
    navigate("charity-stories")
  }

  return (
    <>
      <Routes>
        <Route path={""} element={
          <div className="homePage">
            <div className="navContainer">
              <NavBar />
            </div>

            <img className="randomImages" src={imageUrl} alt="Charity pictures" />

            <p className="NiaAbout">
              Girls from poor families miss 20 % of school days in a year due to
              lack of sanitary towels. 2016 research data indicated that a girl in
              primary school between class 6 and 8 can lose up to 18 weeks out of
              108 weeks. Those in high school can lose almost 24 weeks out of 144
              weeks of learning. It is up to us to make a change by donating to
              charities that aim to provide sanitation facilities and materials for
              these children. Nia Africa is an organisation dedicated to dealing
              with this problem by providing a platform that fascilitates the
              automation of donations to charities that support this cause. Our
              partners pride themselves in not just providing sanitary towels but
              also clean water and sanitation facilities such as toilets. Donate
              today and help us meet the guidelines for proper menstrual hygiene as
              defined by UNICEF. If you're a Charity allied to our cause and would
              like to partner with us, please find below a link to register as a
              charity on this platform.
            </p>

            <Link className="registerCharity" to="/charity-register">Register Charity</Link>

            <h1 className="charitiesTitle">CHARITIES</h1>

            <div className="CharitiesContainer">
              {
                allCharities?.map((charity) => (
                  charity?.charity_profile?.about_us ? <Charity
                    key={charity.id}
                    name={charity.name}
                    address={charity.address}
                    handleSetSelectedCharity={() => {
                      handleSetSelectedCharity(charity);
                    }}
                    handleDonateClicked={() => {
                      handleDonationToCharity(charity);
                    }}
                  /> : ""
                ))
              }
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
        } />

        <Route path={"charity-stories"} element={<DonorViewCharityStories/>} />

      </Routes>

    </>
  );
}

export default HomePage;
