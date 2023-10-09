"use strict";

document.addEventListener('scroll',() => { 
    const sectionNav =  document.querySelector('.sectionNav');
    if(window.scrollY > 0) {
        sectionNav.classList.add('scrolled');
    } else {
        sectionNav.classList.remove('scrolled')
    }
})


document.addEventListener('scroll',() => { 
    const bookLink = document.querySelector('.bookLink');
    if(window.scrollY > 0) {
        bookLink.classList.add('scrolled');
    } else {
        bookLink.classList.remove('scrolled')
    }
})


function carousel() {
let carouselSlider = document.querySelector(".carouselSlider");
let list = document.querySelector(".carouselList");
let item = document.querySelectorAll(".carouselItem");
let list2;

const speed = 1;

const width = list.offsetWidth;
let x = 0;
let x2 = width;

function clone() {
    list2 = list.cloneNode(true);
    carouselSlider.appendChild(list2);
    list2.style.left = `${width}px`;

}

function moveFirst() {
    x-= speed;

    if (width >= Math.abs(x)) {
        list.style.left = `${x}px`
    } else {
        x = width;
    }
}

function moveSecond() {
    x2 -= speed;

    if (list2.offsetWidth >= Math.abs(x2)) {
        list2.style.left = `${x2}px`;
    } else {
        x2 = width;
    }

}

function hover(){
    clearInterval(a);
    clearInterval(b);
}

function unhover() {
    a = setInterval(moveFirst, 10);
    b = setInterval(moveSecond, 10);
}

clone();

let a = setInterval(moveFirst, 10);
let b = setInterval(moveSecond, 10);

carouselSlider.addEventListener("mouseenter", hover);
carouselSlider.addEventListener("mouseleave", unhover);
}

carousel();

const navEl = document.querySelector('.websiteNav');
const hamburgerEl = document.querySelector('.hamburger')

hamburgerEl.addEventListener("click", () => {navEl.classList.toggle("websiteNav--open");
});