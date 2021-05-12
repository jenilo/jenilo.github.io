class Player {
	constructor(x, y, w, h, directionY,speed) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.directionY = directionY;
		this.speed = speed;
		this.points = 0;
	}
	display() {
		fill('black');
		rect(this.x,this.y,this.w,this.h);
	}
	move(){
		if ((this.directionY == 'up' && this.y-this.speed >= 0) ||
			(this.directionY == 'down' && this.y+this.h+this.speed <= windowHeight-20)) {
			this.moveY();
		}
	}
	moveY(){
		(this.directionY == 'up') ? this.y -= this.speed : this.y += this.speed;
	}
	changeDirection(keyCode){
		this.directionY = (keyCode == UP_ARROW) ? 'up' : 'down';
	}
	addPoints(){
		this.points +=10;
	}
}