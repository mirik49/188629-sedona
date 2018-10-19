var btnOpen = document.querySelector(".main-nav__button-open");
var mainNav = document.querySelector(".main-nav__list");
var mainShow = document.querySelector(".site-list")


btnOpen.addEventListener("click", function(evt){
  if(btnOpen.classList.contains("main-nav__button-open--close")){
    mainNav.classList.add("site-list");
    mainNav.classList.remove("main-nav-show");
    btnOpen.classList.remove("main-nav__button-open--close");
  }
  else {
    mainNav.classList.add("main-nav-show");
    mainNav.classList.remove("site-list");
    btnOpen.classList.add("main-nav__button-open--close");
  }
});
