const slides = document.getElementsByClassName('carousel__item');
const slides_total = slides.length;

const nextButton = document.querySelector('#carousel__button--next');
const prevButton = document.querySelector('#carousel__button--prev');
let slidePos = 0;

nextButton.addEventListener('click', () => {

    for (let slide of slides){
        slide.classList.remove('carousel__item--visible');
    }

    if (slidePos === slides_total -1) {
        slidePos = 0;
    } else {
        slidePos++;
    }

    slides[slidePos].classList.add('carousel__item--visible');
});

prevButton.addEventListener('click', () => {
    for (let slide of slides){
        slide.classList.Remove('carousel__item--visible');
    }

    if (slidePos === 0) {
        slidePos = slides_total - 1;
    } else {
        slidePos--;
    }

    slides[slidePos].classList.add('carousel__item--visible');
});