const mainMenu = document.querySelector(".main__menu");
const mainItems = document.querySelectorAll(".main__item");
console.log(mainItems);

document.addEventListener("scroll", function () {
  let coord = mainMenu.getBoundingClientRect();
  if (window.pageYOffset > coord.top + mainMenu.offsetTop) {
  
}
});
