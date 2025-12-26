export class Camera2D{
	constructor(arcsci, pX = 0, pY = 0){
		this.arcsci = arcsci;
		this.x = pX;
		this.y = pY;
	}
	setPos(pX, pY){
		this.x = pX;
		this.y = pY;
	}
	view(){
		this.arcsci.CameraRectX = this.x;
		this.arcsci.CameraRectY = this.y;
	}
}
