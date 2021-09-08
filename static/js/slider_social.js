let slideIndex = 0;
let slides = document.getElementsByClassName("item");
let corusel_right = document.querySelector('.carousel__right');
let corusel_left = document.querySelector('.carousel__left')

showSlides(slideIndex);
corusel_left.setAttribute('id','test')
function plusSlide() {
   
    if(slideIndex === slides.length - 1 ) return
    if(slideIndex === 0 ) corusel_left.removeAttribute('id')
    slideIndex++
    if(slideIndex === slides.length - 1 ) corusel_right.id = 'test'
    showSlides(slideIndex)
}

function minusSlide() {
    if(slideIndex === 0 ) return
    if(slideIndex === slides.length - 1) corusel_right.removeAttribute('id')
    slideIndex--
    if(slideIndex === 0 ) corusel_left.id = 'test'
    showSlides(slideIndex)
}

function showSlides(n) {
    let dots = document.getElementsByClassName("slider-dots_item");

    // SLIDES: display none
    for (let q = 0; q < slides.length; q++) {
        slides[q].style.display = "none";
    } 
    // DOTS: remove active
    for (let q = 0; q < dots.length; q++) {
        dots[q].classList.remove('active')
    }

    // ADD SLIDE
    slides[n].style.display = "block";
    // ADD DOT
    dots[n].className += " active";
   
}

