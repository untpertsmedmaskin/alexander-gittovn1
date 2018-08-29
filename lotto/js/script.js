//slumptal mellan 1 och 39
//OBS dålig kod, mjlighet till dublikat => använd inte ;)
function lottoRad() {
	
	alert("Hello! I am an alert box!!");
	
	for (var i=0; i<=7; i++) {

		let lottery = Math.floor(Math.random() * 38)+1;
	 	document.getElementById ("lotto_" + i).innerHTML = lottery;
		

	}
}
