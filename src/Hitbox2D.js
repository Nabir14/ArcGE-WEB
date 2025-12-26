export class Hitbox2D{
	constructor(arcsci, pX = 0, pY = 0, width = 0, height = 0, mode = "static"){
		this.arcsci = arcsci;
		this.mode = "";
		this.x = pX;
		this.y = pY;
		this.width = width;
		this.height = height;
		this.isColliding = false;
		this.cX = 0.0;
		this.cY = 0.0;
		this.collidingFace = "";
		this.HBOXID = "";
		this.isDetectionOnly = false;
	}
	setPos(pX, pY){
		this.x = pX;
		this.y = pY;
	}
	setSize(w, h){
		this.width = w;
		this.height = h;
	}
	setDetectionMode(mode){
		this.isDetectionOnly = mode;
	}
	setMode(mode){
		this.mode = mode;
	}
	isHitboxColliding(){
		for(let i = 0; i < Object.keys(this.arcsci.colliderQueue).length; i++){
			let colObj = this.arcsci.colliderQueue["HBOX#ID"+i.toString()];
			if(this.HBOXID != "HBOX#ID"+i.toString()){
				if(this.x < colObj.x + colObj.width && this.x + this.width > colObj.x && this.y < colObj.y + colObj.height && this.y + this.height > colObj.y){

					let olUp = (this.y + this.height) - colObj.y;
					let olDown = (colObj.y + colObj.height) - this.y;
					let olLeft = (this.x + this.width) - colObj.x;
					let olRight = (colObj.x + colObj.width) - this.x;
					this.cX = Math.min(olLeft, olRight);
					this.cY = Math.min(olUp, olDown);

					if(this.cX < this.cY){
						if(olLeft < olRight){
							this.collidingFace = "LEFT";
						}else{
							this.collidingFace = "RIGHT";
						}
					}else{
						if(olUp < olDown){
							this.collidingFace = "TOP";
						}else{
							this.collidingFace = "BOTTOM";
						}
					}

				this.isColliding = true;
				return true;
				}
			}
		}
		this.isColliding = false;
		return false;
	}
	drawDebugOutline(){
		this.arcsci.arcci.ArcGE_CanvasContext.lineWidth = 2;
		if(this.isColliding === true){
			this.arcsci.arcci.ArcGE_CanvasContext.strokeStyle = "red";
		}else{
			this.arcsci.arcci.ArcGE_CanvasContext.strokeStyle = "green";
		}
		this.arcsci.arcci.ArcGE_CanvasContext.strokeRect(this.x, this.y, this.width, this.height);
	}
}
