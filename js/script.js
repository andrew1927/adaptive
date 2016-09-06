var elBtnMenu = document.getElementsByClassName("btn-menu")[0],
	elNavMenu = document.getElementsByClassName("top-menu")[0];

elBtnMenu.addEventListener("click", function(){
	elNavMenu.classList.toggle("visible");
});	