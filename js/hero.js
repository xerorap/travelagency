let slideIndex = 0; // Start from the first slide
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlides() {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.classList.remove('next');
    });

    // Calculate next slide index
    slideIndex++;
    if (slideIndex > slides.length - 1) {
        slideIndex = 0; // Reset to first slide if at the end
    }

    // Show the current slide and next slide
    slides[slideIndex].classList.add('active');

    // Set the next slide class for animation
    const nextSlideIndex = (slideIndex + 1) % slides.length;
    slides[nextSlideIndex].classList.add('next');

    // Change slide every 5 seconds
    setTimeout(showSlides, 5000); // Adjust time (in ms) as needed
}

// Initial call to display the first slide
showSlides();
