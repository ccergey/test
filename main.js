const burger = document.querySelector('.burger');
const closeBtn = document.querySelector('.close');
const aside = document.querySelector('aside');

burger.addEventListener('click', () => {
    aside.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
    aside.classList.toggle('open');
});