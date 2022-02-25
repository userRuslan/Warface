const sliderTrack = document.querySelector(".slider-track");
const prevButton = document.querySelector(".btn-prev");
const nextButton = document.querySelector(".btn-next");
const sliderDots = document.querySelectorAll(".slider-dot");
const sliderWidth = document.querySelector(".slider-track img");
const sliderContainer = document.querySelector(".slider-container");

let position = 0;
let dotIndex = 0;

const nextSlide = () => {
  if (position < (sliderDots.length - 1) * sliderWidth.clientWidth) {
    position += sliderWidth.clientWidth;
    dotIndex++;
  } else {
    position = 0;
    dotIndex = 0;
  }

  sliderTrack.style.left = -position + "px";
  thisSlide(dotIndex);
};

const prevSlide = () => {
  if (position > 0) {
    position -= sliderWidth.clientWidth;
    dotIndex--;
  } else {
    position = (sliderDots.length - 1) * sliderWidth.clientWidth;
    dotIndex = sliderDots.length - 1;
  }

  sliderTrack.style.left = -position + "px";
  thisSlide(dotIndex);
};

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    position = sliderWidth.clientWidth * index;
    sliderTrack.style.left = -position + "px";
    dotIndex = index;
    thisSlide(dotIndex);
  });
});

const thisSlide = (index) => {
  for (let dot of sliderDots) {
    dot.classList.remove("active");
  }
  sliderDots[index].classList.add("active");
};

setInterval(nextSlide, 5000);

sliderContainer.addEventListener("mouseover", function () {
  prevButton.style.left = 0;
  nextButton.style.right = 0;
});

sliderContainer.addEventListener("mouseout", function () {
  prevButton.style.left = "";
  nextButton.style.right = "";
});

window.addEventListener("resize", function () {
  nextSlide();
});
