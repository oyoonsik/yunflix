// Swiper 초기화 스크립트
var swiper = new Swiper(".swiperDataArea .swiper", {
    breakpoints: {
        781: {
            slidesPerView: 5,
            spaceBetween: 18
        },
        1: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});