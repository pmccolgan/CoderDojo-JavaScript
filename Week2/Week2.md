#Week 2

Install Week2 material, install notepad++ if you want to help with formatting

Open up the Week2 folder

Open a browser and open the canvas.html file, this is what we looked at in week 1

Open javascript/javascript1.js

Again we looked at this in Week1 but lets have a recap; we have a function init that we call when the page loads, we have our canvas which we have defined in our html, we get a 2d context, we give the context a colour in hexadecimel and we ask it to draw a rectangle

Hexadecimal colour picker: http://www.w3schools.com/colors/colors_picker.asp

Drawing polygons:

```
	context.fillStyle = "#FF0000";

	context.beginPath();

	context.moveTo(25,25);
	context.lineTo(105,25);
	context.lineTo(25,105);

	context.fill();

	context.strokeStyle = "#0000FF";

	context.beginPath();
    
    context.moveTo(125,125);
    context.lineTo(125,45);
    context.lineTo(45,125);
    
    context.closePath();
    
    context.stroke();
```

Drawing text:

```
	context.fillStyle = "#FFFF00";

    context.font = "48px serif";
 	context.fillText("Coderdojo", 100, 200);

	context.strokeStyle = "#000000";

	context.font = "bold italic large serif";
	context.strokeText("Strabane", 100, 300);
```

Notice the similarities in how things are drawn, set the context fill or stroke style, and just tell it what to do.

Unfortunately drawing images is much tricker and requires heavier javascript 😁

Draing images:
```
	var our_image = new Image();
	our_image.src = './images/pikachu.png';           
	our_image.onload = function()
	{
    	context.drawImage(our_image, 0, 0);
	}
```

So what's happening here, we make an instance of a class which is new and we define an inline function.  We've already come across functions but this one is a little special.
