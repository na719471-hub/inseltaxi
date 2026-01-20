document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Popup Logic
    const popup = document.getElementById('popup-overlay');
    const closeBtn = document.getElementById('close-popup');

    if(popup && closeBtn) {
        closeBtn.addEventListener('click', function() {
            popup.style.display = 'none';
        });
    }

    // 2. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });
    }
});