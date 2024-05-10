let icon = document.querySelector(".icon");
let btnHumberger = document.querySelector(".btn-humburger");
let navbarNav = document.querySelector(".menu");

btnHumberger.addEventListener("click", () => {
  btnHumberger.classList.toggle("active");
  navbarNav.classList.toggle("menuBackground");
});
