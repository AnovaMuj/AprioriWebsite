import { Helmet } from "react-helmet";

import FooterCoverLeft from "../assets/FooterCoverLeft.png";
import FooterCoverRight from "../assets/FooterCoverRight.png";
import FooterCoverCenterLeft from "../assets/FooterCoverCenterLeft.png";
import FooterCoverCenterRight from "../assets/FooterCoverCenterRight.png";
import DevelopedByImg from "../assets/DevelopedByImg.png";

import "./Footer.css";

function Footer() {
  const handleDevelopedByEnable = () => {
    document.querySelector(".developed-by-backdrop").classList.add("developed-by-backdrop-enabled");
    document.querySelector(".developed-by-card").classList.add("developed-by-card-enabled");
  };

  const handleDevelopedByDisable = () => {
    document.querySelector(".developed-by-backdrop").classList.remove("developed-by-backdrop-enabled");
    document.querySelector(".developed-by-card").classList.remove("developed-by-card-enabled");
  };

  return (
    <>
      <div className="footer" id="footer">
        <div>
          <img src={FooterCoverLeft} alt="Footer Cover" className="footer-cover-left-img" />
        </div>
        <div>
          <img src={FooterCoverRight} alt="Footer Cover" className="footer-cover-right-img" />
        </div>
        <div>
          <img src={FooterCoverCenterRight} alt="Footer Cover" className="footer-cover-center-left-img" />
        </div>
        <div>
          <img src={FooterCoverCenterLeft} alt="Footer Cover" className="footer-cover-center-right-img" />
        </div>
        <div className="footer-main-text hidden-element">
          <span className="footer-apriori">Apriori</span>by<span className="footer-anova">ANOVA</span>
        </div>
        <div className="footer-follow-us hidden-element">
          <div>Follow us | </div>
          <a href="https://www.instagram.com/anova.muj/" target="_blank">
            <div className="footer-instagram">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 30 30" fill="currentColor">
                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
              </svg>
            </div>
          </a>
          <a href="https://www.linkedin.com/company/anova-muj/" target="_blank">
            <div className="footer-linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9,15.7C9,16.4,8.4,17,7.7,17	c-0.7,0-1.3-0.6-1.3-1.3v-4.5C6.5,10.6,7,10,7.7,10C8.4,10,9,10.6,9,11.3V15.7z M7.7,8.7c-0.8,0-1.3-0.5-1.3-1.2	c0-0.7,0.5-1.2,1.4-1.2c0.8,0,1.3,0.5,1.3,1.2C9.1,8.2,8.6,8.7,7.7,8.7z M18,15.8c0,0.7-0.5,1.2-1.2,1.2s-1.2-0.5-1.2-1.2v-2.6	c0-1.1-0.7-1.2-0.9-1.2c-0.2,0-1.1,0-1.1,1.2v2.6c0,0.7-0.5,1.2-1.2,1.2h-0.1c-0.7,0-1.2-0.5-1.2-1.2v-4.5c0-0.7,0.6-1.3,1.3-1.3	s1.3,0.6,1.3,1.3c0,0,0.3-1.3,2.2-1.3c1.2,0,2.2,1,2.2,3.2V15.8z"></path>
              </svg>
            </div>
          </a>
        </div>
        <div className="footer-contact-us">
          <div className="footer-contacts-label hidden-element">Contact us | info@apriori.anovamuj.com</div>
        </div>
        <div className="footer-copyright hidden-element">Copyright&copy; 2023</div>
        <div className="footer-developed-by">
          <div>
            Developed with{" "}
            <span className="footer-heart" onClick={handleDevelopedByEnable}>
              🩷
            </span>{" "}
            by Kunal
          </div>
          <div className="developed-by-backdrop" onClick={handleDevelopedByDisable}></div>
          <div className="developed-by-card">
            <div className="develoepd-by-picture">
              <img src={DevelopedByImg} alt="Developer Picture" className="developed-by-img" />
            </div>
            <div className="developed-by-name">Kunal Yadav</div>
            <div className="developed-by-about">Passionate developer crafting digital experiences with a blend of creativity and precision. Proficient in various technologies, I transform ideas into elegant code.</div>
            <div className="developed-by-socials">
              <div className="developed-by-instagram">
                <a href="https://www.instagram.com/i1sm3ky/" target="_blank" className="link-anchor-tag link-anchor-tag-instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 30 30" fill="currentColor">
                    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                  </svg>
                </a>
              </div>
              <div className="developed-by-linkedin">
                <a href="https://linkedin.com/in/-kunalyadav" target="_blank" className="link-anchor-tag link-anchor-tag-linkedin">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9,15.7C9,16.4,8.4,17,7.7,17	c-0.7,0-1.3-0.6-1.3-1.3v-4.5C6.5,10.6,7,10,7.7,10C8.4,10,9,10.6,9,11.3V15.7z M7.7,8.7c-0.8,0-1.3-0.5-1.3-1.2	c0-0.7,0.5-1.2,1.4-1.2c0.8,0,1.3,0.5,1.3,1.2C9.1,8.2,8.6,8.7,7.7,8.7z M18,15.8c0,0.7-0.5,1.2-1.2,1.2s-1.2-0.5-1.2-1.2v-2.6	c0-1.1-0.7-1.2-0.9-1.2c-0.2,0-1.1,0-1.1,1.2v2.6c0,0.7-0.5,1.2-1.2,1.2h-0.1c-0.7,0-1.2-0.5-1.2-1.2v-4.5c0-0.7,0.6-1.3,1.3-1.3	s1.3,0.6,1.3,1.3c0,0,0.3-1.3,2.2-1.3c1.2,0,2.2,1,2.2,3.2V15.8z"></path>
                  </svg>
                </a>
              </div>
              <div className="developed-by-github">
                <a href="https://github.com/i1sm3ky" target="_blank" className="link-anchor-tag link-anchor-tag-github">
                  <svg className="developed-by-github-svg" width="90%" height="90%" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="currentColor">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <div className="developed-by-hint">
              <a href="" className="link-anchor-tag-hint">
                Looking for something?
              </a>
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <script src="https://cdn.jsdelivr.net/gh/AnovaMuj/AprioriWebsite/src/CommonElements/FooterScrollScript.js" type="module" />
      </Helmet>
    </>
  );
}

export default Footer;
