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

	context.fillStyle = "#FFFF00";

    context.font = "48px serif";
 	context.fillText("Coderdojo", 100, 200);

	context.strokeStyle = "#000000";

	context.font = "bold italic large serif";
	context.strokeText("Strabane", 100, 300);
}