import AprioriLogo from "../assets/AprioriLogo.png";

import "./Navbar.css";

function Navbar() {
  let isNavOpen = false;
  return (
    <div className="navbar">
      <div className="navbar-logo-div hidden-element">
        <a href="">
          <img src={AprioriLogo} className="navbar-logo" />
        </a>
        <div className="navbar-name-div">
          <div className="navbar-name">
            <a href="" className="navbar-logo-anchor-tag" style={{ fontFamily: "inherit" }}>
              Apriori
            </a>
          </div>
          <div className="navbar-dates">
            <a href="" className="navbar-logo-anchor-tag">
              29<sup>th</sup> Jan - 1<sup>st</sup> Feb
            </a>
          </div>
        </div>
      </div>
      <ul className="navbar-ul hidden-element">
        <li>
          <a href="/" className="navbar-anchor-tags">
            About Us
          </a>
        </li>
        <li>
          <a href="/Events" className="navbar-anchor-tags">
            Events
          </a>
        </li>
        <li>
          <a href="/Sponsors" className="navbar-anchor-tags">
            Sponsors
          </a>
        </li>
        <li>
          <a href="/Team" className="navbar-anchor-tags">
            Team
          </a>
        </li>
        <li>
          <a href="#footer" className="navbar-anchor-tags">
            Contact Us
          </a>
        </li>
      </ul>
      <label className="navbar-bar hidden-element" htmlFor="check">
        <input
          type="checkbox"
          id="check"
          onClick={() => {
            if (!isNavOpen) {
              document.querySelector(".navbar-ul").style.display = "inherit";
              isNavOpen = true;
            } else {
              document.querySelector(".navbar-ul").style.display = "none";
              isNavOpen = false;
            }
          }}
        />

        <span className="navbar-hamburger-top"></span>
        <span className="navbar-hamburger-middle"></span>
        <span className="navbar-hamburger-bottom"></span>
      </label>
    </div>
  );
}

export default Navbar;
