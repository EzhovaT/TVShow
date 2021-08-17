//Slick slider

$(document).ready(function () {
  $(".trending-slider").slick({
    prevArrow: "",
    nextArrow: '<button class="slider-btn"></button>',
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 6,
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
          slidesToScroll: 4,
        },
      },
    ],
  });
  $(".popular-slider").slick({
    prevArrow: "",
    nextArrow: '<button class="slider-btn"></button>',
    infinite: true,
    speed: 1500,
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

///End jQuery Calls/


const page = document.querySelector(".page"),
  menu = document.querySelector(".main-nav"),
  menuBtn = document.querySelector(".main-nav__btn"),
  search_wrapper = document.querySelector(".user-panel__search-wrapper"),
  search_input = search_wrapper.querySelector(".input"),
  search_btn = search_wrapper.querySelector(".user-panel__btn-search"),
  button_link_play = document.querySelector(".button__link-play"),
  video_player = document.querySelector(".video-player"),
  preview_btn = document.querySelector(".preview__btn"),
  additional_description = document.querySelector(".preview__description_additional"),
  page_body = document.querySelector(".page");


//User's menu open

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("main-nav_closed");
});

//User's menu open search

search_btn.addEventListener("click", () => {
  search_wrapper.classList.toggle("user-panel__search-wrapper_active");
});

search_btn.addEventListener("mouseenter", () => {
  search_wrapper.classList.add("user-panel__search-wrapper_active");
});


//open more information

preview_btn.addEventListener("click", () => {
  additional_description.classList.remove("visually-hidden");
  preview_btn.remove();
})


//Video player operation

const isEscEvent = (event) => event.key === 'Escape' || event.key === 'Esc';

const onPlayerPopupEscKeydown = (event) => {
  if (isEscEvent(event)) {
    event.preventDefault();
    video_player.classList.add('visually-hidden');
    page_body.classList.remove("scroll-hidden");
    document.removeEventListener('keydown', onPlayerPopupEscKeydown);
  }
};

const closePlayerPopup = (event) => {
  if (event.target === video_player) {
    video_player.classList.add('visually-hidden');
    page_body.classList.remove("scroll-hidden");
    video_player.removeEventListener('click', closePlayerPopup);
  }
};

const openPlayerPopup = () => {
  video_player.classList.remove('visually-hidden');
  document.addEventListener('keydown', onPlayerPopupEscKeydown);
  video_player.addEventListener('click', closePlayerPopup);
  page_body.classList.add("scroll-hidden");
};

button_link_play.addEventListener("click", openPlayerPopup);