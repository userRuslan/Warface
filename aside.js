const linksAsideList = document.querySelectorAll(".list-fixed__list a");

const asideList = Array.from(linksAsideList);

function everyN(array, n) {
  const secondsLinks = array.filter((item, index) => !((index + 1) % n));
  secondsLinks.forEach((item) => {
    item.style.backgroundColor = "#262b2f";
  });
}

everyN(asideList, 2);
