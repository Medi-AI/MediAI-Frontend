import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

import Navbar from "../../components/Navbar";
import "./Register.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    repeat_password: "",
  });
  const [showPasswordOne, setShowPasswordOne] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(() => {
      return {
        ...user,
        [name]: value,
      };
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch("https://mediai-server.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(user),
    });

    const authToken = res.headers.get("mediai-auth-token");
    const data = await res.json();

    if (res.status === 200 && authToken) {
      localStorage.setItem("mediai-auth-token", authToken);
      localStorage.setItem("mediai-user-data", JSON.stringify(data.user));
      toast.success("Registration successful!");
      navigate("/profile");
    }
    if (data.message === '"repeat_password" must be [ref:password]') {
      toast.error("Passwords do not match!");
    } else {
      toast.error(data.message);
    }
  };
  return (
    <div className="main-container">
      <Navbar currentPage="Login" />
      <div className="body-container ">
        <div className="register-container">
          <h2>Signup to MediAI</h2>

          <form>
            <div className="input-fields">
              <div className="input-field">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <input
                  name="username"
                  type="text"
                  placeholder="Username"
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <div className="input-field icon-div">
                <input
                  name="password"
                  type={showPasswordOne ? "text" : "password"}
                  placeholder="Password"
                  onChange={handleChange}
                />
                {!showPasswordOne ? (
                  <VisibilityIcon
                    className="icons"
                    id="icon1"
                    onClick={() => setShowPasswordOne(!showPasswordOne)}
                  />
                ) : (
                  <VisibilityOffIcon
                    className="icons"
                    id="icon1"
                    onClick={() => setShowPasswordOne(!showPasswordOne)}
                  />
                )}
              </div>
              <div className="input-field icon-div">
                <input
                  name="repeat_password"
                  type={showPasswordTwo ? "text" : "password"}
                  placeholder="Repeat Password"
                  onChange={handleChange}
                />
                {!showPasswordTwo ? (
                  <VisibilityIcon
                    className="icons"
                    id="icon2"
                    onClick={() => setShowPasswordTwo(!showPasswordTwo)}
                  />
                ) : (
                  <VisibilityOffIcon
                    className="icons"
                    id="icon2"
                    onClick={() => setShowPasswordTwo(!showPasswordTwo)}
                  />
                )}
              </div>
              <div className="register-as-div">
                <select name="RegisterAs" onChange={handleChange}>
                  <option
                    id="registeras"
                    className="select-items"
                    value="Register As"
                  >
                    Register As
                  </option>
                  <option className="select-items" value="Patient">
                    Patient
                  </option>
                  <option className="select-items" value="Doctor">
                    Doctor
                  </option>
                </select>
              </div>
            </div>
            <div className="submit-btn">
              <input onClick={submit} type="button" value="Signup" />
            </div>
          </form>
          <div className="tosignin">
            <h4>
              Already have an account? &nbsp;
              <Link to="/login" id="link">
                Login
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
