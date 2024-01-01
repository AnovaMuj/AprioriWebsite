const stickySection = document.querySelector(".major-events-sticky");

window.addEventListener("scroll", (e) => {
  transform(stickySection);
});

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector(".major-events-scroll-section");
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
  scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
}
