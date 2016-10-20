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
}