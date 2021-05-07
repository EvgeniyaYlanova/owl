$(document).ready(function () {

   var swiper = new Swiper('.swiper-test', {
      loop: true, //для нескольких слайдеров 
      observer: true,//для нескольких слайдеров 
      slidesPerView: 1,
      spaceBetween: 30,
      // с какого слайда начинать
      //initialSlide: 1,
      //показать части первого и сл.слайда
      slidesPerView: 1.9,
      centeredSlides: true,
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },

      breakpoints: {
         320: {
            slidesPerView: 1,
            autoHeight: true,
         },
         480: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 1.5,
            spaceBetween: 1,
         },
         992: {
            slidesPerView: 3,
            slidesPerView: 1.7,
         },
      }
   });

   // модалка

   $('.popup-open').click(function () {
      $('.popup-fade').fadeIn();
      return false;
   });

   $('.popup-close').click(function () {
      $(this).parents('.popup-fade').fadeOut();
      return false;
   });

   $(document).keydown(function (e) {
      if (e.keyCode === 27) {
         e.stopPropagation();
         $('.popup-fade').fadeOut();
      }
   });

   $('.popup-fade').click(function (e) {
      if ($(e.target).closest('.popup').length == 0) {
         $(this).fadeOut();
      }
   });

   // слайдер в модалке
   var swiper_Sert = new Swiper('.swiper-container-2', {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
         nextEl: '.button-next-popup',
         prevEl: '.button-prew-popup',
      },
   });

   $(".certificate_bt").click(function () {
      swiper_Sert.update();
   });

   // ------------------Бургер меню

   $('.mob-on').click(function () {
      $(".header").toggleClass('show');
   });

   //---------------tab
   $(function () {

      $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
         $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });

   });

}); //конец jq

// Слайдер КНИГИ

var swiper_book = new Swiper(".mySwiperBook", {
   slidesPerView: 1,
   spaceBetween: 50,
   observer: true,
   // бесконечный слайдер
   loop: true,
   navigation: {
      nextEl: "#book_bt_next",
      prevEl: "#book_bt_prev",
   },

});


// esc  Корпоративное сопровождение слайдер
var swiperEsc = new Swiper(".mySwiperEsc", {
   slidesPerView: 3,
   spaceBetween: 30,
   loop: true,
   // для табов
   observeParents: true,
   observer: true,
   navigation: {
      nextEl: "#esc_bt_next",
      prevEl: "#esc_bt_prev",
   },
   breakpoints: {
      320: {
         slidesPerView: 3,
         direction: 'vertical',
         slidesPerColumn: 1,
         loop: false,
      },
      768: {
         direction: 'horizontal',
         slidesPerColumnFill: 'row',
         loop: true,
         spaceBetween: 30,
      },
      992: {
      },
   }
});

//Свайпер тренинг
var swiperTraining = new Swiper(".swiperTraining", {
   slidesPerView: 3,
   spaceBetween: 30,
   loop: true,
   FreeMode: true,
   // для табов
   observeParents: true,
   observer: true,
   navigation: {
      nextEl: "#training_bt_next",
      prevEl: "#training_bt_prev",
   },
   breakpoints: {
      320: {
         slidesPerView: 3,
         direction: 'vertical',
         slidesPerColumn: 1,
         loop: false,
      },
      768: {
         direction: 'horizontal',
         slidesPerColumnFill: 'row',
         loop: true,
         spaceBetween: 30,
      },
      992: {
      },
   }
});

//Свайпер Индивидуальные консультации

var swiperTraining = new Swiper(".swiper_consult", {
   slidesPerView: 3,
   spaceBetween: 30,
   // для 2строчного слайдера (с loop не работает)
   slidesPerColumnFill: 'row',
   slidesPerColumn: 2,
   FreeMode: true,
   // для многострочного слайдера
   observeParents: true,
   // для табов
   observer: true,
   navigation: {
      nextEl: "#consult_bt_next",
      prevEl: "#consult_bt_prev",
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      768: {
      },
      992: {
      },
   }

});

//Кнопки свайпер книги

const swiperPrevBook = document.getElementById('book_bt_prev');
const swiperNextBook = document.getElementById('book_bt_next');

swiperPrevBook.addEventListener('click', () => {
   mySwiperBook.slidePrev();
});
swiperNextBook.addEventListener('click', () => {
   mySwiperBook.slideNext();
});


//Кнопки свайпер эскорт 
const swiperPrevEsc = document.getElementById('esc_bt_prev');
const swiperNextESC = document.getElementById('esc_bt_next');

swiperPrevEsc.addEventListener('click', () => {
   mySwiperEsc.slidePrev();
});
swiperNextESC.addEventListener('click', () => {
   mySwiperEsc.slideNext();
});

// training кнопки

const swiperPrevTrain = document.getElementById('training_bt_prev');
const swiperNexTrain = document.getElementById('training_bt_next');

swiperPrevTrain.addEventListener('click', () => {
   swiperTraining.slidePrev();
});
swiperNexTrain.addEventListener('click', () => {
   swiperTraining.slideNext();
});

//Кнопки свайпер Индивидуальные консультации

const swiperPrevConsult = document.getElementById('consult_bt_prev');
const swiperNexTConsult = document.getElementById('consult_bt_next');

swiperPrevConsult.addEventListener('click', () => {
   swiper_consult.slidePrev();
});
swiperNexTConsult.addEventListener('click', () => {
   swiper_consult.slideNext();
});