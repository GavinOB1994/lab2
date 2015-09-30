function Player()
{
	this.x = 100;
	this.y = 200;
	this.width = 50;
	this.height = 50;
}

Player.prototype.checkCollision = function (e)
{
 
    var collides=false;
         
        //do the two bounding boxes overlap?
        if ((this.x < e.x + e.width) &&
        (this.x + this.width > e.x) &&
        (this.y + this.height > e.y) &&
        (this.y < e.y + e.height) )
        {           
             
            collides = true;
                     
        }
         
        return collides;
};
