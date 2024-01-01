import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Helmet } from "react-helmet";

import NightSky from "../assets/NightSky.jpeg";
import Stars from "../assets/Stars.png";
import Moon from "../assets/Moon.png";
import SandDunesRight from "../assets/SandDunesRight.png";
import BackgroundPyramid2 from "../assets/BackgroundPyramid2.png";
import BackgroundPyramid1 from "../assets/BackgroundPyramid1.png";
import MainPyramid from "../assets/MainPyramid.png";
import ForegroundPyramid3 from "../assets/ForegroundPyramid3.png";
import ForegroundPyramid2 from "../assets/ForegroundPyramid2.png";
import ForegroundPyramid1 from "../assets/ForegroundPyramid1.png";
import SandDunesMid from "../assets/SandDunesMid.png";
import SandDunesLeft from "../assets/SandDunesLeft.png";
import Rock1 from "../assets/Rock1.png";
import Rock2 from "../assets/Rock2.png";
import Rock3 from "../assets/Rock3.png";
import Rock4 from "../assets/Rock4.png";

import RedNoticePage from "./MajorEventsPages/RedNotice";
import FuturismPage from "./MajorEventsPages/Futurism";
import CrypticCartelPage from "./MajorEventsPages/CrypticCartel";
import RoboFestPage from "./MajorEventsPages/RoboFest";
import MajorEventsViewMorePage from "./MajorEventsPages/MajorEventsViewMore";

import "./HomePage.css";

const HomePage = () => {
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  var ParallaxOffset, ParallaxLength;
  if (mediaQuery.matches) {
    ParallaxOffset = 0.2;
    ParallaxLength = 1.78;
  } else {
    ParallaxOffset = 0.5;
    ParallaxLength = 2.725;
  }

  return (
    <main>
      <Parallax pages={ParallaxLength} className="parallax-remove-scrollbar">
        <ParallaxLayer speed={0}>
          <img className="base-parallax-image resize-for-mobiles" src={NightSky} />
        </ParallaxLayer>
        <ParallaxLayer speed={0.2}>
          <img className="base-parallax-image resize-for-mobiles" src={Stars} />
        </ParallaxLayer>
        <ParallaxLayer speed={0.4} offset={ParallaxOffset}>
          <img className="base-parallax-image float moon-glow" src={Moon} style={{ "--float-offset": 55 + "px" }} />
        </ParallaxLayer>
        <ParallaxLayer speed={0.6} offset={ParallaxOffset}>
          <img className="base-parallax-image float" src={SandDunesRight} style={{ "--float-offset": 50 + "px" }} />
        </ParallaxLayer>
        <ParallaxLayer speed={0.8} offset={ParallaxOffset}>
          <img className="base-parallax-image float" src={BackgroundPyramid2} style={{ "--float-offset": 45 + "px" }} />
        </ParallaxLayer>
        <ParallaxLayer speed={1} offset={ParallaxOffset}>
          <img className="base-parallax-image float" src={BackgroundPyramid1} style={{ "--float-offset": 40 + "px" }} />
        </ParallaxLayer>
        <ParallaxLayer speed={1.2} offset={ParallaxOffset}>
          <img className="base-parallax-image float" src={MainPyramid} style={{ "--float-offset": 35 + "px" }} />
        </ParallaxLayer>
        <ParallaxLayer speed={1.4} offset={ParallaxOffset}>
          <img className="base-parallax-image float" src={ForegroundPyramid3} style={{ "--float-offset": 30 + "px" }} />
        </ParallaxLayer>
        <ParallaxLayer speed={1.6} offset={ParallaxOffset}>
          <img className="base-parallax-image float" src={ForegroundPyramid2} style={{ "--float-offset": 25 + "px" }} />
        </ParallaxLayer>
        <ParallaxLayer speed={1.8} offset={ParallaxOffset}>
          <img className="base-parallax-image float" src={ForegroundPyramid1} style={{ "--float-offset": 20 + "px" }} />
        </ParallaxLayer>
        <ParallaxLayer speed={2} offset={ParallaxOffset}>
          <img className="base-parallax-image float" src={SandDunesMid} style={{ "--float-offset": 15 + "px" }} />
        </ParallaxLayer>
        <ParallaxLayer speed={2.2} offset={ParallaxOffset}>
          <img className="base-parallax-image float" src={SandDunesLeft} style={{ "--float-offset": 10 + "px" }} />
          <div className="home-background"></div>
        </ParallaxLayer>
        <ParallaxLayer speed={0}>
          <div className="hero-section-content-div">
            <div className="hero-section-days hidden-element">Mon Tue Wed Thu</div>
            <div className="hero-section-name float hidden-element" style={{ "--float-offset": 6 + "px" }}>
              A<span style={{ fontFamily: "inherit", fontSize: "0.75em", marginLeft: "-10px" }}>PRIORI'</span>24
            </div>
            <div className="hero-section-tagline float hidden-element" style={{ "--float-offset": 4 + "px" }}>
              <div className="hero-section-line" style={{ width: "1.5em" }}></div>
              <div>A Timeless Accent</div>
              <div className="hero-section-line" style={{ width: "1.5em" }}></div>
            </div>
            <div className="hero-section-end-div">
              <div className="hero-section-end-left float" style={{ "--float-offset": 3 + "px" }}>
                <div className="hero-section-line hidden-element" style={{ width: "1.5em" }}></div>
                <div className="hidden-element" style={{ marginRight: "0.5em" }}>
                  Follow us
                </div>
                <a className="hidden-element" href="https://www.instagram.com/anova.muj/" target="_blank">
                  <div className="hero-section-instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 30 30" fill="currentColor">
                      <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                    </svg>
                  </div>
                </a>
                <a className="hidden-element" href="https://www.linkedin.com/company/anova-muj/" target="_blank">
                  <div className="hero-section-linkedin">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9,15.7C9,16.4,8.4,17,7.7,17	c-0.7,0-1.3-0.6-1.3-1.3v-4.5C6.5,10.6,7,10,7.7,10C8.4,10,9,10.6,9,11.3V15.7z M7.7,8.7c-0.8,0-1.3-0.5-1.3-1.2	c0-0.7,0.5-1.2,1.4-1.2c0.8,0,1.3,0.5,1.3,1.2C9.1,8.2,8.6,8.7,7.7,8.7z M18,15.8c0,0.7-0.5,1.2-1.2,1.2s-1.2-0.5-1.2-1.2v-2.6	c0-1.1-0.7-1.2-0.9-1.2c-0.2,0-1.1,0-1.1,1.2v2.6c0,0.7-0.5,1.2-1.2,1.2h-0.1c-0.7,0-1.2-0.5-1.2-1.2v-4.5c0-0.7,0.6-1.3,1.3-1.3	s1.3,0.6,1.3,1.3c0,0,0.3-1.3,2.2-1.3c1.2,0,2.2,1,2.2,3.2V15.8z"></path>
                    </svg>
                  </div>
                </a>
                <div className="hero-section-line hero-section-line-mobile hidden-element" style={{ width: "1.5em" }}></div>
              </div>
              <div className="hero-section-down-arrows float" style={{ "--float-offset": 5 + "px" }}>
                <svg className="hero-section-down-arrow" fill="#currentColor" height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve">
                  <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                </svg>
                <svg className="hero-section-down-arrow" style={{ transform: "translateY(-15px)" }} fill="#currentColor" height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve">
                  <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                </svg>
              </div>
              <div className="hero-section-end-right float" style={{ "--float-offset": 3 + "px" }}>
                <div className="hero-section-line hidden-element" style={{ width: "1.5em" }}></div>
                <div className="hidden-element">The annual tech fest of ANOVA</div>
                <div className="hero-section-line hero-section-line-mobile hidden-element" style={{ width: "1.5em" }}></div>
              </div>
            </div>
          </div>
          <div className="about-div">
            <div className="about-rock-div-parent">
              <div className="about-rock-div">
                <img src={Rock1} alt="" className="about-rock1" />
                <img src={Rock2} alt="" className="about-rock2" />
                <img src={Rock3} alt="" className="about-rock3" />
                <img src={Rock4} alt="" className="about-rock4" />
              </div>
            </div>
            <div className="about-content-div">
              <div className="about-title hidden-element">About</div>
              <div className="about-content hidden-element">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dignissimos nobis doloremque omnis nostrum quidem vero, totam excepturi est? Architecto voluptates deleniti hic ut. Repellat nesciunt eos, voluptates veniam corrupti ea similique expedita exercitationem eveniet deleniti consequatur, ullam commodi? Doloribus a voluptatibus, sit molestias iure ipsum architecto nisi voluptates laudantium ex provident possimus aspernatur, aliquam ea officiis ipsam quasi corrupti fugiat. Inventore unde in cum quasi facere labore iure quos architecto ducimus. Eligendi nemo ipsum aspernatur dicta veniam natus reprehenderit ullam nobis corrupti consequatur incidunt voluptatem reiciendis necessitatibus in, sint distinctio cum nesciunt, adipisci doloribus quaerat commodi, temporibus illo numquam?</div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
      <div className="filler-div"></div>
      <div className="hero-events-transition">
        <div className="major-events-title hidden-element">Our Major Events</div>
      </div>
      <div className="major-events-parent">
        <div className="major-events-sticky">
          <div className="major-events-scroll-section">
            <RedNoticePage />
            <FuturismPage />
            <CrypticCartelPage />
            <RoboFestPage />
            <MajorEventsViewMorePage />
          </div>
        </div>
      </div>
      {/* <div className="sponsor-container"></div> */}
      <Helmet>
        <script src="src/HomePage/HorizontalScrollScript.js" type="module" />
      </Helmet>
    </main>
  );
};

export default HomePage;
