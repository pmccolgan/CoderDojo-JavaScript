function init()
{
	var canvas = document.getElementById("ourCanvas");
	var context = canvas.getContext("2d");

	context.fillStyle = "#00FF00";

	context.fillRect(10,
					 10,
					 380,
					 380);

  	var our_image = new Image();
	our_image.src = './images/pikachu.png';           
	our_image.onload = function()
	{
    	context.drawImage(our_image, 0, 0);
	}
}