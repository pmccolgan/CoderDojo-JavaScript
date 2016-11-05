// try not to use 'magic number' define values you use with a name that explains them
var CANVAS_ID = "ourCanvas"
var CONTEXT = "2d"
var UPDATE_INTERVAL_MILLISECONDS = 40	// call update every 40 milliseconds, around 25 times a second
var MILLISECONDS_PER_SECOND = 1000
var CHARACTER_START_X = 100
var CHARACTER_START_Y = 100
var CHARACTER_DIMENSION = 32
var GRAVITY_ACCELERATION = 300	// y position is upside down so gravity is positive
var JUMP_ACCELERATION = -4000	// y position is upside down so jump is negative
var MOVE_SPEED = 1000	// left and right move speed

// some variables we need to store things
var lastUpdateTime // store the last time the game was updated
var moveRight // flag for input to move right
var moveLeft // flag for input to move left
var jump // flag to jump

// objects to group together functionality
var renderer	// handle all drawing
var character 	// handle all character... stuff

// init function called when the web page has loaded
function init()
{
	// console.log("init")

	// set up rendering document
	renderer = new Render(document, CANVAS_ID, CONTEXT)
	
	// set up character, set position and size
	character = new Character(CHARACTER_START_X, CHARACTER_START_X, CHARACTER_DIMENSION, CHARACTER_DIMENSION)

	// listen for events, these handle input when a key goes down or up
	window.addEventListener('keydown', inputButtonDown, false)
	window.addEventListener('keyup', inputButtonUp, false)
	
	// request the update function gets called
	requestUpdateTimer()

	// initialise our variables
	lastUpdateTime = Date.now()
	moveRight = false
	moveLeft = false
	jump = false
}
	
// handle button down events
function inputButtonDown(e)
{
	var code = e.keyCode

	switch (code) 
	{
		case 37: // left arrow
		case 65: // A
			moveLeft = true
			break
		case 38: // up arrow
		case 87: // W
			jump = true
			break
		case 39: // right arrow
		case 68: // D
			moveRight = true
			break
		case 40: // down arrow
		case 83: // S
			break
		default: 
			console.info("Unhandled key: " + code)
			break
	}
}
	
// handle button up events
function inputButtonUp(e)
{
	var code = e.keyCode

	switch (code) 
	{
		case 37: // left arrow
		case 65: // A
			moveLeft = false
			break
		case 38: // up arrow
		case 87: // W
			jump = false
			break
		case 39: // right arrow
		case 68: // D
			moveRight = false
			break
		case 40: // down arrow
		case 83: // S
			break
		default: 
			console.info("Unhandled key: " + code)
			break
	}
}

// this function requests the update function get called again in the future
// it must be called at the end of every update call
function requestUpdateTimer()
{
	setTimeout("update()", UPDATE_INTERVAL_MILLISECONDS)
}

// update function, called every frame to update/change stuff
function update()
{
	// console.log("update")

	// work out how long it has been since the last update
	// get the current time in milliseconds
	var updateTime = Date.now()
	// get the length of time since the last update
	var timeSinceLastUpdateMilliSeconds = updateTime - lastUpdateTime
	// convert the time to seconds
	var timeSinceLastUpdateSeconds = timeSinceLastUpdateMilliSeconds/MILLISECONDS_PER_SECOND

	// clear the entire canvas, remove anything previously drawn
	renderer.clear()

	// update the character for the amount of time that has passed
	updateCharacter(character, timeSinceLastUpdateSeconds)

	// have to set trigger for update to be called again
	requestUpdateTimer()

	// save the last update time
	lastUpdateTime = updateTime
}

// this function performs all character updates
function updateCharacter(update_character, update_time)
{
	// console.log("update character")

	var dimensions = update_character.getDimensions()

	// calculate how much the character should move left and right
	// pick which image to draw
	var moveSpeed = 0
	var imageFile = './images/SuperPaddyO.png'
	if (moveRight == true)
	{
		moveSpeed += MOVE_SPEED
		imageFile = './images/SuperPaddyO_right_1.png'
	}

	if (moveLeft == true)
	{
		moveSpeed -= MOVE_SPEED
		imageFile = './images/SuperPaddyO_left_1.png'
	}

	// calculate how much the character should move up or down
	// we use velocity and acceleration here
	var verticalAcceleration = 0

	var velocity = update_character.getVelocity()

	if ((velocity.getY() == 0) && (jump == true))
	{
		verticalAcceleration = JUMP_ACCELERATION * update_time
	}
	else
	{
		verticalAcceleration = velocity.getY() + (GRAVITY_ACCELERATION * update_time)
	}

	// set velocity in x and y directions
	update_character.setVelocity(moveSpeed * update_time, verticalAcceleration)

	// update the character which uses its velocity to update its position
	update_character.updatePosition(update_time)
	
	// basic collision detection, keep character in canvas
	var position = update_character.getPosition()
	var canvasDimensions = renderer.getDimensions()

	// stop the character going out the left or right of the screen
	if (position.getX() < 0)
	{
		position.setX(0)
	}
	else if (position.getX() > (canvasDimensions.getX() - dimensions.getX()))
	{
		position.setX(canvasDimensions.getX() - dimensions.getX())
	}

	// stop the character going out the top or bottom of the screen
	if (position.getY() < 0) 
	{
		position.setY(0)
	}
	else if (position.getY() > (canvasDimensions.getY() - dimensions.getY()))
	{
		position.setY(canvasDimensions.getY() - dimensions.getY())
		update_character.setVelocity(update_character.getVelocity().getX(), 0)
	}

	// draw character
	renderer.drawImage(position.getX(), 
					   position.getY(), 
					   dimensions.getX(),
					   dimensions.getY(), 
					   imageFile)
}