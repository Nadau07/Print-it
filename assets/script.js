/*const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]*/

let slideIndex = 1; //slide de depart

slidesActive(slideIndex);

function plusSlides(n){
	slidesActive(slideIndex += n);
}// quand je clique sur les fleches:passage à l'autre slide.

function bulletSlide(n){
	slidesActive(slideIndex = n);
} //pouvoir changer l'img de la slide avec les bullets


function slidesActive(n){
	let slides = document.getElementsByClassName('banner-img'); //recuperation des img
	let dots = document.getElementsByClassName('dot'); //recuperation des dots

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
}