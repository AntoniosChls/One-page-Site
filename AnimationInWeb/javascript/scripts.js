//NAVBAR ANIMATION
//CHECKS THE SCREEN WIDTH
x = window.matchMedia("(max-width: 800px)")

function openNav() {
//CHECKS IF THE SCREEN WIDTH IS LES THAN 800PX
if (x.matches) { 
	document.getElementById("mySidenav").style.width = "100%";

}else{
	document.getElementById("mySidenav").style.width = "250px";

}
}
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

