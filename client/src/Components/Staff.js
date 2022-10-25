import React from 'react'
import {
  BsInstagram,
  BsFacebook,
  BsGithub,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

function Staff() {
  return (
    <>
      <div className='staffcontainer'>
        <h1>LEADERSHIP</h1>
        <p><strong>Andrew Maina</strong> <br />Founder, NIA Africa Ltd</p>
        <p><strong>John Terry</strong> <br />Executive Director,NIA Africa Ltd,Central Africa </p>
        <p><strong>Elvis Kibet</strong> <br />Executive Director,NIA Africa Ltd,East Africa</p>
        <h1>STAFF</h1>
        <p><strong>Pascal Odudigbo</strong> <br />Chief Financial Officer</p>
        <p><strong>Tracey Lung'ahi</strong> <br />Finance & Bookkeeping</p>
        <p><strong>Eric Muthuri</strong> <br />Office Operations Coordinator</p>
        <p><strong>Peter Mutoi</strong> <br />Bookkeeper</p>
        <p><strong>Dennis Kosgei</strong> <br />Researcher</p>
        <p><strong>Daniel Kipruto</strong> <br />Office Support</p>
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
    </>

  )
}

export default Staff