window.addEventListener('DOMContentLoaded', () => {
  //   // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');
  $('.input-date').mask('99/99/9999');

  // * ===== Nice Select
  $('select').niceSelect();
  // $('select').niceSelect();

  tippy('.form-submit__tooltip', {
    content: `
      <b>Как узнать ваш ID:</b> <br />
      1. Подключитесь к Боту - см. Шаг №1 на странице сайта «Как это
      работает»<br />
      2. В стартовом сообщении Бот сообщит вам ID <br />
    `,
    allowHTML: true,
  });

  (function scrolAnchor() {
    $('.anchor').on('click', function () {
      let href = $(this).attr('href');

      $('html, body').animate(
        {
          scrollTop: $(href).offset().top,
        },
        {
          duration: 1000, 
          easing: 'linear', 
        }
      );

      return false;
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.calc-form__slider');

    sliderEl.forEach((slider) => {
      if (slider) {
        new Swiper(slider, {
          slidesPerView: 'auto',
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }
    });
  })();

  (function showFormBottom() {
    const parent = document.querySelectorAll('.calc__content');

    parent.forEach((content) => {
      content.addEventListener('click', (e) => {
        if (e.target.classList.contains('calc-income')) {
          content.querySelector('.form-bottom').style.display = 'block';
        }
      });
    });
  })();

  //   // * ===== Slider
  //   (function slider() {
  //     const sliderEl = document.querySelector('.price-list-top__slider');
  //     new Swiper(sliderEl, {
  //       slidesPerView: 'auto',
  //       centeredSlides: true,
  //       slideToClickedSlide: true,
  //       initialSlide: 4,
  //       spaceBetween: 20,
  //       navigation: {
  //         nextEl: '.price-list-top__slider .swiper-button-next',
  //         prevEl: '.price-list-top__slider .swiper-button-prev',
  //       },
  //     });
  //   })();

  //   // * ===== Fixed Header
  //   (function fixedHeader() {
  //     function scrollHeader() {
  //       const nav = document.querySelector('header');
  //       if (this.scrollY >= 90) {
  //         nav.classList.add('scroll-header');
  //       } else {
  //         nav.classList.remove('scroll-header');
  //       }
  //     }

  //     window.addEventListener('scroll', scrollHeader);

  //     // ! Change
  //     function changeBg() {
  //       const header = document.querySelector('header');
  //       if (window.pageYOffset >= 90) {
  //         header.classList.add('scroll-header');
  //       }
  //     }

  //     changeBg();
  //   })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');

    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });

    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });

    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  //   // * ===== Modal
  //   (function modals() {
  //     function bindModal(openBtn, modal, close) {
  //       const openBtnEl = document.querySelectorAll(openBtn);
  //       const modalEl = document.querySelector(modal);
  //       const closeEl = document.querySelectorAll(close);
  //       const body = document.querySelector('body');
  //       if (modalEl) {
  //         openBtnEl.forEach((el) => {
  //           el.addEventListener('click', (e) => {
  //             if (e.target) {
  //               e.preventDefault();
  //             }
  //             modalEl.classList.add('active');
  //             body.classList.add('no-scroll');
  //           });
  //         });
  //         closeEl.forEach((btn) => {
  //           btn.addEventListener('click', (e) => {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           });
  //         });
  //         modalEl.addEventListener('click', (e) => {
  //           if (e.target === modalEl) {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           }
  //         });
  //       }
  //     }
  //     bindModal('.online-booking-btn', '.popup--online-booking', '.popup__close');
  //   })();

  // * ===== Range Slider
  (function handlesSlider() {
    const parent = document.querySelector('.range-slider--guarantees');

    if (parent) {
      const rangeSlider = parent.querySelector('.range-slider__range');
      const rangeSliderValue = parent.querySelector('.range-slider__value');

      noUiSlider.create(rangeSlider, {
        start: [2970],
        connect: [true, false],
        range: {
          min: [0],
          max: [100000],
        },
        format: wNumb({
          decimals: 0,
          thousand: ' ',
          suffix: ' ',
        }),
      });

      rangeSlider.noUiSlider.on('update', function (values, handle) {
        rangeSliderValue.value = values[handle];
      });
    }
  })();

  // * ===== Range Slider
  (function handlesSlider() {
    const parent = document.querySelector('.range-slider--loans');

    if (parent) {
      const rangeSlider = parent.querySelector('.range-slider__range');
      const rangeSliderValue = parent.querySelector('.range-slider__value');

      noUiSlider.create(rangeSlider, {
        start: [2970],
        connect: [true, false],
        range: {
          min: [0],
          max: [100000],
        },
        format: wNumb({
          decimals: 0,
          thousand: ' ',
          suffix: ' ',
        }),
      });

      rangeSlider.noUiSlider.on('update', function (values, handle) {
        rangeSliderValue.value = values[handle];
      });
    }
  })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    header.forEach((el) => {
      if (el) {
        hideTabContent();
        showTabContent();
        function hideTabContent() {
          content.forEach((item) => {
            item.classList.remove('active');
          });
          tab.forEach((item) => {
            item.classList.remove(activeClass);
          });
        }
        function showTabContent(i = 0) {
          content[i].classList.add('active');
          tab[i].classList.add(activeClass);
        }
        header.forEach((item) => {
          if (item) {
            item.addEventListener('click', (e) => {
              const target = e.target;
              if (target.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, i) => {
                  if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  someTabs('.tabs', '.tabs-btn', '.tabs-content', 'active');
  someTabs('.calc-tab', '.calc-tab-btn', '.calc-tab-content', 'active');
});
