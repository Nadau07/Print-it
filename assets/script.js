const taglines = [
	'Impressions tous formats <span>en boutique et en ligne</span>'
	,
	
	'Tirages haute définition grand format <span>pour vos bureaux et events</span>'
	,
	
	'Grand choix de couleurs <span>de CMJN aux pantones</span>'
	,
	'Autocollants <span>avec découpe laser sur mesure</span>'
] //tableau avec toutes les taglines

let slideIndex = 1; //slide de depart

slidesActive(slideIndex);

let precedent = document.querySelector('#precedent');
let suivant = document.querySelector('#suivant');


suivant.addEventListener('click', function() {
	plusSlides(1);
});

precedent.addEventListener('click', function() {
	plusSlides(-1);
  });


function plusSlides(n){
	slidesActive(slideIndex += n);
}// quand je clique sur les fleches:passage à l'autre slide.

console.log('plusSlides');


function slidesActive(n){
	let slides = document.querySelectorAll('.banner-img'); //recuperation des img
	let dots = document.querySelectorAll('.dot'); //recuperation des dots
	if (n > slides.length){ slideIndex = 1}  //Si le nombre de slide est supérieur a la liste, ça retourne a la slide 1.
	if (n < 1 ){ slideIndex = slides.length}

	for(let i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}

	for(let i = 0; i < dots.length; i++){
		dots[i].classList.remove('dot_selected');	
	}

	slides[slideIndex - 1].style.display = "block";

	dots[slideIndex - 1].classList.add('dot_selected');

	let tagline = taglines[slideIndex - 1]; 

	let taglineElement = document.querySelector('.tagline');
	taglineElement.innerHTML = tagline;  // insérer la tagLine dans l'élément HTML qui correspond
}

//Changement de l'img du carrousel avec les bullets:

function bulletSlide(n) {
	slidesActive(slideIndex = n);
}
let bullets = document.queryselectorAll('.dot');
for (let i = 0; i < bullets.length; i++) {
	bullets[i].addEventListener('click', function() {
		bulletSlide(i + 1);
	});
}

console.log(slides);