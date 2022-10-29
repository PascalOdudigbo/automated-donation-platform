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
    "https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh6.googleusercontent.com/HtP9Lm0nws0B38i5qkyqZtwRSn8xkR8TJGkriaqiWv89mLavA-_M_V5X7iGYY93QB3JpOzrnUJ-HUWC9YaYUO1bDpoq_O8FYPj_nJFw-GC5pkMeDX418bK-4ORlbY09XVMqfIhq2",
    "http://c.files.bbci.co.uk/18FE/production/_100489360_bbc.jpg",
    "https://www.znbc.co.zm/news/wp-content/uploads/2022/09/SANITARY-PADS-GIRLS.jpg",
    "https://dorcas.org/wp-content/uploads/2021/05/Menstrual-Hygiene-Day-1600x1067-1.jpeg",
    "https://artintanzania.files.wordpress.com/2021/04/1-4.jpg",
    "https://images.squarespace-cdn.com/content/v1/5f088a46ebe405013044f1a4/1610655584126-7U6OZ6134Q3BSJIZOSBJ/cover.png",
    "https://d141thk7ygtt3c.cloudfront.net/66875dc9-663a-44e7-be32-ed925927ddb0.jpg",
  ];
  const [imageUrl, setImageUrl] = useState(picturesUrlArray[0]);

  useEffect(() => {
    axios.get("/charities").then((res) => {
      console.log(`Charities Data:`, res.data);
      setAllCharities(res.data);
    });

    const picturesUrlArray = [
      "https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh6.googleusercontent.com/HtP9Lm0nws0B38i5qkyqZtwRSn8xkR8TJGkriaqiWv89mLavA-_M_V5X7iGYY93QB3JpOzrnUJ-HUWC9YaYUO1bDpoq_O8FYPj_nJFw-GC5pkMeDX418bK-4ORlbY09XVMqfIhq2",
      "http://c.files.bbci.co.uk/18FE/production/_100489360_bbc.jpg",
      "https://www.znbc.co.zm/news/wp-content/uploads/2022/09/SANITARY-PADS-GIRLS.jpg",
      "https://dorcas.org/wp-content/uploads/2021/05/Menstrual-Hygiene-Day-1600x1067-1.jpeg",
      "https://artintanzania.files.wordpress.com/2021/04/1-4.jpg",
      "https://images.squarespace-cdn.com/content/v1/5f088a46ebe405013044f1a4/1610655584126-7U6OZ6134Q3BSJIZOSBJ/cover.png",
      "https://d141thk7ygtt3c.cloudfront.net/66875dc9-663a-44e7-be32-ed925927ddb0.jpg",
    ];

    const interval = setInterval(() => {
      let randomIndex = Math.floor(Math.random() * picturesUrlArray?.length);
      setImageUrl(picturesUrlArray[randomIndex]);
      console.log("Changed image");
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
