let icon = document.querySelector(".icon");
let btnHumberger = document.querySelector(".btn-humburger");
let navbarNav = document.querySelector(".menu");

btnHumberger.addEventListener("click", () => {
  btnHumberger.classList.toggle("active");
  navbarNav.classList.toggle("menuBackground");
});

// Popup

let popup = document.getElementById('popup')
let popupBtn = document.getElementById("popupBtn");

popupBtn.addEventListener('click', () => {
  popup.style.display='none'
})