let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
 menu.classList.toggle('fa-times');
 navbar.classList.toggle('active');
}

document.querySelector('#search-icon').onclick = () =>{
 document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
 document.querySelector('#search-form').classList.remove('active');
}

let slideIndex = 0;
showSlides();

function showSlides() {
 let i;
 let slides = document.getElementsByClassName("slide");
 let dots = document.getElementsByClassName("dot");
 for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
 }
 slideIndex++;
 if (slideIndex > slides.length) {slideIndex = 1}
 for (i = 0; i < dots.length; i++){
  dots[i].className = dots[i].className.replace(" active", "")
 }
 slides[slideIndex-1].style.display = "flex";
 dots[slideIndex-1].className += " active";
 setTimeout(showSlides, 2000); // change image every 2 seconds
}

let reviewIndex = 0;
showReviews();

function showReviews() {
 let x;
 let review_slides = document.getElementsByClassName("review-slide");

 for (x = 0; x < review_slides.length; x++){
  review_slides[x].style.display = "none";
 }
 reviewIndex++;
 if (reviewIndex > review_slides.length) {reviewIndex = 1}
 review_slides[reviewIndex-1].style.display = "block";

 setTimeout(showReviews,3000);
}