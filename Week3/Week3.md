#Week 3

Install Week3 material

Canvas1.html and javascript1.html should be familar, simple page, blue rectangle in the middle

The area we draw to is 400x400 the square is 20x20

Look at the JavaScript file and you'll notice some '//'s which indicate comments, comments are messages you can leave to explain things

```
	// set the fill colour, here its blue
	context.fillStyle = "#0000FF";
```

We're going to need some output to look at values, so lets see how to print messages to the javascript console.

Any of these will produce text, copy them in, open the console and reload the page:

```
console.error("Error!"); //gives you the red errormessage
console.warn("Warning!"); //gives the warn message with the exclamation mark in front of it
console.info("Information..."); //gives an info message with an 'i' in front of the message
console.log("Log...erm..."); //gives the default message
```

Keyboard input, switch to Canvas2 & javascript2.  So we've added a function that will handle keyboard input and print the key pressed:

```
// function to handle keyboard input, e is an object containing information on what key is pressed
function handleInput(e)
{
	console.info("A key was pressed: " + e.keyCode);
}
```

We need to tell it to run that function though so add the following to init:

```
	// tell the webpage to call out keyboard input function when there is keyboard input
	// we're adding an event listener to the event 'keydown' and when it happens call our function 'handleinput'
	window.addEventListener('keydown', handleInput, false);
```

So what's printed?  Hey wait they're numbers!  Yeah so keys appear as number...  Ok so what we can do is use a 'switch case' to handle special numbers:

```
function handleInput(e)
{
		var code = e.keyCode;

		switch (code) 
		{
			case 13:
				console.info("Hey you pressed the Enter key?!");
				break;
			case 32:
				console.info("Oh woah you hit the space bar!");
				break;
			default: 
				console.info("Unhandled key: " + code);
				break;;
		}
}
```

Can you update the function to handle either WASD keys or the arrows?

Lets use these keys to move our square, open canvas3 & javascript3

Ok so we're drawing the square at 190, 190 we want to move it so we need to start storing the position in a variable, we also move our canvas and context because we need to call them elsewhere:

```
var BoxPositionX = 190;
var BoxPositionY = 190;

var DrawingCanvas;
var DrawingContext;
```

We've changed handle input so on a key press we move our box and re-draw it:

```
function handleInput(e)
{
	var code = e.keyCode;

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
			break;
		case 40: // down arrow
		case 83: // S
			break;
		default: 
			console.info("Unhandled key: " + code);
			break;;
	}
	
	DrawingContext.fillRect(BoxPositionX,	// left position
					 		BoxPositionY,	// top position
					 		20,	// width
					 		20);	// height
}
```

Hmmmmm what do we think of that?  Can you finish the code for right and down?

How can we make it look like the box is moving rather than painting?

Gravity time, we can call functions on load and on key presses, we need something being called regularly for a gameloop.

In init add:

```
	// set timer to call function every  100 milliseconds or 10 times a second
	setTimeout("update()", 100);
```

 Define the function that is called but remember to call it again!

```
	function update()
	{
		// keep calling this function
		setTimeout("update()", 100);

		console.info("Update called...");
	}
```

Ok so gravity?  In our update function why don't we change the blue box's vertical position:

```
	function update()
	{
		// keep calling this function
		setTimeout("update()", 100);

		BoxPositionY = BoxPositionY - 1;

		// lets output the position while we're at it
		console.info("Blue box y position: " + BoxPositionY);
	}
```

How's that?... Bye bye blue box :(

Basic collision detection, but first a clean up, we have a couple of things we do everytime our box moves (paint where it is white, move it, paint where it now is blue) if you have a few steps you need to repeat consider writing a function!

Add the function:

```
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

	// set the fill colour, here its blue
	DrawingContext.fillStyle = "#0000FF";
	
	DrawingContext.fillRect(BoxPositionX,	// left position
					 		BoxPositionY,	// top position
					 		20,	// width
					 		20);	// height
}
```

And update anywhere you draw the blue box e.g.:

```
// function to handle keyboard input, e is an object containing information on what key is pressed
function handleInput(e)
{
	var code = e.keyCode;

	switch (code) 
	{
		case 37: // left arrow
		case 65: // A
			moveBlueBox(-1, 0);
			break;
		case 38: // up arrow
		case 87: // W
			moveBlueBox(0, -1);
			break;
		case 39: // right arrow
		case 68: // D
			moveBlueBox(1, 0);
			break;
		case 40: // down arrow
		case 83: // S
			moveBlueBox(0, 1);
			break;
		default: 
			console.info("Unhandled key: " + code);
			break;;
	}
}
```

Now that we have all our movement in one place let's limit where it can go (note you may want to speed up the box's movement):
```
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
	if (BoxPositionY > (400 - 20))
	{
		BoxPositionY = (400 - 20);
	}

	// set the fill colour, here its blue
	DrawingContext.fillStyle = "#0000FF";
	
	DrawingContext.fillRect(BoxPositionX,	// left position
					 		BoxPositionY,	// top position
					 		20,	// width
					 		20);	// height
}
```

So can we stop it going off the left and right sides?

Extra stuff:
  * change gravity
  * change move speed
  * can we make the blue box jump?
  * draw a picture instead of a blue box

There have been a few questions about whether what we're trying to do could be hosted on the internet: [here!](https://rawgit.com/pmccolgan/CoderDojo-JavaScript/master/Week3/hosted_canvas.html)
