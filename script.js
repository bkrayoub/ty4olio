// GSAP ScrollTrigger for horizontal scrolling
const sliders = document.querySelectorAll('.slider');
const inner4 = document.getElementById('inner4');
var canScroll = true

if(canScroll) {
    sliders.forEach((slider) => {
        let tl = gsap.timeline({
            default: {
                ease: "none"
            },
            scrollTrigger: {
                trigger: slider,
                pin: true,
                scrub: 2,
                end: () => "+=" + slider.offsetWidth
            }
        });
    
        tl.to(slider, {
            xPercent: -85
        });
    });
    
    // Smooth scroll using Lenis
    const lenis = new Lenis();
    
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
}



const stars = document.querySelectorAll('.star');

// Set initial positions randomly along the x-axis without scroll dependency
stars.forEach((star) => {
    gsap.set(star, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 360,
    });
});

// Function to update star positions based on scroll
function updateStars() {
    
    const scrollTop = window.scrollY;

    stars.forEach((star) => {
        const speed = 1; // Adjust the divisor to control speed
        const xPos = -(scrollTop * speed);

        gsap.to(star, {
            x: xPos,
            ease: 'none',
            xPercent: 2000
        });
    });
}
scrollingTimer = 0
window.addEventListener('scroll', function() {
    // Clear the previous timer
    clearTimeout(scrollingTimer);

    // Set a new timer
    scrollingTimer = setTimeout(function() {
        console.log('Scrolling has stopped');
        
    }, 200);  // Adjust the timeout value based on your needs
});
updateStars();

window.addEventListener('scroll', updateStars);

// Initial update when the page loads


function startHoldTimer() {
    holdTimer = setTimeout(() => {
        
    }, 3000); // Adjust the duration (in milliseconds) as needed
  }



  let pageWidth = document.documentElement.scrollWidth;
  let vpw = document.documentElement.clientWidth

console.log(pageWidth)
window.onscroll = function () {
    let indicatorFiller = document.getElementById('indicatorFiller');
    let persnetageScrolled = (scrollY / pageWidth) * 100 / 6 + 10;
    console.log(persnetageScrolled);
    indicatorFiller.style.width = persnetageScrolled - 5  + '%';
}