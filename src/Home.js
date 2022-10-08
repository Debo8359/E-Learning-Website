import React from "react";
import logo from "./tglogo.png";
import nontech from "./nonTech.webp";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const Home = () => {
  const myfunction = () => {
    window.location = "/tech";
  };
  const myfunction1 = () => {
    window.location = "/nontech";
  };
  const slideImages = [
    {
      url: "https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg?format=jpg&width=960",
      caption: "Technical",
    },
    {
      url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      caption: "Non Technical",
    },
  ];
  return (
    <>
      <div id="home">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <a className="navbar-brand" href="/">
            <img src={logo} height="50px" width="50px" className="logo" />
          </a>
          <button className="navbar-toggler" type="button"></button>
          <span style={{ float: "right" }}>
            <button
              className="btn1 btn-block"
              onClick={() => {
                window.location = "/register";
              }}
            >
              {" "}
              Sign Up/Login{" "}
            </button>
          </span>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#courses">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#diet">
                  Find Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Achievements
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactus">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="helpdoc.html">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="slide-container">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <div
                  style={{
                    height: "400px",
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                >
                  <div className="caption">{slideImage.caption}</div>
                </div>
              </div>
            ))}
          </Slide>
        </div>
      </div>

      <div id="courses">
        <div className="col-12 text-center headingcourses">
          <span>
            <h1 id="courseheading">
              <center>COURSES</center>
            </h1>
          </span>
        </div>
      </div>

      <div className="container coursecontent">
        <div className="row no-padding ">
          <div className="col-md-6">
            <i>
              <span>
                <a id="pu1" className="mouse" onClick={myfunction}>
                  <center>
                    <h3 className="text-center orang">TECHNICAL</h3>
                    <h5 className="text-center text-white">
                      Courses related to Development, Coding, Programming
                      language, AI, Machine learning etc.
                    </h5>
                    <img
                      className="tech"
                      src={
                        "https://i.pinimg.com/originals/4d/98/22/4d9822f9e185523e5ae635364dea8f7c.jpg"
                      }
                    />
                  </center>
                </a>
              </span>
            </i>
          </div>
          <br></br>
          <div className="col-md-6">
            <i>
              <span>
                {" "}
                <a className="mouse" onClick={myfunction1}>
                  <center>
                    <h3 className="text-center orang">NON-TECHNICAL</h3>
                    <h5 className="text-center text-white">
                      Courses related to Music, Photography, Cooking, stock
                      market etc.
                    </h5>
                    <img className="tech " src={nontech} />
                  </center>
                </a>
              </span>
            </i>
          </div>
        </div>
      </div>

      <div id="team">
        <div className="teamheading col-12 text-center">
          <center>ACHIEVEMENTS</center>
        </div>
        <br></br>
        <br></br>
        <div className="container group">
          <section id="counter" className="sec-padding">
            <div className="container">
              <center>
                <table>
                  <tr>
                    <td>
                      <div className="ach">
                        <div className="count">
                          {" "}
                          <span className="fa fa-smile-o"></span>
                          <p className="number">200+</p>
                          <h4>Happy Clients</h4>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="ach">
                        <div className="count">
                          {" "}
                          <span className="fa fa-smile-o"></span>
                          <p className="number">10+</p>
                          <h4>Awards</h4>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="ach">
                        <div className="count">
                          {" "}
                          <span className="fa fa-smile-o"></span>
                          <p className="number">300+</p>
                          <h4>Total Clients</h4>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="ach">
                        <div className="count">
                          {" "}
                          <span className="fa fa-smile-o"></span>
                          <p className="number">500+</p>
                          <h4>Courses</h4>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </center>
            </div>
          </section>
        </div>
      </div>

      <div id="contactus">
        <div className="col-6 m-auto text-center" id="cont">
          <center>ABOUT US</center>
        </div>
        <footer className="text-center">
          <div className="row">
            <div className="col-sm-6">
              <center>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001696423075!2d79.15722781477058!3d12.971742990855802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1629651859311!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  className="f1"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </center>
            </div>

            <div className="col-sm-6">
              <hr color="white" />
              <br></br>
              <br></br>
              <center>
                <hr color="black" width="30%" />

                <h6 id="foot">
                  <strong>Email:</strong> CareerGudiance@gmail.co.in
                </h6>
                <h6 id="foot">
                  <strong>Developers:</strong> Swastika,Debopam,Dedipya and
                  Jaswanthi
                </h6>
                <h6 id="foot">
                  <strong>ADDRESS:</strong>india
                </h6>
                <hr color="black" width="30%" />
              </center>
              <br></br>
              <br></br>
              <a href="https://www.instagram.com/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="">
                <i className="fa fa-whatsapp"></i>
              </a>

              <br></br>
              <br></br>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;

/*



<script>
								var btn = document.getElementById('appoint');
							  	btn.addEventListener('click', function() {
								document.location.href ="#";
							  });
							  </script>

                              

                              */
