import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../images/logo.png";

function CharityRegister({ userData }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        axios.post(`/charities`,
            {
                name: name,
                email: email,
                address: address,
                approved: null,
                password: password,
                password_confirmation: passwordConfirmation
            })
            .then(res => {
                setIsLoading(false);
                // console.log(res.data)
                userData(res.data)
                alert("Charity Registered Successfully!");
                navigate("/")
            })
            .catch(error => {
                setIsLoading(false);
                if (error.response) {
                    //console.log(error?.response?.data?.error)
                    alert(error.response.data.error)
                }
            });
    }
    return (
        <div className="signUpContainer">
            <form onSubmit={handleSubmit} className="form">
                <img className={"charityRegisterLogo"} onClick={() => navigate("/")} src={logo} alt="logo" />
                <h2 className="registerCharityPageTitle">REGISTER CHARITY</h2>
                <label htmlFor="name" className="labelName">Name</label>
                <input className="textInput"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="address">Address</label>
                <input
                    type="address"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                />
                <label htmlFor="password">Password Confirmation</label>
                <input
                    type="password"
                    id="passwordConfirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="current-password"
                    required
                />
                 <br/>
                <p className="charityRegisterSpaceline">______________________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;______________________</p>
                <br/>
                <button style={{backgroundColor: "#fcb500", marginLeft: "-5px"}} type="submit" className="signUp"> {isLoading ? "Loading..." : "Register"}</button>
            </form>
        </div>
    )
}

export default CharityRegister;