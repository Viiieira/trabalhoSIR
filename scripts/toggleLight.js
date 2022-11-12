const toggle = document.getElementById('toggleLight');
const body = document.querySelector('body');

toggle.addEventListener('click', function() {
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')) {
        console.log('Removed Class Light Mode');
        body.classList.remove('light-mode');
    } else {
        console.log('Added Class Light Mode');
        body.classList.add('light-mode');
    }
})