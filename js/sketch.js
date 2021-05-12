var play = false;
var game;

function setup(){
	createCanvas(windowWidth,windowHeight-20);
	game = new Game();
}
function draw(){
	background('rgb(242, 157, 181)');

	if(!play)
		noLoop();
	
	game.board();

	game.playersMovement();

	game.playersStroke();

	game.ballLeftTheBoard();
}
function mouseClicked(){
	iniciar();
	console.log(play);
	
}

function iniciar(){
	play = true;
	game.ballReset();
	loop();
}
function pausar(){
	play = false;
	noLoop();
}
