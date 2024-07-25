import React from "react";
import ListGroup from "./ListGroup";
import aboutMePic from "../Images/portfolio_pic.jpg";

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
        <hr></hr>
        <div className="center_div">
          <h1>Resume</h1>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col border_right">
            <h3 className="sub_header">Profile:</h3>
            <p>
              An honest, self motivated and hardworking college graduate with a
              positive attitude towards my studies, always challenging myself,
              continuously improving in my career as a Software Engineer.
            </p>
            <h3 className="sub_header">Highlight of Qualifications:</h3>
            <ul>
              <li>
                Experience using several operating systems and programming
                languages.
              </li>
              <li>
                Knowledge and understanding in project planning, documentation,
                and methodologies.
              </li>
              <li>
                Responsible, flexible, team-player who is able to work under
                pressure and fulfill deadlines quickly.
              </li>
              <li>
                Excellent in identifying and solving problems, demonstrating
                ability to pay attention to accuracy and detail.
              </li>
              <li>
                Professional attitude and communication skills, with a high
                level of understanding technical terms and information.
              </li>
            </ul>
            <h3 className="sub_header">Technical Skills:</h3>
            <p>
              <b>Operating Systems:</b> Windows, Unix/Linux
            </p>
            <p>
              <b>Languages/Scripts:</b> C#, SQL, ASP.NET, Java, Google App
              Scripts, Python, LotusScript
            </p>
            <p>
              <b>Web Design/Development:</b> HTML, JavaScript, jQuery,
              Bootstrap, MEAN Stack, React
            </p>
            <p>
              <b>Others:</b> MS Office, MS Project, MS Visio, MS Azure, AWS, HCL
              Notes
            </p>
            <h3 className="sub_header">Education:</h3>
            <h5>Software Engineering Technology (Co-op) Advanced Diploma</h5>
            <h6>Sept. 2016 – Dec. 2019</h6>
            <p>Centennial College, Scarborough, ON</p>
            <ul>
              <li>GPA of 4.395/4.5 - High Honours</li>
            </ul>
          </div>
          <div className="col">
            <h4>Academic Projects</h4>
            <ul>
              <li>
                Created a MEAN stack restaurant web application displaying user
                role authentication, service worker functionality, and graphical
                representation of restaurant inventory management and user
                traffic.
              </li>
              <li>
                Collaborated with a team of colleagues to practice advanced
                project management documentation on the simulation of an image
                scanning/processing web application.
              </li>
              <li>
                Developed Python predictive analysis scripts on a real-life
                dataset about bike theft.
              </li>
            </ul>
            <h3 className="sub_header">Experience:</h3>
            <h5>Media Developer</h5>
            <h6>Jan. 2018 – Dec. 2018</h6>
            <p>Pearson Canada Inc. (Co-op), North York, ON</p>
            <p>
              Collaborated in small, specialized teams within a scrum-based
              environment to complete standalone web applications and scripts.
            </p>
            <p>
              Created a user-friendly web application that consisted of
              JavaScript code, which manipulated raw data collected from a known
              google spreadsheet into a JSON formatted object.
            </p>
            <h5>Senior Developer</h5>
            <h6>Oct. 2021 – May. 2024</h6>
            <p>CommonOffice, Toronto, ON</p>
            <p>
              Communicate with 3 to 4 clients weekly as a project manager and
              programmer to build customizable human resources (HR) websites
              that exceed client expectations.
            </p>
            <p>
              Proficiently and fluently worked in HTML, XML, JavaScript,
              LotusScript, and a NoSQL environment to build coding components
              for modules that include e-onboarding, vacation, performance,
              recruitment, scheduling, timesheet, training, and e-learning
              tracking.
            </p>
            <h3 className="sub_header">Reference:</h3>
            <p>Available upon request</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
