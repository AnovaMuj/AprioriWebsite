import RedNoticePoster from "../../assets/RedNoticePoster.jpeg";
import FuturismPoster from "../../assets/FuturismPoster.jpeg";
import CrypticCartelPoster from "../../assets/CrypticCartelPoster.jpeg";
import RoboFestPoster from "../../assets/RoboFestPoster.jpeg";

import "./MajorEventsViewMore.css";

function MajorEventsViewMorePage() {
  return (
    <div className="major-events-view-more-body">
      <div className="view-more-cards-div">
        <div className="view-more-cards">
          <div className="view-more-card" style={{ backgroundImage: `url(${RedNoticePoster})` }}></div>
          <div className="view-more-card" style={{ backgroundImage: `url(${FuturismPoster})` }}></div>
          <div className="view-more-card" style={{ backgroundImage: `url(${RedNoticePoster})` }}></div>
          <div className="view-more-card" style={{ backgroundImage: `url(${RoboFestPoster})` }}></div>
          <div className="view-more-card" style={{ backgroundImage: `url(${CrypticCartelPoster})` }}></div>
        </div>
      </div>
      <div className="view-more-content-div">
        <div className="view-more-content hidden-element">Want to know more about our other events?</div>
        <div className="view-more-btn-div hidden-element">
          <a href="" style={{ textDecoration: "none" }}>
            <button className="cssbuttons-io-button">
              Get started
              <div className="icon">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                </svg>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MajorEventsViewMorePage;
