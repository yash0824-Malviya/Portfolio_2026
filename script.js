/* Toggle Icon Navbar */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

/* Scroll Sections Active Link */
let sections = document.querySelectorAll('section');
let navLinksItems = document.querySelectorAll('.nav-links a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinksItems.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.nav-links a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* Sticky Navbar */
    let header = document.querySelector('.navbar');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Close navbar when clicking link (mobile) */
    navLinks.classList.remove('active');
};

/* Typed JS */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'UI/UX Designer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* Scroll Reveal (Optional - can be added later) */
// ScrollReveal({ 
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
// ...
