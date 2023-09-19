// Locomotive Js. =>

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// GSAP ANimation => 

var tl = gsap.timeline()

tl.to('.page1', {
    y: "100vh",
    scale: 0.6,
    duration: 0
})

tl.to('.page1', {
    y: "30vh",
    duration: 1,
    delay: 1
})

tl.to('.page1', {
    y: "0",
    rotate: -720,
    scale: 1,
    delay: 0.4,
    duration: 0.8
})



// JavaScript to display the warning message
window.addEventListener('DOMContentLoaded', () => {
    const warningMessage = document.getElementById('warningMessage');
    // document.body.style.backgroundColor = '#C4BCB2'

    function checkWidth() {
        if (window.innerWidth < 1300) {
            warningMessage.style.display = 'block';
        } else {
            warningMessage.style.display = 'none';
        }
    }

    // Initial check on page load
    checkWidth();

    // Check on window resize
    window.addEventListener('resize', checkWidth);
});
