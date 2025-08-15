function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');
    
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark';
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('type-writer-text');
    const cursor = document.getElementById('cursor');
    const textArray = ["THE RIDGE REALTY GROUP", "PAHRUMP REALTOR"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = textArray[textIndex];
        if (!isDeleting) {
            // Typing
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        } else {
            // Deleting
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        }

        if (!isDeleting && charIndex === currentText.length) {
            // Done typing, start backspacing after a delay
            isDeleting = true;
            setTimeout(type, 1500);
        } else if (isDeleting && charIndex === 0) {
            // Done backspacing, move to the next word
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, 500);
        } else {
            const typingSpeed = isDeleting ? 50 : 100;
            setTimeout(type, typingSpeed);
        }
    }
    
    // Start the animation
    setTimeout(type, 1500);
});


// Data for the descriptions, matching the carousel slides
const descriptions = [
    {
        title: 'Top Residential Sales Last 5 Years',
        text: "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year."
    },
    {
        title: "Don't Just List It...",
        text: "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home."
    },
    {
        title: "Guide to Buyers",
        text: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!"
    }
];

// Get the carousel and description elements
const imageCarousel = document.getElementById('getItSoldImageCarousel');
const descriptionTitle = document.getElementById('description-title');
const descriptionText = document.getElementById('description-text');
const descriptionIndicator = document.getElementById('description-indicator');

// Add an event listener to the carousel
imageCarousel.addEventListener('slid.bs.carousel', function (e) {
    // Get the index of the newly active slide
    const activeIndex = e.to;

    // Update the description text based on the active index
    descriptionTitle.textContent = descriptions[activeIndex].title;
    descriptionText.textContent = descriptions[activeIndex].text;
});


document.addEventListener('DOMContentLoaded', function() {
    const logoItems = document.querySelectorAll('.logo-item');

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.5 // trigger when 50% of the item is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    logoItems.forEach(item => {
        observer.observe(item);
    });
});


// Photo Gallery JavaScript
function changeImage(src, element) {
    const mainImage = document.getElementById('main-gallery-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Remove active class from all thumbnails
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));

    // Add active class to the clicked thumbnail
    element.classList.add('active');

    // Fade out the old image, change src, then fade it back in
    mainImage.style.opacity = 0;
    setTimeout(() => {
        mainImage.src = src;
        mainImage.style.opacity = 1;
    }, 300); // Wait for 300ms for the fade-out transition
}

// Intersection Observer for the photo gallery thumbnails
document.addEventListener('DOMContentLoaded', function() {
    const galleryThumbnails = document.querySelectorAll('.thumbnail-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    galleryThumbnails.forEach(item => {
        observer.observe(item);
    });
});


// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const hero = document.getElementById('hero-section');
    let scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
});


document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.search-form-alt2');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            // This line prevents the form from submitting and the page from refreshing
            event.preventDefault();
            console.log("Search button clicked, but form submission was prevented.");
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.contact-alt2');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            // This line prevents the form from submitting and the page from refreshing
            event.preventDefault();
            console.log("Search button clicked, but form submission was prevented.");
        });
    }
});