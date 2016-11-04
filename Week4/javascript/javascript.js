var CANVAS_ID = "ourCanvas"
var CONTEXT = "2d"
var UPDATE_INTERVAL_MILLISECONDS = 40	// call update every 40 milliseconds, around 25 times a second
var CHARACTER_START_X = 100
var CHARACTER_START_Y = 100
var CHARACTER_DIMENSION = 32

var renderer
var character


function init()
{
	console.log("init")

	renderer = new Render(document, CANVAS_ID, CONTEXT);
	
	character = new Character(CHARACTER_START_X, CHARACTER_START_X, CHARACTER_DIMENSION, CHARACTER_DIMENSION);

	// tell the webpage to call out keyboard input function when there is keyboard input
	// we're adding an event listener to the event 'keydown' and when it happens call our function 'handleinput'
	window.addEventListener('keydown', handleInput, false)
	
	requestUpdateTimer();
}
	

// function to handle keyboard input, e is an object containing information on what key is pressed
function handleInput(e)
{
	var code = e.keyCode

	switch (code) 
	{
		case 37: // left arrow
		case 65: // A
			break
		case 38: // up arrow
		case 87: // W
			break
		case 39: // right arrow
		case 68: // D
			break
		case 40: // down arrow
		case 83: // S
			break
		default: 
			console.info("Unhandled key: " + code)
			break
	}
}


function renderCharacter(render_character)
{
	// console.log("render character")
	
	var position = render_character.getPosition()
	var dimensions = render_character.getDimensions()

	renderer.drawRectangle(position.x, 
						   position.y, 
						   dimensions.x,
						   dimensions.y, 
						   COLOUR.RED)
}


function requestUpdateTimer()
{
	setTimeout("update()", UPDATE_INTERVAL_MILLISECONDS)
}


function update()
{
	// console.log("update")

	renderCharacter(character)

	// have to set trigger for update to be called again
	requestUpdateTimer()
}