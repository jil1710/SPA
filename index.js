const toggleBtn = document.querySelector('.bars')
const togglelamp = document.querySelector('.toggle')
const light = document.querySelector('.light')
const symbol = document.querySelector('.sym')
const toggleIcon = document.querySelector('.bars i')
const tabs = document.querySelector('.__tabs')

// typing animation constructor call
var typing = new Typed(".text", {
    strings: ["", "Youtuber", "Freelancer", "Graphics Designer", "Web Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 40,
    loop: true,
});

// swiper js image slider
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


toggleBtn.onclick = function () {
    tabs.classList.toggle('open');
    const isOpen = tabs.classList.contains('open')
    toggleIcon.classList = isOpen ? 'fa fa-xmark fa-2x' : 'fa fa-bars fa-2x'
}

function toggleLamp() {
    togglelamp.classList.toggle('active')
    symbol.classList.toggle('on')
    light.classList.toggle('on1')
}

// scroll to particular section
function scrollHome(){
    location.href = '#home'
}

function scrollImages(){
    location.href = '#image-slider'
}
function scrollService(){
    location.href = '#services'
}

function scrollAboutUs(){
    location.href = '#aboutus'
}
