import React from "react";
import { useState } from "react";
import axios from "axios";
export const AddCourse = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    console.log(type);
    if (
      type.toLowerCase() !== "technical" &&
      type.toLowerCase() !== "non technical"
    ) {
      alert('Please enter "Technical" or "Non Technical" under Course Type');
    } else {
      const login = {
        cname: username,
        cdetails: password,
        type: type,
      };
      try {
        await axios
          .post("http://localhost:4000/app/addcourse", login)
          .then(() => {
            alert("Course Succesfully Added");
            window.location = "/admin";
          });
      } catch (err) {
        alert(err);
      }
    }
  }

  return (
    <div className="container1">
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <h1 align="center">ADD NEW COURSE</h1>
          <label>Course Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          ></input>
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
            value="Add Course"
          ></input>

          <a href="/admin">Return to Admin Page</a>
        </div>
      </form>
    </div>
  );
};
