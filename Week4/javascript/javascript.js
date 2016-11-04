var BoxPositionX = 190;
var BoxPositionY = 190;

var DrawingCanvas;
var DrawingContext;

function init()
{
	DrawingCanvas = document.getElementById("ourCanvas");
	DrawingContext = DrawingCanvas.getContext("2d");

	// set the fill colour, here its blue
	DrawingContext.fillStyle = "#0000FF";

	// draw a filled rectangle
	DrawingContext.fillRect(BoxPositionX,	// left position
					 		BoxPositionY,	// top position
					 		20,	// width
					 		20);	// height
	
	// tell the webpage to call out keyboard input function when there is keyboard input
	// we're adding an event listener to the event 'keydown' and when it happens call our function 'handleinput'
	window.addEventListener('keydown', handleInput, false);
}
	

// function to handle keyboard input, e is an object containing information on what key is pressed
function handleInput(e)
{
	var code = e.keyCode;

	// set the fill colour, here its blue
	DrawingContext.fillStyle = "#FFFFFF";

	// draw a filled rectangle
	DrawingContext.fillRect(BoxPositionX,	// left position
					 		BoxPositionY,	// top position
					 		20,	// width
					 		20);	// height

	switch (code) 
	{
		case 37: // left arrow
		case 65: // A
			BoxPositionX = BoxPositionX - 1;
			break;
		case 38: // up arrow
		case 87: // W
			BoxPositionY = BoxPositionY - 1;
			break;
		case 39: // right arrow
		case 68: // D
			BoxPositionX = BoxPositionX + 1;
			break;
		case 40: // down arrow
		case 83: // S
			BoxPositionY = BoxPositionY + 1;
			break;
		default: 
			console.info("Unhandled key: " + code);
			break;;
	}

	// set the fill colour, here its blue
	DrawingContext.fillStyle = "#0000FF";
	
	DrawingContext.fillRect(BoxPositionX,	// left position
					 		BoxPositionY,	// top position
					 		20,	// width
					 		20);	// height
}