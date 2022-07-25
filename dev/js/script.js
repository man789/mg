let opt_1 = document.querySelector('.advantage__container__option--1');
let opt_2 = document.querySelector('.advantage__container__option--2');
let opt_3 = document.querySelector('.advantage__container__option--3');
let img_1 = document.querySelector('.advantage__container__option--1--img');
let img_2 = document.querySelector('.advantage__container__option--2--img');
let img_3 = document.querySelector('.advantage__container__option--3--img');
let subNav = document.querySelector('.link-sub');
let subContainer = document.querySelector('.sub-container');
let linkMenu = document.querySelectorAll('.link__menu');
let linkMenuClicked = document.querySelectorAll('.menu__content__models--link');
let imgMenu = document.querySelector('.image-test');
let menuContent = document.querySelector('.menu__content');
let menuContentModels = document.querySelector('.menu__content__models');
let secondNav = document.querySelector('.menu');
let burgerOpen = document.querySelector('.main__nav__utility__burger');
let burgerClose = document.querySelector('.menu__close__btn');
let burger = document.querySelector('.burger__nav');
let menu = document.querySelector('.main__nav__links');

// Responsive Menu
burgerOpen.addEventListener('click', () => {
  menuContent.style.display = 'block';
  secondNav.style.display = 'block';
});

burgerClose.addEventListener('click', () => {
  menuContent.style.display = 'none';
  secondNav.style.display = 'none';
  imgMenu.innerHTML = `<img src="img/header.png" alt="Background image">`;
  for (let i = 0; i < linkMenu.length; i++) {
    linkMenu[i].classList.remove('link__menu--active');
  };
  for (let j = 0; j < linkMenuClicked.length; j++) {
    linkMenuClicked[j].classList.remove('active-menu');
  };
  menuContentModels.style.display = 'none';
});

// Active link Menu
for (let i = 0; i < linkMenu.length; i++) {
  linkMenu[i].addEventListener('click', () =>{
    for (let index = 0; index < linkMenu.length; index++) {
      linkMenu[index].classList.remove('link__menu--active');
    }
    linkMenu[i].classList.toggle('link__menu--active');
    if (linkMenu[i] == linkMenu[0]) {
      menuContentModels.style.display = 'flex';
    }else{
      menuContentModels.style.display = 'none';
    }
  });
}

// Active link Menu Clicked and Image Change
for (let i = 0; i < linkMenuClicked.length; i++) {
  linkMenuClicked[i].addEventListener('click', () =>{
    for (let index = 0; index < linkMenuClicked.length; index++) {
      linkMenuClicked[index].classList.remove('active-menu');
    }
    linkMenuClicked[i].classList.toggle('active-menu');
    switch(linkMenuClicked[i]) {
      case linkMenuClicked[0]:
        imgMenu.innerHTML = `<img src="img/bg-menu.png" alt="Background image">`;
        break;
      case linkMenuClicked[1]:
        imgMenu.innerHTML = `<img src="img/header.png" alt="Background image">`;
        break;
      default:
        imgMenu.innerHTML = `<img src="img/bg-menu.png" alt="Background image">`;
    }
  });
}

// Sub Menu
subNav.addEventListener('click', () =>{
  subContainer.classList.toggle('db');
});

// Section Image
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
    // when window width is >= 460px
    460: {
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