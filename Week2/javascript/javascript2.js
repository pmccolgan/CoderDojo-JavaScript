function init()
{
	var canvas = document.getElementById("ourCanvas");
	var context = canvas.getContext("2d");

	context.fillStyle = "#00FF00";

	context.fillRect(10,
					 10,
					 380,
					 380);

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
}