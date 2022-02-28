const mainMenu = document.querySelector(".main__menu");
const mainItems = document.querySelectorAll(".main__item");
const cube = document.querySelector(".main__menu-logo");
const cubeFront = document.querySelector(".menu-logo_pick");
const cubeBottom = document.querySelector(".menu-arrow_up");

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
  } else if (window.pageYOffset < window.pageYOffset + coords.top) {
    cube.classList.remove("scroll");
  }
});

cube.addEventListener("click", function (event) {
  if (event.target != cubeBottom) return;
  alert("hi");
});
