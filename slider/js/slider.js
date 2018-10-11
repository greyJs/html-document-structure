'use strict';

const prev = document.querySelector('[data-action="prev"]');
const next = document.querySelector('[data-action="next"]');
const first = document.querySelector('[data-action="first"]');
const last = document.querySelector('[data-action="last"]');

const active = document.querySelector('li');
active.classList.add('slide-current');

prev.classList.add('disabled');
first.classList.add('disabled');



function sLiderList() {


    next.addEventListener('click', event => moveSlide(true));
    prev.addEventListener('click', event => moveSlide(false));
    last.addEventListener('click', event => moveChild(true));
    first.addEventListener('click', event => moveChild(false));


    function moveSlide(isForward) {

        let currentslide = document.querySelector('.slide-current');

        let activatedSlide = isForward ? currentslide.nextElementSibling : currentslide.previousElementSibling;

        currentslide.classList.remove('slide-current');
        activatedSlide.classList.add('slide-current');


        if (!activatedSlide.nextElementSibling) {
            next.classList.add('disabled');
            last.classList.add('disabled');
        } else {
            next.classList.remove('disabled');
            last.classList.remove('disabled');
        };
        if (activatedSlide.previousElementSibling) {
            prev.classList.remove('disabled');
            first.classList.remove('disabled');
        } else {
            prev.classList.add('disabled');
            first.classList.add('disabled');
        };
    }

    function moveChild(isForward) {

        let currentSlide = document.querySelector('.slide-current');
        let activatedSlide = isForward ? currentSlide.parentElement.lastElementChild : currentSlide.parentElement.firstElementChild;

        currentSlide.classList.remove('slide-current');
        activatedSlide.classList.add('slide-current');

        if (!activatedSlide.nextElementSibling) {
            next.classList.add('disabled');
            last.classList.add('disabled');
        } else {
            next.classList.remove('disabled');
            last.classList.remove('disabled');
        };
        if (activatedSlide.previousElementSibling) {
            prev.classList.remove('disabled');
            first.classList.remove('disabled');
        } else {
            prev.classList.add('disabled');
            first.classList.add('disabled');
        };
    }
}

const slider = document.querySelectorAll('.slider');
Array.from(slider).forEach(item => sLiderList(item));
