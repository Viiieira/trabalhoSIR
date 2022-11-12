// Variables
const body = document.querySelector('body');
const toggle = document.getElementById('toggleLight');

// Function to switch the theme between dark and light
toggle.addEventListener('click', function() {
    if(body.classList.contains("light-mode") === true) {
        this.classList.remove("fa-moon");
        this.classList.add("fa-sun");
        body.classList.remove("light-mode");
        localStorage.removeItem("themeSwitch");
    } else {
        this.classList.remove("fa-sun");
        this.classList.add("fa-moon");
        body.classList.add("light-mode");
        localStorage.setItem("themeSwitch", "light");
    }
})