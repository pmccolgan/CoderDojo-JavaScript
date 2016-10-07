function init()
{
	var canvas = document.getElementById("ourCanvas");
	var context = canvas.getContext("2d");

	context.fillStyle = "#00FF00";

	context.fillRect(10,
					 10,
					 380,
					 380);
}