var slideIndex = 1;
showSlides(slideIndex);
// next/previous controls
function plusSlides(n){
    showSlides(slideIndex += n);
}
// images control
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slide");
    var dot = document.getElementsByClassName("dot");
    if (n > slides.length){
        slideIndex = 1
    }
    if (n < 1){
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    for (i=0; i < dot.length; i++){
        dot[i].className = dot[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display ="block";
    dot[slideIndex-1].className += "active";
}
