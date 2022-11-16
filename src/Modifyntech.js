import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export const Modifyntech = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const login = {
      cname: username,
      cdetails: password,
    };
    try {
      await axios.post("http://localhost:4000/app/modntech", login).then(() => {
        alert("Changes Successfully Saved");
        window.location = "/admin";
      });
    } catch (err) {
      alert(err);
    }
  }

  const ListCourses = async () => {
    try {
      const result = await axios.get("http://localhost:4000/app/getmodntech");

      console.log(result.data);
      let data1 = result.data;
      return data1;
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    const getCourses = async () => {
      const data = await ListCourses();
      setUsername(data.cname);
      setPassword(data.cdetails);
    };
    getCourses();
  }, []);
  return (
    <div className="container1">
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <h1 align="center">MODIFY COURSE DETAILS</h1>
          <label>Course Name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label>Course Details</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input
            className="btn btn-block"
            type="submit"
            value="Save Changes"
          ></input>

          <a href="/admin">Return to Admin Page</a>
        </div>
      </form>
    </div>
  );
};
