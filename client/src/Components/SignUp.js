import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp({ userData }) {
    // const [user, setUser] = useState(null)
    const [firstName, setFirstName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        axios.post(`/donors`,
        {
                first_name: firstName,
                last_name: lastName,
                email,
                country,
                password: password,
                password_confirmation: passwordConfirmation
        })
        .then(res => {
            setIsLoading(false);
            userData(res.data)
            alert("Signup successful!")
            // navigate("/")
        })
        .catch(error =>{
            setIsLoading(false);
            if(error.response){
                //console.log(error?.response?.data?.error)
                alert(error.response.data.error)
            }
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <h1>Sign Up</h1>
                <label htmlFor="fisrtName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="email">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
                <label htmlFor="email">Country</label>
                <input
                    type="text"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
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
                <button type="submit"> {isLoading ? "Loading..." : "Signup"}</button>
            </form>
        </div>
    );
}

export default SignUp;

