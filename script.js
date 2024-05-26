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
}

window.onload = function() {
    // Default language
    setLanguage('en');
};

var icon = document.getElementById("switch");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./assets/sun.png";
    }
    else {
        icon.src = "./assets/moon.png";
    }
    
}

