const navbar = document.querySelector(".navbar");
const navbarOffset = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPrecents = [97, 90, 80, 87, 65, 70];

// adding it to window object because navbar needs to be controlled on scrolling
// offsetTop is distance of chosen element from top
// we need to do it because we compare initial posotion of page with Yoffset
window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffset) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  // if windows yset is greater or equal to section.topset then highlight section by applying "change" class to element
  // index(i)
  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });

  // this summed value should be equal to offsettop
  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll(".progress-percent").forEach((el, i) => {
      el.style.width = `${progressBarPrecents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
        progressBarPrecents[i];
    });
  }
};

mainFn();
