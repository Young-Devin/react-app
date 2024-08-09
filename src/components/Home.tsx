import React from "react";
import ListGroup from "./ListGroup";
import Banner from "./Banner";
import placeholderImage from "../Images/placeholder_image.jpg";
import sneakapeek from "../Images/sneakapeek.jpg";
import travelWebsite from "../Images/travel_website.jpg";
import firstDescendant from "../Images/first_descendant.jpg";
import CommonOfficeLogo from "../Images/commonoffice_logo.jpg";
import PearsonLogo from "../Images/pearson_logo.png";
import video from "../Images/project_video.mp4";

let items = ["Home", "About me"];

const handleSelectedItem = (item: string) => {
  console.log(item);
};

const Home = () => {
  return (
    <>
      <ListGroup
        items={items}
        heading="Welcome to my Portfolio"
        onSelectItem={handleSelectedItem}
      />
      <div className="main-container">
        <video src={video} muted autoPlay loop></video>
        <Banner
          bannerTitle="Welcome"
          bannerContent="Hi my name is Devin Young and this is my website."
          imageSrc="intro_banner"
        />
        <div className="project_banner">
          {/* <video src={video} muted autoPlay loop type="video/mp4"></video> */}
          <div className="align_center">
            <h1>My Projects</h1>
          </div>
          <div className="row">
            <div className="col">
              <div className="card">
                <img
                  className="card-img-top"
                  src={sneakapeek}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">Sneak-a-peak</p>
                  <ul>
                    <li className="websiteLink">
                      <a
                        href="https://sneak-a-peek.onrender.com/"
                        target="_blank"
                      >
                        Link to Website
                      </a>
                    </li>
                    <li className="gitLink">
                      <a
                        href="https://github.com/Young-Devin/foodmine-react.js"
                        target="_blank"
                      >
                        Link to github repository
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  className="card-img-top"
                  src={travelWebsite}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">Travel Website Design theme</p>
                  <ul>
                    {/* <li className="websiteLink">
                      <a href="https://sneak-a-peek.onrender.com/">
                        Link to Website
                      </a>
                    </li> */}
                    <li className="gitLink">
                      <a
                        href="https://github.com/Young-Devin/travel"
                        target="_blank"
                      >
                        Link to github repository
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  className="card-img-top"
                  src={firstDescendant}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <p className="card-text">The First Descendant</p>
                  <ul>
                    {/* <li className="websiteLink">
                      <a href="https://sneak-a-peek.onrender.com/">
                        Link to Website
                      </a>
                    </li> */}
                    <li className="gitLink">
                      <a
                        href="https://github.com/Young-Devin/first-descendant"
                        target="_blank"
                      >
                        Link to github repository
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="work_banner">
          {/* <video src={video} muted autoPlay loop type="video/mp4"></video> */}
          <div className="align_center">
            <h1>My Work history</h1>
            <div className="row">
              <div className="col bg_transparency">
                <div className="card">
                  <div className="imageDiv">
                    <img
                      className="card-img-top image"
                      src={CommonOfficeLogo}
                      alt="Card image cap"
                    />
                  </div>

                  <div className="card-body">
                    <h3 className="card-text">CommonOffice</h3>
                    <p>
                      A reliable HRIS software that offers the services of
                      vacation tracking, timesheet tracking, elearning, and many
                      more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="imageDiv">
                    <img
                      className="card-img-top image"
                      src={PearsonLogo}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-text">Pearson</h3>
                    <p>
                      Pearson Education is a global education company that
                      provides digital learning solutions, assessments, and
                      educational technology to schools, universities, and
                      businesses around the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
