document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();


    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Initialize icons (replace with your preferred icon library initialization)
    initializeIcons();
});

// Function to handle registration
function registerNow() {
    window.location.href = 'https://sites.google.com/view/your-registration-page';
}

// Function to initialize icons (replace with your preferred icon library)
function initializeIcons() {
    // This is a placeholder function. Replace with actual icon library initialization.
    console.log('Icons initialized');
}