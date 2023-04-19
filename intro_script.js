
function fold() {	
	var x = document.getElementById("underlay1");
	x.setAttribute("style", "animation: turnOff 0.4s");
	setTimeout(function(){window.location.assign("afterintro.html")}, 300);
}

function loadMainPage() {
	
	setTimeout(function() {
		var x = document.getElementById("underlay2");
		x.setAttribute("style", "animation: fadeOut 3s ease-in-out")}, 18000);
	setTimeout(function(){window.location.assign("terminal.html")}, 20000);
	
}

function welcomeMsg() {
	
	const instance = new TypeIt("#welcome", {
		startDelay: 3000,
		speed: 60,
		deleteSpeed: 30,
		lifeLike: true,
		cursorChar: "_"})
		.type("Welcome", {delay: 1000})
		.delete(null, {delay: 1000})
		.type("This is a website site about food", {delay: 1000})
		.delete(null, {delay: 1000})
		.type("Gaming food", {delay: 1000})
		.delete(null, {delay: 1000})
		.type("Enjoy", {delay: 3000})
		.delete(null, {delay: 1000})
		.go();
		
}

var global_arg = 0;

function openWindow(arg, arg2) {
	
	if (global_arg == 0) {global_arg = arg;}
	
	var frameElement = document.getElementById(arg2),
		frameStyle = window.getComputedStyle(frameElement),
		frameDisplay = frameStyle.getPropertyValue("display");
		
	var contentElement = document.getElementById(arg),
		contentStyle = window.getComputedStyle(contentElement),
		contentDisplay = contentStyle.getPropertyValue("display");
		
	if (arg == global_arg) {
		
		if (contentDisplay != "none") {
			contentElement.style.animation = "fold1 1s";
			frameElement.style.animation = "fold1 1s";
			setTimeout(function(){contentElement.style.display = "none"; frameElement.style.display = "none"}, 1000);
		} else {
			contentElement.style.animation = "unfold1 1s";
			frameElement.style.animation = "unfold1 1s";
			contentElement.style.display = "block";
			frameElement.style.display = "block";
		}
		
	} else {
		
		var checkingElement = document.getElementById(global_arg),
			checkingStyle = window.getComputedStyle(checkingElement),
			checkingDisplay = checkingStyle.getPropertyValue("display");
	
		if (checkingDisplay != "none") {
			checkingElement.style.animation = "fold1 1s";
			frameElement.style.animation = "fold1 1s";
			setTimeout(
			function() {
				checkingElement.style.display = "none"; 
				frameElement.style.display = "none";
				contentElement.style.animation = "unfold1 1s";
				frameElement.style.animation = "unfold1 1s";
				contentElement.style.display = "block";
				frameElement.style.display = "block";
			}, 1000);
		} else {
			contentElement.style.animation = "unfold1 1s";
			frameElement.style.animation = "unfold1 1s";
			contentElement.style.display = "block";
			frameElement.style.display = "block";
		}
		
		global_arg = arg;
	}
}

function openExitWindow() {
		
	var windowElement = document.getElementById("exitWindow"),
		windowStyle = window.getComputedStyle(windowElement),
		windowDisplay = windowStyle.getPropertyValue("display");
	
	if (windowDisplay != "none") {
		windowElement.style.animation = "fold2 1.5s";
		setTimeout(function(){windowElement.style.display = "none"}, 1500);
	} else {
		windowElement.style.animation = "unfold1 1s";
		windowElement.style.display = "block";
	}
}

function exit() {
	var x = document.getElementById("underlay3");
	x.setAttribute("style", "animation: turnOff 0.4s");
	setTimeout(function(){window.location.assign("index.html")}, 300);

}

var generator = 0;

function generateDateTime() {
	
	document.getElementById("timeButton").style.display = "none";
	
	if (generator == 0) {
		
		const instance = new TypeIt("#time", {
			speed: 40,
			deleteSpeed: 30,
			lifeLike: true,
			cursorChar: "_"})
			.type("################")
			.delete(null)
			.go().destroy();
		
		generator = 1;
		
		setTimeout(displayDateTime, 1000);
	}
	
		function displayDateTime() {
			
		setTimeout(function() {
			const dateTime = new Date().toLocaleString();
			document.getElementById("time").innerHTML = dateTime.replace(",", " ");
			displayDateTime();
		}, 1000);
	}
	
}
