window.onscroll = function() { stickyHeader() };

var header = document.getElementById("header");
var placeholder = document.getElementById("header-placeholder");
var sticky = header.offsetTop; // Get the offset position of the header

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky"); // Add the sticky class
        placeholder.style.display = 'block'; // Show the placeholder
    } else {
        header.classList.remove("sticky"); // Remove the sticky class
        placeholder.style.display = 'none'; // Hide the placeholder
    }
}
