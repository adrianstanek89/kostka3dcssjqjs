/*Menu pierwsza kostka*/

var kosc1 = document.getElementById('kostka');
var kosc2 = document.getElementById('scena2');


var menu0 = document.getElementsByClassName("menu1");
var menu1 = document.getElementsByClassName("menu2");
var menu2 = document.getElementsByClassName("menu3");
var menu3 = document.getElementsByClassName("menu4");
var menu4 = document.getElementsByClassName("menu5");
var menu5 = document.getElementsByClassName("menu6");
var sport = document.getElementsByClassName("sport");

/*animacja przyciskow*/

$(".klik").bind("mouseenter", function () {
	$(this).addClass("jello animated zmienKolor");

});

$(".klik").bind("mouseleave", function () {
	$(this).removeClass("jello animated zmienKolor");

});

$(".klik").on("click", function () {
	$(this).toggleClass("kolorClick");

});

/*animacja submenu*/

$("#kostka2 a").on("click", function () {
	$(".hr1").toggleClass("animacjaKostek");

});






/*$(document).ready(function() {
$(".menu1 , .menu2 , .menu3 ,.menu4,  .menu5 , .menu6").click(function () { 
$('#hr').slideToggle();
});
});*/


/*$(document).ready(function() {
$(".menu1").click(function () { 
$('#scena2').slideToggle();
});
});
*/

$('#hr').hide();
$(function () {
	$('.pokaz').click(function () {
		$('#hr').slideToggle();


		return false;
	});
});

$('#scena2').hide();
$(function () {
	$('.menu1').click(function () {
		$('#scena2').slideToggle();


		return false;
	});
});

$('#scena3').hide();
$(function () {
	$('.menu2').click(function () {
		$('#scena3').slideToggle();


		return false;
	});
});

$('#scena4').hide();
$(function () {
	$('.menu3').click(function () {
		$('#scena4').slideToggle();


		return false;
	});
});

$('#scena5').hide();
$(function () {
	$('.menu4').click(function () {
		$('#scena5').slideToggle();


		return false;
	});
});

$('#scena6').hide();
$(function () {
	$('.menu5').click(function () {
		$('#scena6').slideToggle();


		return false;
	});
});

$('#scena7').hide();
$(function () {
	$('.menu6').click(function () {
		$('#scena7').slideToggle();


		return false;
	});
});

/*submenu*/


var content = $('body'),
	przycisk = $('.pilka'),
	pole = $('.texSub'),
	scena = $('#scena'),
	poleVisible = false;

przycisk.on('click', function () {
	pole.toggle();
	poleVisible = true;
	scena.toggle();
	return false;
});

pole.on('click', function (e) {
	e.stopPropagation();
	return false;
});

content.on('click', function () {
	if (poleVisible) {
		pole.hide();
		poleVisible = false;
		scena.toggle();
	}
	return false;
});



/*tlo zmiana*/
