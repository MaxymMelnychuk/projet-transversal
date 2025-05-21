
/*  DARKMODE  SELECTION  */
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('darkmode-toggle')
const burger = document.querySelector(".burger")
const menu = document.querySelector(".nav-menu")
const active = document.querySelector(".active2")
let tab = document.querySelectorAll(".tab"); // Selectionner tabs et contenus    //
let div = document.querySelectorAll(".none");
const numbers = document.querySelectorAll(".stat");

/* TEMPLATE DARKMODE */

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
   
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
   
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

/* TEMPLATE DYSLEXIE */

const dyslexieSwitch = document.getElementById('dyslexie-toggle')
let dyslexie = localStorage.getItem('dyslexie')

const enableDyslexie = () => {
  document.body.classList.add('dyslexie')
  localStorage.setItem('dyslexie', 'active')
 
}

const disableDyslexie = () => {
  document.body.classList.remove('dyslexie')
  localStorage.setItem('dyslexie', null)
 
}

if(dyslexie === "active") enableDyslexie()

  dyslexieSwitch.addEventListener("click", () => {
      dyslexie = localStorage.getItem('dyslexie')
      dyslexie !== "active" ? enableDyslexie() : disableDyslexie()
  })



/* ouverture nav menu */

burger.addEventListener("click", () => {
    menu.classList.toggle("active2")
    burger.classList.toggle("active");
})