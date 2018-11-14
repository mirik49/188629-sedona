var btnClose = document.querySelector(".main-nav__button-open--close");
var mainNav = document.querySelector(".main-nav__list");

btnClose.addEventListener("click", function(evt){
  if(btnClose.classList.contains("main-nav__button-open")) {
    mainNav.classList.remove("site-list__hide");
    btnClose.classList.remove("main-nav__button-open");
}
else {
  mainNav.classList.add("site-list__hide");
  btnClose.classList.add("main-nav__button-open");
}
});
