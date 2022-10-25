import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../images/logo.png";

function CharityLogin({userData}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [userType, setUserType] = useState("");
    const navigate = useNavigate();

    function handleOnSubmit(e) {
        e.preventDefault();
        setIsLoading(true);

        if (userType === "charity") {
            axios
                .post(`/loginCharity`, {
                    email: email,
                    password: password,
                })
                .then((res) => {
                    setIsLoading(false);
                    console.log(res.data);
                    userData(res.data);
                    // localStorage.setItem("userId", JSON.stringify(res.data.id));
                    alert("Login successful");
                    // navigate("home")
                })
                .catch((error) => {
                    setIsLoading(false);
                    if (error.response) {
                        //console.log(error?.response?.data?.error)
                        alert(error.response.data.error);
                    }
                });
        }
        else {
            axios
                .post(`/loginCharity`, {
                    email: email,
                    password: password,
                })
                .then((res) => {
                    setIsLoading(false);
                    console.log(res.data);
                    userData(res.data);
                    // localStorage.setItem("userId", JSON.stringify(res.data.id));
                    alert("Login successful");
                    // navigate("home")
                })
                .catch((error) => {
                    setIsLoading(false);
                    if (error.response) {
                        //console.log(error?.response?.data?.error)
                        alert(error.response.data.error);
                    }
                });
        }

    }
    return (
        <div className="loginContainer">
            <img src={logo} alt="logo" />
            <h2>LOGIN</h2>
            <form onSubmit={handleOnSubmit} className="form">
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="loginbtn">
                    {isLoading ? "Loading..." : "Login"}
                </button>
                <p>______________or ______________</p>
                <Link className="signUp" to="/charitysignup">SignUp</Link>
            </form>
        </div>

    )
}

export default CharityLogin