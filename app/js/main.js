$(function() {
   $('.slider__line').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 700,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 460,
            settings: {
               slidesToShow: 1
            }
         }

      ]
});
});

const popupLinks = document.querySelectorAll('.popup-link');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const body = document.querySelector('body');
const btn = document.querySelector('.popup__content .form__button');

popupLinks.forEach((link) => {
   link.addEventListener('click', function () {
      popup.classList.add('open');
      body.classList.add('lock');
   });
});

popupClose.addEventListener('click', function (e) {
   e.preventDefault();
   popup.classList.remove('open');
   body.classList.remove('lock');
});

document.addEventListener('keydown', function (e) {
   if (e.code === 'Escape') {
      popup.classList.remove('open');
      body.classList.remove('lock');
      
   }
});

btn.addEventListener('click', function() {
   popup.classList.remove('open');
   body.classList.remove('lock');
})