import "./MajorEventPageTemplate.css";

function MajorEventPageTemplate({ poster, title, titleFont, titleSizeDes, titleSizeMob, content, Btn }) {
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  var titleSize;
  mediaQuery.matches ? (titleSize = titleSizeDes) : (titleSize = titleSizeMob);

  return (
    <>
      <div className="major-event-poster-div float" style={{ "--float-offset": 5 + "px" }}>
        <img src={poster} alt="Event Poster" className="major-event-poster-img" />
      </div>
      <div className="major-event-content-div">
        <div className="major-event-title hidden-element" style={{ fontFamily: titleFont, fontSize: titleSize }}>
          {title}
        </div>
        <div className="major-event-content hidden-element">{content}</div>
        <div className="hidden-element" style={{ marginTop: "1.5em", fontSize: "1em" }}>
          <Btn />
        </div>
      </div>
    </>
  );
}

export default MajorEventPageTemplate;
