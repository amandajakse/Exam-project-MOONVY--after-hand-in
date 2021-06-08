/** HERE WE WRITE JAVASCRIPT **/

/** slideshow on home page - https://www.w3schools.com/howto/howto_js_slideshow.asp **/
var slideIndexFrontpage = 0;
showSlidesFrontpage();

function showSlidesFrontpage() {
	var f;
	var slidesFrontpage = document.getElementsByClassName("mySlidesFrontpage");
	for (f = 0; f < slidesFrontpage.length; f++) {
		slidesFrontpage[f].style.display = "none";
	}
	slideIndexFrontpage++;
	if (slideIndexFrontpage > slidesFrontpage.length) {
		slideIndexFrontpage = 1
	}
	try {
		slidesFrontpage[slideIndexFrontpage - 1].style.display = "block";
	} catch {
		console.log('cannot read style property')
	}
	setTimeout(showSlidesFrontpage, 5000);
}


/** slideshow on home page - https://www.w3schools.com/howto/howto_js_slideshow.asp **/

var slideIndexMobile = 0;
showSlidesMobile();

function showSlidesMobile() {
	var m;
	var slidesMobile = document.getElementsByClassName("mySlidesMobile");
	for (m = 0; m < slidesMobile.length; m++) {
		slidesMobile[m].style.display = "none";
	}
	slideIndexMobile++;
	if (slideIndexMobile > slidesMobile.length) {
		slideIndexMobile = 1
	}
	try {
		slidesMobile[slideIndexMobile - 1].style.display = "block";
	} catch {
		console.log('cannot read style property')
	}
	setTimeout(showSlidesMobile, 5000);
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




/* slideshow - https://www.w3schools.com/howto/howto_js_slideshow.asp */

var slideIndex = 1;
showSlides(slideIndex);


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
	try {
		slides[slideIndex - 1].style.display = "block";
	} catch {
		console.log('cannot read style property')
	}
	try {
		dots[slideIndex - 1].className += " active";
	} catch {
		console.log('cannot read className property')
	}
}
