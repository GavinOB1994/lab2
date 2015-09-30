var ctx;
var canvas;
var player;

function Game()
{
	console.log("test");

	initCanvas();

	player = new Player();
	goal = new Goal();	
}

Game.prototype.test = function(e)
{
	console.log(e.keyCode);
	//W
	if ( e.keyCode == 119 ) 
	{
		player.y -= 10;
	}

	//S
	if ( e.keyCode == 115 ) 
	{
		player.y += 10;
	}

	//A
	if ( e.keyCode == 97 ) 
	{
		player.x -= 10;
	}

	//D
	if ( e.keyCode == 100 ) 
	{
		player.x += 10;
	}
}

Game.prototype.gameLoop = function()
{
	console.log("gameLoop");

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	game.draw();

	window.requestAnimationFrame(game.gameLoop);
}

function initCanvas()
{
	canvas = document.createElement("canvas");
	/*ctx is the context we will draw on*/
	ctx = canvas.getContext("2d");

	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

Game.prototype.draw = function()
{
	ctx.fillStyle = rgb(255,0,0);
	ctx.fillRect(player.x, player.y, player.width, player.height);

	if (player.checkCollision(goal) == false)
	{
		ctx.fillStyle = rgb(0,255,0);
		ctx.fillRect(goal.x, goal.y,goal.width,goal.height);
	}
	else
	{
		ctx.save();
		//add in your own colour
		ctx.fillStyle=rgb(0,0,255);;
		//change this
		ctx.font = 'italic 40pt Calibri';
		//otherwise bottom
		ctx.textBaseline = "top";
		//Put your message here; x and y are where the message will appear...
		ctx.fillText("Game Over, You Win!",50,50);
		//Any idea what save and restore do?
		ctx.restore();
	}
}

/*function for rgb for convenience*/
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}



