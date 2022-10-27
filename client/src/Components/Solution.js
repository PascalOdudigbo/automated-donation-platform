import React from "react";
import NavBar from "./NavBar";

// get our footer icon imports
import {
  BsInstagram,
  BsFacebook,
  BsGithub,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";


function Solution (){
  return(
    <>
    <NavBar/>
    <div className="title">

     <div class="title-image">
     <div class="title-text">
      <h2 className="menstrual-health-title">Menstrual health management</h2>
    </div>
     </div>

   

    </div>

    <div className="text">

      <h1 className="sanitary-pads-title">SANITARY PADS AND MENSTRUAL HEALTH </h1>

         <p className="sanitary-pads-paragraph">
         Menstrual hygiene is vital to the empowerment and well-being of women and girls worldwide. It is about more than just access to sanitary pads and appropriate toilets – though those are important. It is also about ensuring women and girls live in an environment that values and supports their ability to manage their menstruation with dignity.
         Globally, at least 500 million women and girls lack proper access to menstrual hygiene facilities and more than one-third of schools lack single-sex toilets. For adolescent girls, the presence of a safe water supply and clean, functioning, private toilet facilities for managing their menstruation can be the difference between dropping out and getting an education. Additionally, lack of proper menstrual hygiene products increases risk of reproductive and urinary tract infections.
         </p> 
         

         <p style={{ marginTop: '.5rem' }} className="sanitary-pads-paragraph">
         Nia Africa encourages women to embrace their bodies and celebrate life. we believe all women and girls have the right to menstruate with confidence, with dignity and with support.  Our objective is to ensure vulnerable adolescent school-going girls are provided with a year’s supply of sanitary towels. As at end of June 2020, 262,417 girls have benefitted from this project since 2008 in various counties of Kenya! With this assistance, girls have remained in school for a whole year, thus
         reducing abseentism, improving academic performance and personal hygiene. This project has been made possible by the contributions of various donors and partners in numerous ways.
         </p> 

         <p style={{ marginTop: '.5rem' }} className="sanitary-pads-paragraph">
         Nia Africa is in partnership with these charity organizations to make our dream a reality
         </p>
        
        <div className="sanitary-pads-list-container">
          <ul className="sanitary-pads-list">
            <li>Zana Africa</li>
            <br/>
            <li>Hope Africa</li>
            <br/>
            <li>One Girl Can</li>
            <br/>
            <li>Women One</li>
          </ul>
        </div>
         

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
          <h4>  &copy;{new Date().getFullYear()} Copyright NIA Africa Ltd | All rights reserved |
            Terms Of Service | Privacy </h4>
        </div>

    </>
  )
}

export default Solution
