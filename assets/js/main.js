 var swiper2 = new Swiper(".mySwiper2", {
     spaceBetween: 10,
     slidesPerView: 4,
     freeMode: true,
     watchSlidesVisibility: true,
     watchSlidesProgress: true,
 });


 var swiper = new Swiper('.mySwiper', {
     // Optional parameters
     //  direction: 'vertical',
     loop: true,

     thumbs: {
         swiper: swiper2
     }

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },
//
//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//
//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
 });