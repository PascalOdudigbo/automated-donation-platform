import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function Login({ userData }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();

  function handleOnSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    if (userType === "donor") {
      axios
        .post(`/loginDonor`, {
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
       <h3>LOGIN</h3>
      <form onSubmit={handleOnSubmit} className="form">
        <DropdownButton
          title="Select User Type"
          className="userTypeDropDown"
          onSelect={(e) => {
            console.log(e);
            setUserType(e);
          }}
        >
          <Dropdown.Item eventKey="donor">Donor</Dropdown.Item>
          <Dropdown.Item eventKey="charity">Charity</Dropdown.Item>
        </DropdownButton>
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
        <button type="submit" className="login">
          {isLoading ? "Loading..." : "Login"}
        </button>
        <p>or</p>
        <Link  className="signUp" to="/signup">SignUp</Link>
      </form>
    </div>

  );
}
export default Login;
