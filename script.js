function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

    
}

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        el.innerHTML = translations[lang][key] || el.innerHTML;
    });
}

function changeLanguage(lang) {
    setLanguage(lang);
    toggleDropdown();
}

function toggleDropdown() {
    const dropdownContent = document.getElementById('dropdownContent');
    dropdownContent.classList.toggle('show');
}

window.onload = function() {
    setLanguage('en');

    const dropdownButton = document.getElementById('dropdownButton');
    dropdownButton.addEventListener('click', toggleDropdown);

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn') && !event.target.matches('.world-icon')) {
            const dropdownContent = document.getElementById('dropdownContent');
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
};

var icon = document.getElementById("switch");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    
    // Toggle the icon image
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "./assets/sun.png";
    } else {
        icon.src = "./assets/moon.png";
    }
    
    // Toggle images for dark mode
    const images = document.querySelectorAll('.dark-mode-image');
    images.forEach(img => {
        if (document.body.classList.contains("dark-theme")) {
            img.src = img.getAttribute('data-dark');
        } else {
            img.src = img.getAttribute('data-original');
        }
    });
}

// Save the original src of the images on page load
window.onload = function() {
    const images = document.querySelectorAll('.dark-mode-image');
    images.forEach(img => {
        img.setAttribute('data-original', img.src);
    });

    // Check if dark mode was previously enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-theme');
        icon.src = "./assets/sun.png";
        images.forEach(img => {
            img.src = img.getAttribute('data-dark');
        });
    } else {
        icon.src = "./assets/moon.png";
    }
}

// Save dark mode preference in localStorage
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "./assets/sun.png";
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.src = "./assets/moon.png";
        localStorage.setItem('darkMode', 'disabled');
    }

    // Toggle images for dark mode
    const images = document.querySelectorAll('.dark-mode-image');
    images.forEach(img => {
        if (document.body.classList.contains("dark-theme")) {
            img.src = img.getAttribute('data-dark');
        } else {
            img.src = img.getAttribute('data-original');
        }
    });
}
