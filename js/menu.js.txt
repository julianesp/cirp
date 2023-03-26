//code to menu burguer
const header = document.querySelector(".header");
const burgerMenu = document.querySelector("#burger-menu");

burgerMenu.addEventListener('click', hideShow);

function hideShow() {
    if (header.classList.contains('is-active')) {
        header.classList.remove('is-active');
    } else {
        header.classList.add('is-active');
    }
}