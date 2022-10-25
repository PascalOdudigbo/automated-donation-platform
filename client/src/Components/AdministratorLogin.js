import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../images/logo.png";

function AdministratorLogin({ userData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(`/loginAdministrator`, {
        email: email,
        password: password,
      })
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        userData(res.data);
        // localStorage.setItem("userId", JSON.stringify(res.data.id));
        alert("Login successful");
        navigate("/admin")
      })
      .catch((error) => {
        setIsLoading(false);
        if (error.response) {
          //console.log(error?.response?.data?.error)
          alert(error.response.data.error);
        }
      });
  }

  return (
    <div className="adminLoginContainer">
      <form onSubmit={handleOnSubmit} className="form">
        <img src={logo} alt="logo" />
        <h2>LOGIN</h2>
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
      </form>
    </div>

  );
}
export default AdministratorLogin;
