
let slideIndex = 0;
showSlides();
function showSlides(){
    let i;
     let slides = document.getElementsByClassName('slide');
     for (i = 0; i < slides.length; i++){
         slides[i].style.display = 'none';
     }
     slideIndex++;
     if (slideIndex > slides.length)
         {slideIndex = 1}
     slides[slideIndex - 1].style.display = 'block';
     setTimeout(showSlides, 2000);
     }

var image = 1;
showImage(image)

function plusSlides(n){
    showImage(image += n);
}
function currentSlide(n){
    showImage(image = n);
}
function showImage(n){
    var i; 
    var images = document.getElementsByClassName('slide');
    var dots = document.getElementsByClassName('dot');
    if (n > images.length){
        image = 1
    }
    if (n < 1 ){image = images.length}
    for (i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className =
        dots[i].className.replace(" active", "");
    }
    images[image - 1].style.display = "block";
    dots[image - 1].className += 
"active"}