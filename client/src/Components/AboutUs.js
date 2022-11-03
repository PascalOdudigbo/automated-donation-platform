import React from 'react'
import NavBar from "./NavBar";
import girls from "../images/girls.png";

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
                    <h1 className='AboutusTitle'>Vision & Mission</h1>
                </div>
                <div className='AboutusParagraphContainer'>
                    <div className='AboutusVisionContainer'>
                        <h3>VISION</h3>
                        <p className='aboutusTag'>
                            We envision a world where girls in East Africa live healthy, safe, educated lives while defining <br /> their own purpose-a world in which menstrual health management is recognized as a human right,<br /> and the onset of puberty as the most effective time to engage girls and boys in a range of personal <br /> health decisions.
                        </p>
                    </div>
                    <div className='AboutusMissionContainer'>
                        <h3>MISSION</h3>
                        <div className='AboutusParagraph'>
                            <p className='aboutusTag'>
                                There is no magic bullet solution to girls’ education, safety, and empowerment. These are complex <br /> issues requiring complex, holistic solutions.
                            </p>
                        </div>
                        <div className='AboutusParagraph'>
                            <p className='aboutusPTag'>
                                NiaAfrica addresses these challenges <strong>by equipping adolescent girls in Kenya with the tools <br /> they need to safely navigate puberty and unlock their potential.</strong>
                            </p>
                        </div>
                        <div className='AboutusParagraph'>
                            <p className='aboutusTag'>
                                These tools include <strong> sanitary pads and rights-based reproductive health education,</strong>  delivered in the <br /> form of social and behavior change content (SBCC) through comics and magazines delivered to <br /> both boys and girls through schools and community organizations.
                            </p>
                        </div>
                    </div>
                    <div className='AboutusTheoryContainer'>
                        <img src={girls} alt="girls"></img>
                        <div className='AboutusTheory'>
                            <h3>THEORY OF CHANGE</h3>
                            <div>
                                <p>It is only when girls have the education they seek about their bodies and rights,<br /> along with the quality products and resources they need to stay healthy and safe, <br />that they can make informed decisions about their lives. Access to these resources <br />among boys, adults, and the larger communities in which girls live is essential<br /> for sustainability and long term impact.</p>
                            </div>
                            <div>
                                <p className='aboutusPTag'>When girls and boys are given honest answers to their real questions, their <br /> voices are affirmed, and they gain the confidence to step into their potential.</p>
                            </div>
                            <div>
                                <p>When adolescents have enhanced reproductive health knowledge and the tools to <br /> navigate puberty, they have enhanced agency in decision-making and are shown <br /> to be more likely to make positive decisions for their futures. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* footer section */}
            <div className="aboutUsFooter">
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