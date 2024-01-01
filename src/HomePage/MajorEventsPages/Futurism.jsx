import FuturismPoster from "../../assets/FuturismPoster.jpeg";

import MajorEventPageTemplate from "./MajorEventPageTemplate.jsx";

import "./Futurism.css";

const FuturismBtn = () => {
  return (
    <a href="">
      <button className="futurism-btn">
        R e g i s t e r
        <div id="futurism-btn-clip">
          <div id="futurism-btn-leftTop" className="futurism-btn-corner"></div>
          <div id="futurism-btn-rightBottom" className="futurism-btn-corner"></div>
          <div id="futurism-btn-rightTop" className="futurism-btn-corner"></div>
          <div id="futurism-btn-leftBottom" className="futurism-btn-corner"></div>
        </div>
        <span id="futurism-btn-rightArrow" className="futurism-btn-arrow"></span>
        <span id="futurism-btn-leftArrow" className="futurism-btn-arrow"></span>
      </button>
    </a>
  );
};

function FuturismPage() {
  return (
    <div className="futurism-body major-event-div">
      <MajorEventPageTemplate poster={FuturismPoster} title="Futurism" titleFont="Ethnocentric Regular Italics" titleSizeDes="3em" titleSizeMob="2em" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quos, explicabo ducimus aut eum nisi possimus aspernatur. Officia dolores corporis molestiae expedita sed dolor neque commodi reiciendis. Dignissimos natus eveniet at labore nisi corporis quos dolores exercitationem sint dolorum tempore provident ducimus, impedit et dolore quibusdam. Eveniet facere ipsa sit soluta deserunt necessitatibus accusamus qui incidunt quis beatae sapiente reprehenderit cumque explicabo cupiditate dolore, iure autem esse magnam excepturi pariatur, corporis numquam!" Btn={FuturismBtn} />
    </div>
  );
}

export default FuturismPage;
