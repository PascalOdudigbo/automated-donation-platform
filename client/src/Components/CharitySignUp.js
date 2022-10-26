import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../images/logo.png";

function CharitySignUp({ userData }) {
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    // const [country, setCountry] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [approved, setApproved] = useState()
    const navigate = useNavigate

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        axios.post(`/charities`,
            {
                name: name,
                email: email,
                address,
                // country,
                password: password,
                password_confirmation: passwordConfirmation
            })
            .then(res => {
                setIsLoading(false);
                console.log(res.data)
                userData(res.data)
                alert("Signup successful!")
                // navigate("/")
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
                <img src={logo} alt="logo" />
                <h2>Register Charity</h2>
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
                <label htmlFor="approved">Approved</label>
                <input
                    type="text"
                    id="approved"
                    value={approved}
                    onChange={(e) => setApproved(e.target.value)}
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
                    id="password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    autoComplete="current-password"
                    required
                />
                <p>______________________&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;______________________</p>
                <button type="submit" className="signUp"> {isLoading ? "Loading..." : "Register"}</button>
            </form>
        </div>
    )
}

export default CharitySignUp