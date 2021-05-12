class Game{
	constructor(){
		this.player1 = new Player(0,(windowHeight/2)-50,20,100,'down',5);
		this.player2 = new Player(windowWidth-20,(windowHeight/2)-50,20,100,'down',5);
		this.ball = new Ball(width/2,(windowHeight/2)-50,20,'left','down',5);
	}
	board(){
		stroke(0);
		line(width/2,0,width/2,height);
		text('player1: '+this.player1.points,0,20);
		text('player2: '+this.player2.points,width/2,20);
		noStroke();

		this.player1.display();
		this.player2.display();
		this.ball.display();
		this.ball.move();
	}
	playersMovement(){
		if (keyIsDown(DOWN_ARROW) || keyIsDown(UP_ARROW)){
			this.player1.changeDirection(keyCode);
			this.player1.move();
		}
		if (keyIsDown(87) || keyIsDown(83)){
			this.player2.changeDirection((keyIsDown(87))? UP_ARROW : DOWN_ARROW);
			this.player2.move();
		}
	}
	playersStroke(){
		if (this.ball.x <= this.player1.x+this.player1.w && this.ball.y >= this.player1.y && this.ball.y <= this.player1.y+this.player1.h) {
			this.ball.changeDirectionX();
		}
		else if (this.ball.x >= this.player2.x && this.ball.y >= this.player2.y && this.ball.y <= this.player2.y+this.player2.h) {
			this.ball.changeDirectionX();
		}
	}
	ballLeftTheBoard(){
		if(this.ball.x <= 0){
			this.player2.addPoints();
			pausar();
		}
		else if(this.ball.x >= width){
			this.player1.addPoints();
			pausar();
		}
	}
	ballReset(){
		this.ball.x = width/2;
		this.ball.y = height/2;
		this.ball.changeDirectionX();
	}
}