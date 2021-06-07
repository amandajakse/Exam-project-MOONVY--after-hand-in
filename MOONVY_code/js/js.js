/** HERE WE WRITE JAVASCRIPT **/

/** changeing images on home page **/
var image = document.getElementById("image");
var currentImage = 0;
var images = ["pictures/banner_picture_1.jpg", "pictures/banner_picture_2.jpg", "pictures/banner_picture_3.jpg"]

function changePhotoLoop() {

	try {
		image.src = images[currentImage]
	} catch {
		console.log('The id image is not found on this page')
	}

	if (++currentImage >= images.length)
		currentImage = 0;

}

try {
	setInterval(changePhotoLoop, 5000)
} catch {
	console.log('setInterval only works on certain pages')
}




/** filter options can be selected on shop page **/

function myFunction1() {
	document.getElementById("filter_button1").style.cssText = "opacity: 100%; font-weight: 700;";
}

function myFunction2() {
	document.getElementById("filter_button2").style.cssText = "opacity: 100%; font-weight: 700;";
}

function myFunction3() {
	document.getElementById("filter_button3").style.cssText = "opacity: 100%; font-weight: 700;";
}

function myFunction4() {
	document.getElementById("filter_button4").style.cssText = "opacity: 100%; font-weight: 700;";
}

function myFunction5() {
	document.getElementById("filter_button5").style.cssText = "opacity: 100%; font-weight: 700;";
}

function myFunction6() {
	document.getElementById("filter_button6").style.cssText = "opacity: 100%; font-weight: 700;";
}



/** event listener for 'send message' button **/

try {
	document.getElementById("sendmssg").addEventListener("click", myFunction)
} catch {
	console.log('id sendmssg not found')
}

function myFunction() {
	alert("Your message has been sent. MOONVY will get back at you shortly.");
}


/** event listener for 'add to bag' button **/
try {
	document.getElementById("addBtn").addEventListener("click", addToBag)
} catch {
	console.log('id addBtn not found')
}

function addToBag() {
	alert("Item added to bag");
}



/** changes amount of products **/

var productAmount = 1;

function addOne() {
	productAmount++;

	document.getElementById('productAmount').innerHTML = productAmount;
	return true
}


var productAmount;

function minusOne() {
	if (productAmount > 1)
		productAmount--;

	document.getElementById('productAmount').innerHTML = productAmount;
	return true
}




/** product page hide and show product description **/

function hideFunction() {
	var paragraph = document.getElementById("description");

	if (paragraph.classList.contains("hide")) {
		paragraph.classList.remove("hide");
	} else {
		paragraph.classList.add("hide");
	}
}

function hideFunction2() {
	var paragraph = document.getElementById("details");

	if (paragraph.classList.contains("hide")) {
		paragraph.classList.remove("hide");
	} else {
		paragraph.classList.add("hide");
	}
}

function hideFunction3() {
	var paragraph = document.getElementById("shipping");

	if (paragraph.classList.contains("hide")) {
		paragraph.classList.remove("hide");
	} else {
		paragraph.classList.add("hide");
	}
}

/** in the product page changes the arrow next to description button **/
function changeArrow1() {
	var arrow = document.getElementById("arrow1");
	if (arrow.innerHTML === "▼") {
		arrow.innerHTML = "▲";
	} else {
		arrow.innerHTML = "▼";
	}
}

function changeArrow2() {
	var arrow = document.getElementById("arrow2");
	if (arrow.innerHTML === "▼") {
		arrow.innerHTML = "▲";
	} else {
		arrow.innerHTML = "▼";
	}
}

function changeArrow3() {
	var arrow = document.getElementById("arrow3");
	if (arrow.innerHTML === "▼") {
		arrow.innerHTML = "▲";
	} else {
		arrow.innerHTML = "▼";
	}
}


/* Open and close mobile menu */

function openMenu() {
	document.getElementById("overlay").style.width = "100%";
}

function closeMenu() {
	document.getElementById("overlay").style.width = "0%";
}




/* slideshow*/

var slideIndex = 1;
showSlides(slideIndex);


// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}
