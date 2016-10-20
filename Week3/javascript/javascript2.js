function init()
{
	var canvas = document.getElementById("ourCanvas");
	var context = canvas.getContext("2d");

	// set the fill colour, here its blue
	context.fillStyle = "#0000FF";

	// draw a filled rectangle
	context.fillRect(190,	// left position
					 190,	// top position
					 20,	// width
					 20);	// height
	
	// tell the webpage to call out keyboard input function when there is keyboard input
	// we're adding an event listener to the event 'keydown' and when it happens call our function 'handleinput'
	window.addEventListener('keydown', handleInput, false);
}
	

// function to handle keyboard input, e is an object containing information on what key is pressed
function handleInput(e)
{
	console.info("A key was pressed: " + e.keyCode);
}