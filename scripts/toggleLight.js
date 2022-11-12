// Variables
const body = document.querySelector('body');
const toggle = document.getElementById('toggleLight');

// Function to switch the theme between dark and light
toggle.addEventListener('click', function() {
    // this.classList.toggle('fa-moon');
    // if(this.classList.toggle('fa-sun')) {
    //     body.classList.remove('light-mode');
    //     localStorage.removeItem('themeSwitch');
    // } else {
    //     body.classList.add('light-mode');
    //     localStorage.setItem('themeSwitch', 'light');
    // }
    if(body.classList.contains('light-theme') === false) {
        this.classList.toggle('fa-moon');
        if(this.classList.toggle('fa-sun')) {
            body.classList.remove('light-mode');
            localStorage.removeItem('themeSwitch');
        } else {
            body.classList.add('light-mode');
            localStorage.setItem('themeSwitch', 'light');
        }
    }
})