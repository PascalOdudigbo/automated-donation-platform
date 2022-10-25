import React from "react";
import logo from "../images/logo.png";
import girls from "../images/girls.png";
import schoolGirls from "../images/scoolgirls.jpg";
import NavBar from "./NavBar";

import {
    BsInstagram,
    BsFacebook,
    BsGithub,
    BsTwitter,
    BsLinkedin,
} from "react-icons/bs";


function Research() {
    return (
        <>
            <NavBar />
            <div className="research">
                <h1>Research</h1>
                <p>We are thrilled to announce the results of the Nia Project, a randomised control trial (RCT) which evaluated the impact of Nia Africa’s program model of delivering pads + adolescent health and rights education.</p>

                <p>In most <em>sub-saharan countries</em>, school going girls are unable to access pads and other supplies needed for their periods. The year 2016 studies from ministry of education revealed girls from poor families miss 20 % of school days in a year due to lack of sanitary towels the data indicated that a girl in primary school between class 6 and 8 can lose up to 18 weeks out of 108 weeks while those in high school can lose almost 24 weeks out of 144 weeks of learning. NIA Africa organization is  dedicated in dealing with this problem and is working on not just providing sanitary towels but also providing clean water and sanitation facilities such as toilets to ensure they are able to meet the guidelines for proper menstrual hygiene as defined by UNICEF.</p>
                <div>
                    <ul>
                        <li><strong>Format: </strong>Two-year, four-armed cluster-randomized controlled trial (RCT)</li>
                        <li><strong>Location:</strong> three rural sub-counties of Kilifi, Kenya </li>

                        <li><strong>Funders:</strong>  UNICEF </li>

                        <li><strong>Implementing Partner:</strong> Plan International Kenya</li>

                    </ul>
                    <p>This pioneering study proved that our combined intervention of sanitary pads and health education has significant impacts on girls’ health and wellbeing.  This includes statistically significant, positive changes in:</p>
                    <ul>
                        <li>Reproductive health knowledge: knowledge of pregnancy, of sexually transmitted diseases, and of modern contraceptives</li>
                        <li>Pride and comfort about managing menstruation, including reduced leakage and embarrassment </li>

                        <li>Self-efficacy, self-confidence, and general resilience to address life’s challenges  </li>

                        <li>Shifts to equitable social and gender norms, including reduced acceptance of spousal violence as a norm </li>

                    </ul>
                    <p>All of which, independently or combined, help girls to have more control over their bodies, their decisions, and their futures.</p>
                </div>
                <hr></hr>
                <div className="intro2">
                    <img src={girls} alt="girls image"></img>
                    <p className="welcome">In Kenya, girls drop out of school at a higher rate than boys beginning at puberty, and many do not have access to reliable reproductive health education as they enter adolescence. Access to menstrual hygiene products and sexual and reproductive health education is thought to help reduce school absence and improve health and social outcomes, however, little rigorous evidence exists to date.</p>

                </div>
                <hr className="horizontal"></hr>
                <div className="intro1">

                    <p className="welcome">As we scale our intervention, with a goal to reach 200,000 beneficiaries across Kenya over the next two years, it is our hope that this solution will serve as a replicable model for communities and governments that seek to support girls’ health and rights. NiaAfrica’s powerful solution helps girls to safely, and confidently, navigate puberty. With a burgeoning youth population as never before witnessed globally, the time for NiaAfrica’s solution is now.</p>

                    <img src={schoolGirls} alt="girls image"></img>
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
        </>
    )

}

export default Research;

