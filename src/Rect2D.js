export class Rect2D{
	constructor(arcsci, pX = 0, pY = 0, w = 0, h = 0, cR = 0, cG = 0, cB = 0, cA = 0){
		this.arcsci = arcsci;
		this.x = pX;
		this.y = pY;
		this.prX = pX;
		this.prY = pY;
		this.width = w;
		this.height = h;
		this.r = cR;
		this.g = cG;
		this.b = cB;
		this.a = cA;
		this.texture = new Image();
		this.isTextureLoaded = false;
		this.hitbox = null;
	}
	setPos(pX, pY){
		this.x = pX;
		this.y = pY;
		this.prX = pX;
		this.prY = pY;
	}
	setSize(w, h){
		this.width = w;
		this.height = h;
	}
	setColor(cR, cG, cB, cA){
		this.r = cR;
		this.g = cG;
		this.b = cB;
		this.a = cA;
	}
	setTexture(texturePath){
		this.texture.src = texturePath;
		this.texture.onload = () => {
			this.isTextureLoaded = true
		}
	}
	setHitbox(hitbox){
		this.hitbox = hitbox;
		this.hitbox.HBOXID = "HBOX#ID"+Object.keys(this.arcsci.colliderQueue).length.toString();
		this.arcsci.colliderQueue[this.hitbox.HBOXID] = this.hitbox;
	}
	draw(){
		let wX = this.x - this.arcsci.CameraRectX;
		let wY = this.y - this.arcsci.CameraRectY;
		this.arcsci.arcci.ArcGE_CanvasContext.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
		this.arcsci.arcci.ArcGE_CanvasContext.fillRect(wX, wY, this.width, this.height);
		if (this.isTextureLoaded === true){
			this.arcsci.arcci.ArcGE_CanvasContext.drawImage(this.texture, wX, wY, this.width, this.height);
		}
		if(this.hitbox != null){
			this.hitbox.x = wX;
			this.hitbox.y = wY;
			if(this.hitbox.isHitboxColliding()){
				if(!this.hitbox.isDetectionOnly){
					if(this.hitbox.mode == "dynamic"){
					switch(this.hitbox.collidingFace){
						case "LEFT":
							this.x -= this.hitbox.cX;
							break;
						case "RIGHT":
							this.x += this.hitbox.cX;
							break;
						case "TOP":
							this.y -= this.hitbox.cY;
							break;
						case "BOTTOM":
							this.y += this.hitbox.cY;
							break;
					}
					}else if(this.hitbox.mode == "static"){
						this.x = this.prX;
						this.y = this.prY;
					}
				}
			}
			else{
				this.prX = this.x;
				this.prY = this.y;
			}
		}
	}
}
