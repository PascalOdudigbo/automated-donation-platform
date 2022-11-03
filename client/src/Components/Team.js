import React from 'react';
// import logo from "../images/logo.png";
import NavBar from './NavBar';
import {
  BsInstagram,
  BsFacebook,
  BsGithub,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";


function Team() {
  return (
    <div className='teamContainer'>
      <NavBar />
      <h1 className='team'>TEAM</h1>
      <div className='staffContainer'>
        <h3 className='subHeading'>LEADERSHIP</h3>
        <div className='paragraphContainer'>
          <p className='paragraph'><strong>Andrew Maina</strong> <br />Founder, NIA Africa Ltd</p>
          <p className='paragraph'><strong>John Terry</strong> <br />Executive Director,NIA Africa Ltd,Central Africa </p>
          <p className='paragraph'><strong>Elvis Kibet</strong> <br />Executive Director,NIA Africa Ltd,East Africa</p>
          <h3 className='subHeading'>STAFF</h3>
          <p className='paragraph'><strong>Pascal Odudigbo</strong> <br />Chief Financial Officer</p>
          <p className='paragraph'><strong>Tracey Lung'ahi</strong> <br />Finance & Bookkeeping</p>
          <p className='paragraph'><strong>Eric Muthuri</strong> <br />Office Operations Coordinator</p>
          <p className='paragraph'><strong>Peter Mutoi</strong> <br />Bookkeeper</p>
          <p className='paragraph'><strong>Dennis Kosgei</strong> <br />Researcher</p>
          <p className='paragraph'><strong>Daniel Kipruto</strong> <br />Office Support</p>

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
        <h4>2022 Copyright NIA Africa Ltd</h4>
      </div>
    </div>

  )
}

export default Team