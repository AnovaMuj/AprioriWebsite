import RoboFestPoster from "../../assets/RoboFestPoster.jpeg";

import MajorEventPageTemplate from "./MajorEventPageTemplate.jsx";

import "./RoboFest.css";

const RedNoticeBtn = () => {
  return (
    <a href="" style={{ textDecoration: "none" }}>
      <button className="robo-fest-btn">
        <p>Register</p>
      </button>
    </a>
  );
};

function RoboFestPage() {
  return (
    <div className="robo-fest-body major-event-div">
      <MajorEventPageTemplate poster={RoboFestPoster} title="Robo Fest" titleFont="Mechsuit" titleSizeDes="3em" titleSizeMob="1.8em" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quos, explicabo ducimus aut eum nisi possimus aspernatur. Officia dolores corporis molestiae expedita sed dolor neque commodi reiciendis. Dignissimos natus eveniet at labore nisi corporis quos dolores exercitationem sint dolorum tempore provident ducimus, impedit et dolore quibusdam. Eveniet facere ipsa sit soluta deserunt necessitatibus accusamus qui incidunt quis beatae sapiente reprehenderit cumque explicabo cupiditate dolore, iure autem esse magnam excepturi pariatur, corporis numquam!" Btn={RedNoticeBtn} />
    </div>
  );
}

export default RoboFestPage;
