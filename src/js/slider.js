import Swiper from '../../node_modules/swiper/swiper-bundle';

const slider = document.querySelector('.swiper-container');

var swiper;

function mobileSlider() {
  if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
    swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
       el: '.swiper-pagination',
       type: 'bullets',
     },
   });

   slider.dataset.mobile = 'true';
   document.querySelector('.swiper-pagination').classList.remove('hidden');
  }

  if (window.innerWidth >= 768) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-initialized')) {
      swiper.destroy();
      document.querySelector('.swiper-pagination').classList.add('hidden');
    }
  }
}

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});

const sliderTwo = document.querySelector('.swiper-container-two');

var swiperTwo;

function mobileSliderTwo() {
  if (window.innerWidth < 768 && sliderTwo.dataset.mobile == 'false') {
    swiperTwo = new Swiper(sliderTwo, {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
       el: '.swiper-pagination',
       type: 'bullets',
     },
   });

   sliderTwo.dataset.mobile = 'true';
   document.querySelector('.gadgets .swiper-pagination').classList.remove('hidden');
  }

  if (window.innerWidth >= 768) {
    sliderTwo.dataset.mobile = 'false';

    if (sliderTwo.classList.contains('swiper-initialized')) {
      swiperTwo.destroy();
      document.querySelector('.gadgets .swiper-pagination').classList.add('hidden');
    }
  }
}

mobileSliderTwo();

window.addEventListener('resize', () => {
  mobileSliderTwo();
});


const sliderThree = document.querySelector('.swiper-container-three');

var swiperThree;

function mobileSliderThree() {
  if (window.innerWidth < 768 && sliderThree.dataset.mobile == 'false') {
    swiperThree = new Swiper(sliderThree, {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
       el: '.swiper-pagination',
       type: 'bullets',
     },
   });

   sliderThree.dataset.mobile = 'true';
   document.querySelector('.price .swiper-pagination').classList.remove('hidden');
  }

  if (window.innerWidth >= 768) {
    sliderThree.dataset.mobile = 'false';

    if (sliderThree.classList.contains('swiper-initialized')) {
      swiperThree.destroy();
      document.querySelector('.price .swiper-pagination').classList.add('hidden');
    }
  }
}

mobileSliderThree();

window.addEventListener('resize', () => {
  mobileSliderThree();
});