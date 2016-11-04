function Character(x, y, width, height)
{
	var _position = new Vector2f(x, y);
	var _dimensions = new Vector2f(width, height);
	
	this.getPosition = function ()
	{
		return _position;
	}
	
	this.getDimensions = function ()
	{
		return _dimensions;
	}
}