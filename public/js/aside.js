document.querySelector(".show__hidden").addEventListener("click", (e) => {
  document.querySelector(".hidden__list").classList.toggle("active")
  document.querySelector(".show__hidden").classList.toggle("active")
})
document.querySelector(".show__hidden__rdv").addEventListener("click", (e) => {
  document.querySelector(".hidden__list__rdv").classList.toggle("active")
  document.querySelector(".show__hidden__rdv").classList.toggle("active")
})
