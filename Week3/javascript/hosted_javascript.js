var BoxPositionX = 190;
var BoxPositionY = 190;

var DrawingCanvas;
var DrawingContext;

function init()
{
	DrawingCanvas = document.getElementById("ourCanvas");
	DrawingContext = DrawingCanvas.getContext("2d");

	moveBlueBox(0, 0);
	
	// tell the webpage to call out keyboard input function when there is keyboard input
	// we're adding an event listener to the event 'keydown' and when it happens call our function 'handleinput'
	window.addEventListener('keydown', handleInput, false);

	// set timer to call function every  100 milliseconds or 10 times a second
	setTimeout("update()", 100);
}


function update()
{
	// keep calling this function
	setTimeout("update()", 100);

	moveBlueBox(0, 10);

	// lets output the position while we're at it
	console.info("Blue box y position: " + BoxPositionY);
}
	

// function to handle keyboard input, e is an object containing information on what key is pressed
function handleInput(e)
{
	var code = e.keyCode;

	switch (code) 
	{
		case 37: // left arrow
		case 65: // A
			moveBlueBox(-10, 0);
			break;
		case 38: // up arrow
		case 87: // W
			moveBlueBox(0, -100);
			break;
		case 39: // right arrow
		case 68: // D
			moveBlueBox(10, 0);
			break;
		case 40: // down arrow
		case 83: // S
			moveBlueBox(0, 10);
			break;
		default: 
			console.info("Unhandled key: " + code);
			break;;
	}
}


function moveBlueBox(x_offset, y_offset)
{
	// set the fill colour, here its blue
	DrawingContext.fillStyle = "#FFFFFF";

	// draw a filled rectangle
	DrawingContext.fillRect(BoxPositionX,	// left position
					 		BoxPositionY,	// top position
					 		20,	// width
					 		20);	// height

	BoxPositionX = BoxPositionX + x_offset;
	BoxPositionY = BoxPositionY + y_offset;

	// so we've moved the box, before we draw it lets make sure we're happy where it is
	if (BoxPositionY > 400 - 20)
	{
		BoxPositionY = (400 - 20);
	}

	if (BoxPositionY < 0)
	{
		BoxPositionY = 0;
	}

	if (BoxPositionX > 400 - 20)
	{
		BoxPositionX = (400 - 20);
	}

	if (BoxPositionX < 0)
	{
		BoxPositionX = 0;
	}

	// set the fill colour, here its blue
	DrawingContext.fillStyle = "#0000FF";
	
	DrawingContext.fillRect(BoxPositionX,	// left position
					 		BoxPositionY,	// top position
					 		20,	// width
					 		20);	// height
}