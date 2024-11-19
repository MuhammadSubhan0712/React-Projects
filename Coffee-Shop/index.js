const navbar = document.querySelector(".navbar")
const menubtn = document.querySelector("#menu-btn");
const section = document.querySelector("section");
const navLinks = document.querySelector("header .navbar a");





menubtn.onClick = () =>{
navbar.classList.toggle('active')
}
window.onscroll = () =>{
    navbar.classList.remove 
}
