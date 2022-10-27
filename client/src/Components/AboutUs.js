import React from 'react'
import NavBar from "./NavBar";

// get our footer icon imports
import {
    BsInstagram,
    BsFacebook,
    BsGithub,
    BsTwitter,
    BsLinkedin,
} from "react-icons/bs";


function AboutUs() {
    return (
        <>
            <NavBar />
            <div className='AboutusContainer'>
                <div className='AboutusContainerTitle'>
                    <h1 className='AboutusTitle'>News & updates</h1>
                </div>
                <div className='AboutusParagraphContainer'>
                    <div className='AboutusParagraph'>
                    <p className='aboutusTag'>
                        Nairobi - October 27, 2022 -  Today we are thrilled to announce that we have received a $750,000 <br/>grant from #StartSmall, Jack Dorsey’s philanthropic initiative.<br/>

                        This is one of the largest single gifts that we have ever received and will make a profound <br/>difference in the lives of those we serve, strengthening our ability to provide life-saving health <br/>and rights education, pads, and sanitation facilities to our young girls across Kenya.<br/>
                        </p>
                    </div>
                    <div className='AboutusParagraph2'>
                        <p className='aboutusTag'>
                        This gift comes at a time of great need for our programs, as girls and women across Kenya have been <br/>disproportionately affected by the social and economic impacts of Covid-19, evidenced by<br/> staggering rates of sexual and gender-based violence, adolescent pregnancy, and transactional sex <br/>for commodities like sanitary pads.<br/>
                        </p>
                    </div>      
                     <div className='AboutusParagraph2'>
                        <p className='aboutusTag'>
                     We are so grateful to our community of supporters who have walked alongside us and supported<br/> NiaAfrica’s efforts every step of the way.  Today we celebrate and share this milestone with each of you.<br/> Thank you for all you have done and continue to enable our efforts and drive our impact forward.<br/> We look forward to continuing our partnership with each of you as we co-create the <br/>change we wish to see for girls in sub-saharan Africa. <br/>
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className='AboutusPartner'>
                <h2 className='partnersTitle'>Our Partners</h2>
                <p className='partnersDeets'>We are grateful to the following organizations for their generous support of our work!</p>
                <div> 
                </div>
            </div> */}
            
            
            {/* footer section */}
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
                <h4>  &copy;{new Date().getFullYear()} Copyright NIA Africa Ltd</h4>
            </div>

        </>
    )
}

export default AboutUs