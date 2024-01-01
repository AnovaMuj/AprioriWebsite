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

import "./ComingSoonPage.css";

function ComingSoonPage() {
  return (
    <>
      <img className="base-coming-soon-image coming-soon-resize-for-mobiles" src={NightSky} />
      <img className="base-coming-soon-image coming-soon-resize-for-mobiles" src={Stars} />
      <div className="translate-for-mobile">
        <img className="base-coming-soon-image float moon-glow" src={Moon} style={{ "--float-offset": 55 + "px" }} />
        <img className="base-coming-soon-image float" src={SandDunesRight} style={{ "--float-offset": 50 + "px" }} />
        <img className="base-coming-soon-image float" src={BackgroundPyramid2} style={{ "--float-offset": 45 + "px" }} />
        <img className="base-coming-soon-image float" src={BackgroundPyramid1} style={{ "--float-offset": 40 + "px" }} />
        <img className="base-coming-soon-image float" src={MainPyramid} style={{ "--float-offset": 35 + "px" }} />
        <img className="base-coming-soon-image float" src={ForegroundPyramid3} style={{ "--float-offset": 30 + "px" }} />
        <img className="base-coming-soon-image float" src={ForegroundPyramid2} style={{ "--float-offset": 25 + "px" }} />
        <img className="base-coming-soon-image float" src={ForegroundPyramid1} style={{ "--float-offset": 20 + "px" }} />
        <img className="base-coming-soon-image float" src={SandDunesMid} style={{ "--float-offset": 15 + "px" }} />
        <img className="base-coming-soon-image float" src={SandDunesLeft} style={{ "--float-offset": 10 + "px" }} />
      </div>
      <div className="coming-soon-page float hidden-element" style={{ "--float-offset": 10 + "px" }}>
        Coming Soon
      </div>
      <div className="filler-div"></div>
    </>
  );
}

export default ComingSoonPage;
