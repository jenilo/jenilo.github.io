class Ball {
	constructor(x, y, d, directionX, directionY,speed) {
		this.x = x;
		this.y = y;
		this.d = d;
		this.c = this.randomColor();
		this.directionX = directionX;
		this.directionY = directionY;
		this.speed = speed;
	}
	display() {
		fill(this.c);
		circle(this.x,this.y,this.d);
	}
	randomColor(){
		return Array.from(Array(3), () => Math.floor(Math.random()*256));
	}
	move(){
		this.moveY();
		this.moveX();
		if (this.y >= windowHeight || this.y <= 0) {
			this.changeDirectionY();
		}
		/*if (this.x >= windowWidth || this.x <= 0) {
			this.changeDirectionX();
		}*/
	}
	moveY(){
		(this.directionY == 'up') ? this.y -= this.speed : this.y += this.speed;
	}
	moveX(){
		(this.directionX == 'left') ? this.x = this.x-this.speed : this.x = this.x+this.speed;
	}
	changeDirectionY(){
		this.directionY = (this.directionY == 'up') ? 'down' : 'up';
	}
	changeDirectionX(){
		this.directionX = (this.directionX == 'left') ? 'right' : 'left';
	}
}