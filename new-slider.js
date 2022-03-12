const sliderLinear = document.querySelector(".slider-line");
const leftArrow = document.querySelector(".information-arrows__prev");
const rightArrow = document.querySelector(".information-arrows__next");
const videoContainer = document.querySelector(".courosel-video");
const sliders = document.querySelectorAll(".slider-line__item");

let positions = 0;

sliders.forEach((item) => {
  const arrow = document.createElement("span");
  arrow.classList.add("images-arrow");
  item.append(arrow);
});

videoContainer.addEventListener("mouseover", function () {
  leftArrow.style.left = 0;
  rightArrow.style.right = 0;
  videoContainer.addEventListener("mouseout", function () {
    leftArrow.style.left = "";
    rightArrow.style.right = "";
  });
});

const nextSlides = () => {
  if (positions < (sliders.length - 1) * sliderLinear.clientWidth) {
    positions += sliderLinear.clientWidth;
  } else {
    positions = 0;
  }
  sliderLinear.style.left = -positions + "px";
};

const prevSlides = () => {
  if (positions > 0) {
    positions -= sliderLinear.clientWidth;
  } else {
    positions = (sliders.length - 1) * sliderLinear.clientWidth;
  }
  sliderLinear.style.left = -positions + "px";
};

rightArrow.addEventListener("click", nextSlides);
leftArrow.addEventListener("click", prevSlides);

setInterval(nextSlides, 5000);

window.addEventListener("resize", function () {
  nextSlides();
});

// ==========================================================

const scrinshotsContainer = document.querySelector(".courosel-scrinshots");
const leftArrowScrin = document.querySelector(
  ".information-arrows__prev-scrinshot"
);
const rightArrowScrin = document.querySelector(
  ".information-arrows__next-scrinshot"
);
const slidersScrinshots = document.querySelectorAll(
  ".slider-line__item-scrinshot"
);

const sliderLinearScrinshot = document.querySelector(".slider-line__scrinshot");

scrinshotsContainer.addEventListener("mouseover", function () {
  leftArrowScrin.style.left = 0;
  rightArrowScrin.style.right = 0;
  scrinshotsContainer.addEventListener("mouseout", function () {
    leftArrowScrin.style.left = "";
    rightArrowScrin.style.right = "";
  });
});

const nextSlidesScrinshot = () => {
  if (
    positions <
    (slidersScrinshots.length - 1) * sliderLinearScrinshot.clientWidth
  ) {
    positions += sliderLinearScrinshot.clientWidth;
  } else {
    positions = 0;
  }
  sliderLinearScrinshot.style.left = -positions + "px";
};

const prevSlidesScrinshot = () => {
  if (positions > 0) {
    positions -= sliderLinearScrinshot.clientWidth;
  } else {
    positions =
      (slidersScrinshots.length - 1) * sliderLinearScrinshot.clientWidth;
  }
  sliderLinearScrinshot.style.left = -positions + "px";
};

rightArrowScrin.addEventListener("click", nextSlidesScrinshot);
leftArrowScrin.addEventListener("click", prevSlidesScrinshot);

setInterval(nextSlides, 5000);

window.addEventListener("resize", function () {
  nextSlidesScrinshot();
});

// ====================================================================================================

const wallpaperContainer = document.querySelector(".courosel-wallpaper");
const leftArrowWallpaper = document.querySelector(
  ".information-arrows__prev-wallpaper"
);
const rightArrowWallpaper = document.querySelector(
  ".information-arrows__next-wallpaper"
);
const slidersWallpaper = document.querySelectorAll(
  ".slider-line__item-wallpaper"
);

const sliderLinearWallpaper = document.querySelector(".slider-line__wallpaper");
console.log(sliderLinearWallpaper.clientWidth);

wallpaperContainer.addEventListener("mouseover", function () {
  leftArrowWallpaper.style.left = 0;
  rightArrowWallpaper.style.right = 0;
  wallpaperContainer.addEventListener("mouseout", function () {
    leftArrowWallpaper.style.left = "";
    rightArrowWallpaper.style.right = "";
  });
});

const nextSlideWallpaper = () => {
  if (
    positions <
    (slidersWallpaper.length - 1) * sliderLinearWallpaper.clientWidth
  ) {
    positions += sliderLinearWallpaper.clientWidth;
  } else {
    positions = 0;
  }
  sliderLinearWallpaper.style.left = -positions + "px";
};

const prevSlidesWallpaper = () => {
  if (positions > 0) {
    positions -= sliderLinearWallpaper.clientWidth;
  } else {
    positions =
      (slidersWallpaper.length - 1) * sliderLinearWallpaper.clientWidth;
  }
  sliderLinearWallpaper.style.left = -positions + "px";
};

rightArrowWallpaper.addEventListener("click", nextSlideWallpaper);
leftArrowWallpaper.addEventListener("click", prevSlidesWallpaper);

setInterval(nextSlides, 5000);

window.addEventListener("resize", function () {
  nextSlideWallpaper();
});

// ==================================================================

const sliderButtons = document.querySelectorAll(
  ".information-notice__slider-block .news-link"
);
const fullSliders = document.querySelectorAll(".information-notice__slider");

sliderButtons.forEach((item, index) => {
  item.addEventListener("click", () => {
    for (let currentButton of sliderButtons) {
      currentButton.classList.remove("slide-active");
    }
    item.classList.add("slide-active");
    Array.from(fullSliders);
    fullSliders.forEach((item) => {
      item.classList.remove("activeSliders");
    });
    fullSliders[index].classList.add("activeSliders");
  });
});
