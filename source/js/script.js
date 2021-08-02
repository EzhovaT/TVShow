$(document).ready(function () {
  $(".trending-slider").slick({
    prevArrow: '',
    nextArrow: '<button class="slider-btn"></button>',
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  });
  $(".popular-slider").slick({
    prevArrow: '',
    nextArrow: '<button class="slider-btn"></button>',
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
        },
      },
    ],
  });
});

const menu = document.querySelector(".main-nav"),
  menuBtn = document.querySelector(".main-nav__btn");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("main-nav_closed");
});
