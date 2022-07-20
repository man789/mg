let opt_1 = document.querySelector('.advantage__container__option--1');
let opt_2 = document.querySelector('.advantage__container__option--2');
let opt_3 = document.querySelector('.advantage__container__option--3');
let img_1 = document.querySelector('.advantage__container__option--1--img');
let img_2 = document.querySelector('.advantage__container__option--2--img');
let img_3 = document.querySelector('.advantage__container__option--3--img');

opt_1.addEventListener('click', () =>{
  opt_1.classList.add('option--active');
  opt_2.classList.remove('option--active');
  opt_3.classList.remove('option--active');
  img_1.classList.add('img--active');
  img_2.classList.remove('img--active');
  img_3.classList.remove('img--active');
});
opt_2.addEventListener('click', () =>{
  opt_1.classList.remove('option--active');
  opt_2.classList.add('option--active');
  opt_3.classList.remove('option--active');
  img_1.classList.remove('img--active');
  img_2.classList.add('img--active');
  img_3.classList.remove('img--active');
});
opt_3.addEventListener('click', () =>{
  opt_1.classList.remove('option--active');
  opt_2.classList.remove('option--active');
  opt_3.classList.add('option--active');
  img_1.classList.remove('img--active');
  img_2.classList.remove('img--active');
  img_3.classList.add('img--active');
});

const swiper = new Swiper('.swiperCarousel', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 30,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },

});

const swiperBlog = new Swiper('.swiper-container', {
  slidesPerView: 3,
  watchSlidesProgress: true,
  loop:false,
   // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
    },
    // when window width is >= 900px
    900: {
      slidesPerView: 2,
    }
  }
});

const swiperSlider = new Swiper('.slider-swiper',{
  lopp: 'true',
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});