// HOME SWIPER

var swiper = new Swiper(".home-swiper", {
    spaceBetween: 85,
    autoplay: {
    delay: 7000,
    disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//HOME IMAGE SWIPER
var swiper = new Swiper(".header-swiper", {
  spaceBetween: 85,
  autoplay: {
    delay: 2000,
   disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});