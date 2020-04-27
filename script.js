const closeButton = document.querySelector('.button-close-nav');
const nav = document.querySelector('.nav');
const openButton = document.querySelector('.button-open-nav');

closeButton.addEventListener("click", () => {
    nav.classList.remove('nav-open');
}); 

openButton.addEventListener("click", () => {
    nav.classList.add('nav-open');
}); 

