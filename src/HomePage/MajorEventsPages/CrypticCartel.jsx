import CrypticCartelPoster from "../../assets/CrypticCartelPoster.jpeg";

import MajorEventPageTemplate from "./MajorEventPageTemplate.jsx";

import "./CrypticCartel.css";

const RedNoticeBtn = () => {
  return (
    <a href="" style={{ textDecoration: "none" }}>
      <button className="cryptic-cartel-btn">
        <span>Register</span>
      </button>
    </a>
  );
};

function CrypticCartelPage() {
  return (
    <div className="cryptic-cartel-body major-event-div">
      <MajorEventPageTemplate poster={CrypticCartelPoster} title="Cryptic Cartel" titleFont="Wolfalcon Regular" titleSizeDes="3em" titleSizeMob="1.5em" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quos, explicabo ducimus aut eum nisi possimus aspernatur. Officia dolores corporis molestiae expedita sed dolor neque commodi reiciendis. Dignissimos natus eveniet at labore nisi corporis quos dolores exercitationem sint dolorum tempore provident ducimus, impedit et dolore quibusdam. Eveniet facere ipsa sit soluta deserunt necessitatibus accusamus qui incidunt quis beatae sapiente reprehenderit cumque explicabo cupiditate dolore, iure autem esse magnam excepturi pariatur, corporis numquam!" Btn={RedNoticeBtn} />
    </div>
  );
}

export default CrypticCartelPage;
