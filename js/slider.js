var swiper = new Swiper(".slide-content", {
    slidesPerView: 11,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        300: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 4,
       },
        900: {
            slidesPerView: 5,
       },
       900: {
             slidesPerView: 6,
      },
       900: {
             slidesPerView: 7,
      },
       900: {
             slidesPerView: 8,
        },
        900: {
            slidesPerView: 9,
       },
       900: {
        slidesPerView: 10,
   },
   900: {
    slidesPerView: 11,
},
    },
  });

