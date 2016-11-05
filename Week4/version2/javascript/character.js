function Character(x, y, width, height)
{
	var _position = new Vector2f(x, y)
	var _dimensions = new Vector2f(width, height)
	var _velocity = new Vector2f(0, 0)
	
	this.getPosition = function ()
	{
		return _position
	}
	
	this.setPosition = function (x, y)
	{
		_position.setX(x)
		_position.setY(y)
	}
	
	this.getDimensions = function ()
	{
		return _dimensions
	}
	
	this.getVelocity = function ()
	{
		return _velocity
	}
	
	this.setVelocity = function (x, y)
	{
		_velocity.setX(x)
		_velocity.setY(y)
	}
	
	this.updatePosition = function (update_time)
	{
		_position.setX(_position.getX() + (_velocity.getX() * update_time))
		_position.setY(_position.getY() + (_velocity.getY() * update_time))
	}
}