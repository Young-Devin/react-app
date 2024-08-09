import React from "react";
import ListGroup from "./ListGroup";
import aboutMePic from "../Images/portfolio_pic.jpg";
import { IoMailSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { BiSolidRectangle } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
import { IoIosLink } from "react-icons/io";

let items = ["Home", "About me"];

const handleSelectedItem = (item: string) => {
  console.log(item);
};

const AboutMe = () => {
  return (
    <>
      <ListGroup items={items} heading="" onSelectItem={handleSelectedItem} />
      <div className="main-container">
        <div className="center_div">
          <h1>About Me</h1>
          <hr></hr>
          <img src={aboutMePic} alt="My Image"></img>
          <br></br>
          <br></br>
          <p className="desc">
            {" "}
            My Name is Devin Young and I am inspiring Software Developer looking
            to make a difference in the career that I have chosen. From previous
            work experience I have worked with countless clients to build
            websites that exceed the clients needs and expectations. Outside of
            work my favorite hobbies are playing basketball, enjoying video
            games with friends, and watching anime.
          </p>
        </div>
        <div className="resumeCotainer">
          <div className="resumeHeader">
            <hr></hr>
            <div className="center_div">
              <h1>Resume</h1>
            </div>
            <hr></hr>
            <div className="header">
              <span>Devin Young</span>
            </div>
          </div>

          <div className="resumeContent">
            <div className="firstColumn">
              <div className="summary">
                <h3 className="subHeader">
                  <i>Professional Summary</i>
                </h3>
                <p>
                  Highly-skilled Software Development professional with 5 years
                  of experience designing and building web applications that
                  meet client expectations. Known for demonstrating excellent
                  project management skills when leading teams in complex
                  development projects.
                </p>
              </div>
              <div className="workHistory">
                <h3 className="subHeader">
                  <i>Work History</i>
                </h3>

                <div className="job">
                  <h5 className="jobTitle">CommonOffice - Senior Developer</h5>
                  <span className="location">Toronto, ON</span>
                  <span className="duration">10/2021 - 05/2024</span>
                  <ul className="jobDesc">
                    <li>
                      Communicated with 3 to 4 clients weekly as a project
                      manager and programmer to build customizable human
                      resources (HR) websites that exceed client expectations.
                    </li>
                    <li>
                      Proficiently and fluently worked in HTML, XML, JavaScript,
                      LotusScript, and a NoSQL environment to build coding
                      components for modules that include e-onboarding,
                      vacation, performance, recruitment, scheduling, timesheet,
                      training, and e-learning tracking.
                    </li>
                  </ul>
                </div>

                <div className="job">
                  <h5 className="jobTitle">Champs Sports - Sales Associate</h5>
                  <span className="location">Scarborough, ON</span>
                  <span className="duration">08/2020 - 03/2022</span>
                  <ul className="jobDesc">
                    <li>
                      Proactively assisted customers in finding the right shoes
                      and apparel with the passion to exceed customer
                      expectations.
                    </li>
                    <li>
                      Coordinated with team members in maintaining the visual
                      and display standards of the sales floor.
                    </li>
                  </ul>
                </div>

                <div className="job">
                  <h5 className="jobTitle">
                    Pearson Canada Inc. - Media Developer (Co-op)
                  </h5>
                  <span className="location">North York, ON</span>
                  <span className="duration">01/2018 - 12/2018</span>
                  <ul className="jobDesc">
                    <li>
                      Collaborated in small, specialized teams within a
                      scrum-based environment to complete standalone web
                      applications and scripts.
                    </li>
                    <li>
                      Created a user-friendly web application that consisted of
                      JavaScript code, which manipulated raw data collected from
                      a known google spreadsheet into a JSON formatted object.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="academicProjects">
                <h3 className="subHeader">
                  <i>Academic Projects</i>
                </h3>
                <ul className="projectsList">
                  <li>
                    Created a MEAN stack restaurant web application displaying
                    user role authentication, service worker functionality, and
                    graphical representation of restaurant inventory management
                    and user traffic.
                  </li>
                  <li>
                    Collaborated with a team of colleagues to practice advanced
                    project management documentation on the simulation of an
                    image scanning/processing web application.{" "}
                  </li>
                  <li>
                    Developed Python predictive analysis scripts on a real-life
                    dataset about bike theft.
                  </li>
                </ul>
              </div>
            </div>
            <div className="secondColumn">
              <div className="contactLinks">
                <span>
                  <IoMailSharp /> devinyoung1998@hotmail.ca
                </span>
                <span>
                  <MdLocalPhone /> 416-884-0739
                </span>
                <span>
                  <TiLocation /> Scarborough, ON M1L 1P2
                </span>
                <a
                  href="https://www.linkedin.com/in/devin-young-170209162/"
                  target="_blank"
                >
                  <IoIosLink />{" "}
                  https://www.linkedin.com/in/devin-young-170209162/
                </a>
                <a
                  href="https://devins-portfolio.onrender.com/"
                  target="_blank"
                >
                  <IoIosLink /> https://devins-portfolio.onrender.com/
                </a>
                <a href="https://github.com/Young-Devin" target="_blank">
                  <IoIosLink /> https://github.com/Young-Devin
                </a>
              </div>

              <div className="skills">
                <h3 className="subHeader">
                  <i>Skills</i>
                </h3>
                <ul className="skillList">
                  <li>Project Management Experience</li>
                  <li>SCRUM Experience</li>
                  <li>Documentation and Reporting</li>
                  <li>Customer-Oriented</li>
                  <li>Code Debugging</li>
                  <li>Web Application Development</li>
                  <li>HTML and XML</li>
                  <li>JavaScript and ReactJS</li>
                  <li>CSS, SCSS, Tailwind CSS, and Materialize CSS</li>
                  <li>MERN Stack Experience</li>
                  <li>Databases and NoSQL</li>
                </ul>
              </div>

              <div className="education">
                <h3 className="subHeader">
                  <i>Education</i>
                </h3>
                <h5 className="educationTitle">Centennial College</h5>
                <span className="educationDuration">09/2016 - 12/2019</span>
                <span className="educationLocation">Scarborough, ON</span>
                <span className="educationStudy">
                  Software Engineering Technology (Co-op) Advanced Diploma
                </span>
                <span className="educationGPA">4.395/4.5 - High Honours</span>
              </div>

              <div className="languages">
                <h3 className="subHeader">
                  <i>Languages</i>
                </h3>
                <span className="languageCat">English</span>
                <span className="grading">
                  <BiSolidRectangle className="gradingIcon" />
                  <BiSolidRectangle className="gradingIcon" />
                  <BiSolidRectangle className="gradingIcon" />
                  <BiSolidRectangle className="gradingIcon" />
                  <BiSolidRectangle className="gradingIcon" />
                </span>
                <span className="languageFluency">Native</span>
              </div>

              <div className="references">
                <h3 className="subHeader">
                  <i>References</i>
                </h3>
                <span className="referenceDesc">Available upon request</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
