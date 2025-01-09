/*-------navigation bar function----------*/
function mymenufunction(){
	var menubtn = document.getElementId("mynavmenu");
	
	if(menubtn.className ==="nav-menu"){
		menubtn.className += "responsive";
	}else{
		menubtn.className = "nav-menu";
	}
}
/*-------add shadow on navigate bar while scrolling---------*/
window.onscroll = function(){
headershadow()};
function headershadow() {
	const navheader = document.getElementById("header");
	
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
		navheader.style.boxshadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
		navheader.style.height = "70px";
		navheader.style.lineHeight = "70px";
	} else {
		navheader.style.boxshadow = "none";
		navheader.style.height = "90px";
		navheader.style.lineHeight = "90px";
		
	}
}
	
/*-------Typing effect---------*/
var typingEffect = new Typed(".typedtext", {
	strings : ["Designer", "Developer"],
	loop : true,
	typespeed : 100,
	backspeed : 80,
backDelay : 2000
})
/*-------scroll reveal animation---------*/
const sr = scrollreveal({
	origin: 'top',
	distance: '80px',
	duration: 2000;
	reset: true
})
/*-------home---------*/
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.featured-text-icons',{delay: 200})
sr.reveal('.featured-text-image',{delay: 300})
/*-------project box---------*/
sr.reveal('.project-box',{interval: 200})
/*-------heading---------*/
sr.reveal('.top-header',{})
/*-------scroll reveal left_right animation---------*/

/*-------about info & contact info---------*/
const srLeft = scrollreveal({
	origin: 'left',
	distance: '80px',
	duration: 2000,
	reset: true
})
srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/*-------about skills & form box---------*/

/*-------change active link---------*/
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
	const scrollY = window.scrollY;
	
sections.forEach(current => {
const sectionHeight = current.offsetHeight,
sectionTop = current.offsetTop - 50,
sectionId = current.getAttribute('id')

if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
document.querySelector('.nav-menu a[href='+sectionId +']').classList.add('active-link')	
} else {
	document.querySelector('.nav-menu a[href='+sectionId +']').classList.remove('active-link')
}
})
}
window.addEventListener('scroll, scrollActive')