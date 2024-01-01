import RedNoticePoster from "../../assets/RedNoticePoster.jpeg";

import MajorEventPageTemplate from "./MajorEventPageTemplate.jsx";

import "./RedNotice.css";

const RedNoticeBtn = () => {
  return (
    <a href="">
      <button className="red-notice-btn">
        <span className="red-notice-btn-text">Register</span>
        <span aria-hidden="" className="red-notice-btn-marquee">
          wanted
        </span>
      </button>
    </a>
  );
};

function RedNoticePage() {
  return (
    <div className="red-notice-body major-event-div">
      <MajorEventPageTemplate poster={RedNoticePoster} title="Red Notice" titleFont="YouMurderer BB Regular" titleSizeDes="5em" titleSizeMob="3.5em" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quos, explicabo ducimus aut eum nisi possimus aspernatur. Officia dolores corporis molestiae expedita sed dolor neque commodi reiciendis. Dignissimos natus eveniet at labore nisi corporis quos dolores exercitationem sint dolorum tempore provident ducimus, impedit et dolore quibusdam. Eveniet facere ipsa sit soluta deserunt necessitatibus accusamus qui incidunt quis beatae sapiente reprehenderit cumque explicabo cupiditate dolore, iure autem esse magnam excepturi pariatur, corporis numquam!" Btn={RedNoticeBtn} />
    </div>
  );
}

export default RedNoticePage;
