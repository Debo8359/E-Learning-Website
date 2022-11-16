import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!username) {
      alert("Username cannot be empty");
      return;
    } else if (!email) {
      alert("Email cannot be empty");
      return;
    } else if (!password) {
      alert("Password cannot be empty");
      return;
    } else if (!password1) {
      alert("Confirm Password cannot be empty");
      return;
    } else if (!re.test(String(email).toLowerCase())) {
      alert("Invalid E-mail ID");
      return;
    } else if (password !== password1) {
      alert("Passwords do not match.");
      return;
    } else {
      const registered = {
        username: username,
        email: email,
        password: password,
      };
      try {
        await axios
          .post("http://localhost:4000/app/signup", registered)
          .then((res) => console.log(res.data));

        alert("Successfully Registered.");
      } catch (error) {
        alert(error);
      }

      setUsername("");
      setEmail("");
    }
    setPassword("");
    setPassword1("");
  }

  return (
    <div className="container1">
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <h1 align="center">REGISTRATION FORM</h1>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label>E-Mail Address</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <label>Confirm Password</label>
          <input
            type="password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          ></input>
          <input
            className="btn btn-block"
            type="submit"
            value="Register"
          ></input>
          <a href="/reset">Reset Password</a>
          <br></br>
          <a href="/login">Click Here to Log In</a> <br></br>
          <a href="/adminlogin">Click Here for Admin Log In</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
