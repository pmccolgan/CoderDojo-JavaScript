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


