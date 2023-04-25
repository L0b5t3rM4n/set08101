/*Javascript file containing the code responsible for functionality and interactivity*/

/*Changes the animaition of the 'Press Start' page from fadeIn to turnOff and loads new HTML file to the window*/
function fold() {	
	var x = document.getElementById("underlay1");
	x.setAttribute("style", "animation: turnOff 0.4s");
	setTimeout(function(){window.location.assign("afterintro.html")}, 300);
}

/*Waits until the text on the welcome page screen stops displaying the loads a new HTML file to the window*/
function loadMainPage() {
	setTimeout(function() {
		var x = document.getElementById("underlay2");
		x.setAttribute("style", "animation: fadeOut 3s ease-in-out")}, 18000);
	setTimeout(function(){window.location.assign("terminal.html")}, 20000);
	
}

/*Creates a new instance of the TypeIt object from TypeIt library, which creates the typing animation for the welcome message*/
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

/*Main function of the program responsible for opening and closing windows upon button click */
function openWindow(arg, arg2) {
	
	/*Assigns the global reference value of the button clicked if it's the first button clicked in this session*/
	if (global_arg == 0) {global_arg = arg;}
	
	/*Loads element styles data into variables */
	var frameElement = document.getElementById(arg2),
		frameStyle = window.getComputedStyle(frameElement),
		frameDisplay = frameStyle.getPropertyValue("display");
		
	var contentElement = document.getElementById(arg),
		contentStyle = window.getComputedStyle(contentElement),
		contentDisplay = contentStyle.getPropertyValue("display");
	
	/*Changes the element and iframe animation to fold/unfold and display to block/none depending on the current state of the element*/
	/*If the button clicked is the same button that was clicked before:*/
	if (arg == global_arg) {
	
		/*then the function changes the element and iframe animation to fold and the display to none if the element is visible*/
		if (contentDisplay != "none") {
			contentElement.style.animation = "fold1 1s";
			frameElement.style.animation = "fold1 1s";
			setTimeout(function(){contentElement.style.display = "none"; frameElement.style.display = "none"}, 900);
		} 
		
		/*or changes the element and iframe animation to unfold and display to block if the element is hidden from view*/
		else {
			contentElement.style.animation = "unfold1 1s";
			frameElement.style.animation = "unfold1 1s";
			contentElement.style.display = "block";
			frameElement.style.display = "block";
		}
		
	} 
	
	/*If the button clicked corresponds to a different tab that the one clicked before:*/
	else {
		
		var checkingElement = document.getElementById(global_arg),
			checkingStyle = window.getComputedStyle(checkingElement),
			checkingDisplay = checkingStyle.getPropertyValue("display");
		
		/*the function changes the animation to fold and the display to none of the currently displayed element to hide it
		and the animation to unfold and the display to block of a new element to be displayed*/
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
			}, 900);
		} 
		
		/*or just changes the animation to unfold and the display to block of the new element if the previous one is already hidden from view*/
		else {
			contentElement.style.animation = "unfold1 1s";
			frameElement.style.animation = "unfold1 1s";
			contentElement.style.display = "block";
			frameElement.style.display = "block";
		}
		
		/*Overwrites the reference value to the new button clicked*/
		global_arg = arg;
	}
}

/*Function responsible for opening and closing the exit window in similar fashion as the one above*/
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

/*Add-on to the previous function which changes the animation of the whole window to turnOff and loads the starting HTML file if the exit is confirmed*/
function exit() {
	var x = document.getElementById("underlay3");
	x.setAttribute("style", "animation: turnOff 0.4s");
	setTimeout(function(){window.location.assign("index.html")}, 300);

}

var generator = 0;

/*This little function is responsible for creating a new date object and displaying it on the screen*/
function generateDateTime() {
	
	document.getElementById("timeButton").style.display = "none";
	
	/*Here a new TypeIt instance is created for the 'loading' effect triggered by clicking the asterisk button for dramatic effect*/
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
	
	/*And this little bit creates the actual date-time text, displays it on the screen and reloads itself recursionally every second to update the time*/
	function displayDateTime() {
		setTimeout(function() {
			const dateTime = new Date().toLocaleString();
			document.getElementById("time").innerHTML = dateTime.replace(",", " ");
			displayDateTime();
		}, 1000);
	}
	
}

/*This last function utilises the ElasticEmail SMTP server that takes the values of elements specifed in the contact form
and sends an email to the specified inbox when someone submits the form.
Unfortunately, still in development and doesn't yet work*/
function sendEmail() {

	Email
	.send({

		Host: "smtp.elasticemail.com",
		Username: "40514435@live.napier.ac.uk",
		Password: "606D30BFFC6C825142627C8E5DE31AB87C77",
		To: "40514435@live.napier.ac.uk",
		From: document.getElementById("email").value,
		Subject: "New Contact Form Email",
		Body: "Name" + document.getElementById("name").value + "<br> Message: " + document.getElementById("Message)".value)
	
	})
	.then(

		message => alert("Message sent successfully")

	);


}