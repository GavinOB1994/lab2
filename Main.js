//global variable
var game;

function main()
{
	console.log("test");

	game = new Game();
	game.gameLoop();

	window.addEventListener("keypress", game.test)
}