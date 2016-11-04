// try not to use 'magic number' define values you use with a name that explains them
var CANVAS_ID = "ourCanvas"
var CONTEXT = "2d"
var UPDATE_INTERVAL_MILLISECONDS = 40	// call update every 40 milliseconds, around 25 times a second
var CHARACTER_START_X = 100
var CHARACTER_START_Y = 100
var CHARACTER_DIMENSION = 32
var GRAVITY_ACCELERATION = 300	// y position is upside down so gravity is positive
var JUMP_ACCELERATION = -4000	// y position is upside down so jump is negative
var MOVE_SPEED = 1000	// left and right move speed

var lastUpdateTime // store the last time the game was updated
var moveRight // flag for input to move right
var moveLeft // flag for input to move left
var jump // flag to jump

// objects to group together functionality
var renderer	// handle all drawing
var character 	// handle all character... stuff

function init()
{
	// console.log("init")

	renderer = new Render(document, CANVAS_ID, CONTEXT)
	
	character = new Character(CHARACTER_START_X, CHARACTER_START_X, CHARACTER_DIMENSION, CHARACTER_DIMENSION)

	window.addEventListener('keydown', inputButtonDown, false)
	window.addEventListener('keyup', inputButtonUp, false)
	
	requestUpdateTimer()

	lastUpdateTime = Date.now()
	moveRight = false
	moveLeft = false
	jump = false
}
	

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


function requestUpdateTimer()
{
	setTimeout("update()", UPDATE_INTERVAL_MILLISECONDS)
}


function update()
{
	// console.log("update")

	var updateTime = Date.now()
	var timeSinceLastUpdateMilliSeconds = updateTime - lastUpdateTime
	var timeSinceLastUpdateSeconds = timeSinceLastUpdateMilliSeconds/1000

	// clear the entire canvas, remove anything previously drawn
	renderer.clear()

	updateCharacter(character, timeSinceLastUpdateSeconds)

	// have to set trigger for update to be called again
	requestUpdateTimer()

	lastUpdateTime = updateTime
}


function updateCharacter(update_character, update_time)
{
	// console.log("update character")

	var dimensions = update_character.getDimensions()

	// move the character but adjusting its velocity
	var moveSpeed = 0

	if (moveRight == true)
	{
		moveSpeed += MOVE_SPEED
	}

	if (moveLeft == true)
	{
		moveSpeed -= MOVE_SPEED
	}

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

	update_character.setVelocity(moveSpeed * update_time, verticalAcceleration)

	update_character.updatePosition(update_time)
	
	// basic collision detection, keep character in canvas
	var position = update_character.getPosition()
	var canvasDimensions = renderer.getDimensions()

	if (position.getX() < 0)
	{
		position.setX(0)
	}
	else if (position.getX() > (canvasDimensions.getX() - dimensions.getX()))
	{
		position.setX(canvasDimensions.getX() - dimensions.getX())
	}

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
	renderer.drawRectangle(position.getX(), 
						   position.getY(), 
						   dimensions.getX(),
						   dimensions.getY(), 
						   COLOUR.RED)
}