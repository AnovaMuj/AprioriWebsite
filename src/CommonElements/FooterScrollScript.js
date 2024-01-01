const footer = document.querySelector(".footer");
const footerCoverLeft = document.querySelector(".footer-cover-left-img");
const footerCoverRight = document.querySelector(".footer-cover-right-img");
const footerCoverCenterLeft = document.querySelector(".footer-cover-center-left-img");
const footerCoverCenterRight = document.querySelector(".footer-cover-center-right-img");

window.addEventListener("scroll", (e) => {
  if (footer.offsetTop <= window.scrollY - document.body.clientTop + window.innerHeight) {
    footerCoverLeft.classList.add("move-footer-left");
    footerCoverRight.classList.add("move-footer-right");
    footerCoverCenterLeft.classList.add("move-footer-center-left");
    footerCoverCenterRight.classList.add("move-footer-center-right");
  } else {
    footerCoverLeft.classList.remove("move-footer-left");
    footerCoverRight.classList.remove("move-footer-right");
    footerCoverCenterLeft.classList.remove("move-footer-center-left");
    footerCoverCenterRight.classList.remove("move-footer-center-right");
  }
});
