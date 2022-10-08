import axios from "axios";
import { useEffect, useState } from "react";
import placeholder from "./placeholder.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const Tech = () => {
  const [courses, setCourses] = useState([]);

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

  return (
    <>
      <center>
        <div style={{ "background-color": "rgb(233, 233, 233)" }}>
          <h3>List of Technical Courses</h3>
          <table>
            <tr>
              {courses.map((course) => (
                <td>
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
                  </Card>
                </td>
              ))}
            </tr>
          </table>
        </div>
      </center>
    </>
  );
};
