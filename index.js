function goTop(){
	document.documentElement.scrollTop = 0;
}

let scrollPosition = document.querySelector('html').scrollTop;
let NavBar_Center = document.getElementById('NavBar_Center');
function scroll_Title(){
    scrollPosition = document.querySelector('html').scrollTop;
    if (scrollPosition > 10){
		NavBar_Center.style.display = "block";
	}
	else{
		NavBar_Center.style.display = "none";
	}
}
setInterval(scroll_Title, 100);