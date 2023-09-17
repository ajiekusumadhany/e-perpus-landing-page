const menuMobile = document.querySelector(".menu-mobile input");
const nav = document.querySelector("nav ul");

menuMobile.addEventListener("click", function () {
  nav.classList.toggle("nyala");
});
