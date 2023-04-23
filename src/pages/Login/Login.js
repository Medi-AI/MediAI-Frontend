import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

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
    const res = await fetch("http://192.168.152.18:8080/login", {
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
      localStorage.setItem("mediai-profile-data", JSON.stringify(data.profile));
      navigate("/");
      return;
    }

    setError(data.message);
  };
  return (
    <>
      <div className="main-container">
        <Navbar currentPage="Login" />
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
                  Sign up
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
