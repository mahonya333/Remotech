function closeElements(e){document.querySelectorAll(e).forEach(e=>{e.classList.remove("_active")})}function openElement(e){e.classList.add("_active")}window.addEventListener("DOMContentLoaded",()=>{document.querySelector("#faqItems")?.addEventListener("click",function(e){e=e.target.closest(".faq__item");e&&(closeElements(".faq__item"),openElement(e))});new Swiper(".succes-slider .swiper-container",{slidesPerView:1,spaceBetween:30,slideToClickedSlide:!0,speed:1500,watchSlidesProgress:!0,pagination:{el:".succes-slider .succes-slider__tabs",bulletElement:"li",clickable:!0}})});