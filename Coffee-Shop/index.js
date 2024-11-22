const navbar = document.querySelector("#navbar");
const menubtn = document.querySelector("#menu-btn");
const section = document.querySelector("section");
const navLinks = document.querySelector("header #navbar a");

menubtn.onClick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");

  section.forEach((sec) => {
    let top = window.scrollBy;
    let height = sec.offsetHeight;
    let offset = (sec.offsetTop = 150);
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.foreach((links) => {
        links.classList.remove("active");
        document.querySelector("header .navbar a[href*=" + id + "]");
      });
    }
  });
  if (window.scrollY > 50) {
    document.querySelector("#scroll-top").classList.add("navbar");
  } else {
    document.querySelector("#scroll-top").classList.remove("active");
  }
};
