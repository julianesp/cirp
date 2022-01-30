function inicio() {
    location.href = "../index.html"
}

function documentos() {
    location.href = "../html/documentos.html"
}

function nosotros() {
    location.href = "../html/nosotros.html"
}

//code to manu burguer
const header = document.querySelector('.header');
const burgerMenu = document.querySelector('#burger-menu');

burgerMenu.addEventListener('click', hideShow);

function hideShow() {
    if (header.classList.contains('is-active')) {
        header.classList.remove('is-active');

    } else {
        header.classList.add('is-active');
    }
}