const mainMenu = document.querySelector(".main__menu");
const mainItems = document.querySelectorAll(".main__item");
const cube = document.querySelector(".main__menu-logo");
const cubeFront = document.querySelector(".menu-logo_pick");
const cubeBottom = document.querySelector(".menu-arrow_up");
const currentCube = document.querySelector(".cube");
const mainLogotip = document.querySelector(".main__item:last-child");
const mainBigElem = document.querySelector(".main__item:nth-last-child(2)");

cube.addEventListener("mouseover", function () {
  cubeBottom.style.transform = "rotatex(0deg)";
  cubeFront.style.transform = "rotatex(90deg)";
  cube.addEventListener("mouseout", function () {
    cubeBottom.style.transform = "";
    cubeFront.style.transform = "";
  });
});

document.addEventListener("scroll", function () {
  let coords = mainMenu.getBoundingClientRect();
  if (window.pageYOffset > coords.top + mainMenu.offsetTop) {
    cube.classList.add("scroll");
    mainBigElem.classList.add("run");
    mainLogotip.classList.add("run");
  } else if (window.pageYOffset < window.pageYOffset + coords.top) {
    cube.classList.remove("scroll");
    mainBigElem.classList.remove("run");
    mainLogotip.classList.remove("run");
  }
});

cube.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
