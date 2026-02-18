const burger = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu-body');

burger.addEventListener('click', () => {
    document.documentElement.classList.toggle('open-menu'); 
});