const btnHamburger = document.querySelector('#btnHamburger');
const menu = document.querySelector('#menu');

btnHamburger.addEventListener('click', () => {
    if(btnHamburger.classList.contains('opened')){
        btnHamburger.classList.remove('opened')
    }
    else {
        btnHamburger.classList.add('opened')
    }
    if(menu.classList.contains('opened')){
        menu.classList.remove('opened')
    }
    else {
        menu.classList.add('opened')
    }
})