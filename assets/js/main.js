window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#faqItems')?.addEventListener('click', function (event) {
        const target = event.target.closest('.faq__item');

        if (target) {
            closeElements('.faq__item');
            openElement(target);
        }
    });

    const swiper = new Swiper('.succes-slider .swiper-container', {
 /*        loop: true, */
        slidesPerView: 1,
        spaceBetween: 30,
        slideToClickedSlide: true,
        speed: 1500,
        /*         autoplay: {
                    delay: 3000,
                }, */

        watchSlidesProgress: true, //additional visible class for slides

        // pagination
        pagination: {
            el: '.succes-slider .succes-slider__tabs',
            bulletElement: 'li',
            clickable: true
        },

        // Navigation arrows
        /*         navigation: {
                    nextEl: '.succes-slider .succes-slider__nav-button--next',
                    prevEl: '.succes-slider .succes-slider__nav-button--prev',
                } */
    });
});

function closeElements(elements) {
    document.querySelectorAll(elements).forEach( element =>{
        element.classList.remove("_active");
    })
}

function openElement(element) {
    element.classList.add("_active");
}
