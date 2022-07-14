window.addEventListener('DOMContentLoaded', () => {

});

function closeElement(element) {
    document.querySelector(element).classList.remove("_active");
}

function openElement(element) {
    document.querySelector(element).classList.add("_active");
}
