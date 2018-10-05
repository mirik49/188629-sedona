var btnOpen = document.querySelector(".main-nav__button-open");
var mainNav = document.querySelector(".main-nav");


btnOpen.addEventListener("click", function(evt){
  if(btnOpen.classList.contains("main-nav__button-open--close")){
    mainNav.classList.remove("main-nav-show");
    btnOpen.classList.remove("main-nav__button-open--close");
  }
  else {
    mainNav.classList.add("main-nav-show");
    btnOpen.classList.add("main-nav__button-open--close");
  }
});
