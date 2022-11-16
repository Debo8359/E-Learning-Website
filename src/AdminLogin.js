import React from "react";
import { useState } from "react";
import axios from "axios";
export const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!username) {
      alert("Username cannot be empty!");
    } else if (!password) {
      alert("Password cannot be empty!");
    } else if (re.test(String(username).toLowerCase)) {
      const login = {
        email: username,
        password: password,
      };
      try {
        await axios.post("http://localhost:4000/app/adminlogin", login);
      } catch (err) {
        alert(err);
      }
    } else {
      const login = {
        username: username,
        password: password,
      };
      try {
        await axios.post("http://localhost:4000/app/adminlogin", login);
        setUsername("");
        window.location = "/admin";
      } catch (err) {
        alert(err);
      }
    }
    setPassword("");
  }
  return (
    <div className="container1">
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <h1 align="center">LOGIN PAGE</h1>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input className="btn btn-block" type="submit" value="Log In"></input>

          <a href="/">Return to Home Page</a>
        </div>
      </form>
    </div>
  );
};
