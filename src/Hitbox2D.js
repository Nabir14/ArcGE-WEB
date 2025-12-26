import { Enums } from "./Enums";

export class Hitbox2D{
	constructor(arcsci, pos = new Point2D(0, 0), width = 0, height = 0, mode = Enums.HitboxModes.STATIC){
		this.arcsci = arcsci;
		this.mode = mode;
		this.pos = pos;
		this.width = width;
		this.height = height;
		this.isColliding = false;
		this.cX = 0.0;
		this.cY = 0.0;
		this.collidingFace = 0;
		this.id = "";
	}

	setPos(pos){
		this.pos = pos;
	}
	
	setSize(w, h){
		this.width = w;
		this.height = h;
	}
	
	setMode(mode){
		this.mode = mode;
	}
	
	isHitboxColliding(){
		Object.keys(this.arcsci.colliderQueue).forEach(id => {
			let colObj = this.arcsci.colliderQueue[id];
		
			if(this.id == id){
				return;
			}
		
			if(this.pos.x < colObj.pos.x + colObj.width && this.pos.x + this.width > colObj.pos.x && this.pos.y < colObj.pos.y + colObj.height && this.pos.y + this.height > colObj.pos.y){

				let olUp = (this.pos.y + this.height) - colObj.pos.y;
				let olDown = (colObj.pos.y + colObj.height) - this.pos.y;
				let olLeft = (this.pos.x + this.width) - colObj.pos.x;
				let olRight = (colObj.pos.x + colObj.width) - this.pos.x;
				this.cX = Math.min(olLeft, olRight);
				this.cY = Math.min(olUp, olDown);

				if(this.cX < this.cY){
					if(olLeft < olRight){
						this.collidingFace = Enums.HitboxCollidingFaces.LEFT;
					}else{
						this.collidingFace = Enums.HitboxCollidingFaces.RIGHT;
					}
				}else{
					if(olUp < olDown){
						this.collidingFace = Enums.HitboxCollidingFaces.TOP;
					}else{
						this.collidingFace = Enums.HitboxCollidingFaces.BOTTOM;
					}
				}

			this.isColliding = true;
			return true;
			}
		});

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
