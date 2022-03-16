const mobileBurgerContainer = document.querySelector(".main__mobile-menu");
const burgerMenu = document.querySelector(".header-mobile__burger");
const burgerMenuLink = document.querySelector(".mobile-menu__menu");
const burgerMenuArrow = document.querySelectorAll(".mobile-menu__ln");
const burgerMobileLink = document.querySelectorAll(".mobile-menu__ln");
const burgerMobileSubmenu = document.querySelectorAll(".mobile-menu__submenu");
const wrapper = document.querySelector(".wrapper");
const blackFullWindowMobile = document.querySelector(".mobile-window");

burgerMenu.addEventListener("click", function () {
  mobileBurgerContainer.classList.toggle("move");
  wrapper.classList.toggle("show");
  if (wrapper.classList.contains("show")) {
    wrapper.style.height = mobileBurgerContainer.offsetHeight + 100 + "px";
    wrapper.style.overflow = "hidden";
    blackFullWindowMobile.style.display = "block";
  } else {
    wrapper.style.height = "";
    wrapper.style.overflow = "";
    blackFullWindowMobile.style.display = "";
  }
});

burgerMobileLink.forEach((item, index) => {
  item.addEventListener("click", function () {
    burgerMobileSubmenu[index].classList.toggle("opened");
    burgerMenuArrow[index].classList.toggle("opn");
  });
});
