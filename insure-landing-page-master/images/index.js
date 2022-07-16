const navToggle = document.getElementById("harmburger-menu")
const aside = document.querySelector("aside")

navToggle.addEventListener("click", function() {
  this.classList.toggle("harmburger-menu--active")
  aside.classList.toggle("aside-active")
  document.body.classList.toggle("body-active")
})
