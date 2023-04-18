import React, { useState } from "react";
import "./Login.css";
import Logo from "../../images/logo/logo-no-background.png";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Navbar2 from "../../components/Navbar2";

const Login = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

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
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    if (res.status === 200) {
      navigate("/");
      return;
    }

    setError(data.message);
    console.log(data);
  };
  return (
    <>
      <Navbar2 currentPage="Profile" />
      <div className="main-container">
        <div className="body-container">
          <div className="login-container">
            <div className="heading">
              <h2>Login to MediAI</h2>
              {error ? (
                <p className="relative top-[5px] text-[red] text-center">
                  {error}
                </p>
              ) : null}
            </div>
            <form className="form-container">
              <input
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Username"
              />
              <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Password"
              />
              <p>Forget Password? </p>
              <div className="login-btn">
                <input onClick={submit} type="submit" value="Login" />
              </div>
            </form>
            <div className="tosignup">
              <h4>
                Don't have an account? &nbsp;
                <Link to="/register" id="link">
                  Signup
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
