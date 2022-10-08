import { useState, useEffect } from "react";
import axios from "axios";

const Reset = () => {
  const [uid, setUid] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd1, setPwd1] = useState("");

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/users");
    const data = await res.json();

    return data;
  };

  async function onSubmit(e) {
    e.preventDefault();
    if (!uid) {
      alert("Username can not be empty!");
    } else if (!pwd) {
      alert("Password can not be empty!");
    } else if (!pwd1) {
      alert("Confirm Password can not be empty!");
    } else if (pwd === pwd1) {
      const reset = {
        username: uid,
        password: pwd,
      };
      try {
        await axios
          .post("http://localhost:4000/app/reset", reset)
          .then((res) => console.log(res.data));
      } catch (error) {
        console.log(error);
      }

      alert("Password Successfully Reset!");

      setUid("");
    } else {
      alert("Password and Confirm Password are not the same!");
    }
    setPwd("");
    setPwd1("");
  }

  useEffect(() => {
    const getUsers = async () => {
      const UsersFromServer = await fetchUsers();
      setUsers(UsersFromServer);
    };
    getUsers();
  }, []);

  const [users, setUsers] = useState([]);

  return (
    <div className="container1">
      <h2>Reset Password</h2>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Username</label>
          <input
            id="uid"
            type="text"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
          ></input>

          <label>New Password</label>
          <input
            id="pwd"
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          ></input>
          <label>Confirm Password</label>
          <input
            id="pwd1"
            type="password"
            value={pwd1}
            onChange={(e) => setPwd1(e.target.value)}
          ></input>
          <input
            type="submit"
            className="btn btn-block"
            value="Change Password"
          ></input>
          <a href="/login">Back to Login Page</a>
        </div>
      </form>
    </div>
  );
};

export default Reset;
