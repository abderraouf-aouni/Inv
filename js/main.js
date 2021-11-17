
var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next.trillion",
        prevEl: ".swiper-button-prev.trillion",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper2 = new Swiper(".swiper-videos ", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next.videos",
        prevEl: ".swiper-button-prev.videos",
    },
    pagination: {
        el: ".pagination-videos",
        clickable: true,
    },
});

var swiper3 = new Swiper(".swiper-highlightes ", {
    spaceBetween: 30,
    pagination: {
        el: ".pagination-highlightes",
        clickable: true,
    },
});