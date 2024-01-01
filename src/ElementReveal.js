const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-element");
    } else {
      entry.target.classList.remove("reveal-element");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden-element");
hiddenElements.forEach((element) => observer.observe(element));
