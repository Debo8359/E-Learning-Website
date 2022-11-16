import axios from "axios";
import { useEffect, useState } from "react";
import placeholder from "./placeholder.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";

export const Admin = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const ListCourses = async () => {
    try {
      const result = await axios.get("http://localhost:4000/app/technical");

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
      setCourses(data);
    };
    getCourses();
  }, []);

  const [ncourses, setNCourses] = useState([]);
  const [nsearch, setNsearch] = useState("");
  const ListNCourses = async () => {
    try {
      const result = await axios.get("http://localhost:4000/app/ntechnical");

      console.log(result.data);
      let data1 = result.data;
      return data1;
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    const getNCourses = async () => {
      const data = await ListNCourses();
      setNCourses(data);
    };
    getNCourses();
  }, []);

  return (
    <>
      <center>
        <div style={{ "background-color": "rgb(233, 233, 233)" }}>
          <div className="fflex">
            <div className="left-align">
              <button
                className="btn"
                onClick={() => {
                  window.location = "/";
                }}
              >
                Log Out
              </button>
            </div>
            <div className="right-align">
              <button
                className="btn"
                onClick={() => {
                  window.location = "/addcourse";
                }}
              >
                + New Course
              </button>
            </div>
          </div>
          <h3>List of Technical Courses</h3>
          <br></br>
          <form className="add-form">
            <div className="form-control">
              Search Technical Courses:
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              ></input>
            </div>
          </form>
          <div className="grid">
            {courses.map((course) =>
              course.cname.toUpperCase().includes(search.toUpperCase()) ||
              course.cdetails.toUpperCase().includes(search.toUpperCase()) ? (
                <>
                  <div className="grid-item">
                    <Card sx={{ maxWidth: 345, height: 650 }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={placeholder}
                        alt="N/A"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {course.cname}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {course.cdetails}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          onClick={async () => {
                            try {
                              await axios
                                .post(
                                  "http://localhost:4000/app/deletetech",
                                  course
                                )
                                .then(() => {
                                  alert("Course Successfully deleted");
                                  window.location = window.location;
                                });
                            } catch (err) {
                              alert(err);
                            }
                          }}
                        >
                          DELETE
                        </Button>
                        <Button
                          onClick={async () => {
                            await axios
                              .post(
                                "http://localhost:4000/app/modifytech",
                                course
                              )
                              .then(() => {
                                window.location = "/modifytech";
                              });
                          }}
                        >
                          MODIFY
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      </center>
      <br></br>
      <center>
        <div style={{ "background-color": "rgb(233, 233, 233)" }}>
          <h3>List of Non Technical Courses</h3>
          <form className="add-form">
            <div className="form-control">
              Search Non Technical Courses:
              <input
                value={nsearch}
                onChange={(e) => {
                  setNsearch(e.target.value);
                }}
              ></input>
            </div>
          </form>

          <div className="grid">
            {ncourses.map((course) =>
              course.cname.toUpperCase().includes(nsearch.toUpperCase()) ||
              course.cdetails.toUpperCase().includes(nsearch.toUpperCase()) ? (
                <>
                  <div className="grid-item">
                    <Card sx={{ maxWidth: 345, height: 650 }}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={placeholder}
                        alt="N/A"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {course.cname}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {course.cdetails}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          onClick={async () => {
                            try {
                              await axios
                                .post(
                                  "http://localhost:4000/app/deletentech",
                                  course
                                )
                                .then(() => {
                                  alert("Course Successfully deleted");
                                  window.location = window.location;
                                });
                            } catch (err) {
                              alert(err);
                            }
                          }}
                        >
                          DELETE
                        </Button>
                        <Button
                          onClick={async () => {
                            await axios.post(
                              "http://localhost:4000/app/modifyntech",
                              course
                            );
                            window.location = "/modifyntech";
                          }}
                        >
                          MODIFY
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      </center>
    </>
  );
};
