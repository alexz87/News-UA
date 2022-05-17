var main = document.querySelector('.main');
var menu = document.querySelector('.menu');
var btn = false;
const pageHeight = document.documentElement.scrollHeight;
menu.style.height = pageHeight + 'px';

function showMenu() {

    if (!btn) {
        main.style.width = '80%';
        btn = true;
    } else {
        main.style.width = '100%';
        btn = false;
    }
    
}