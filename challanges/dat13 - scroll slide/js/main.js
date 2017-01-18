'use strict';

function init() {

    var sliderImages = document.querySelectorAll('img');

    function debounce(func) {
        var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
        var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function later() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    function checkSlide(e) {

        sliderImages.forEach(function (sliderImage) {

            var slideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
            var imageBottom = sliderImage.offsetTop + sliderImage.height;
            var isHalfShown = slideInAt > sliderImage.offsetTop;
            var isNotScrolledPast = window.scrollY < imageBottom;

            if (isHalfShown && isNotScrolledPast) {
                sliderImage.classList.add('active');
            } else {
                sliderImage.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', debounce(checkSlide));
}

window.init = init();