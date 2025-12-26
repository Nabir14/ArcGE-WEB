import { Color } from "./Color";
import { Enums } from "./Enums";
import { Point2D } from "./Point2D";
import { Texture2D } from "./Texture2D";

export class Rect2D{
	constructor(arcsci, pos = new Point2D(0, 0), w = 0, h = 0, color = new Color(0, 0, 0, 0)) {
		this.arcsci = arcsci;
		this.pos = pos;
		this.width = w;
		this.height = h;
		this.color = color;
		this.texture = new Texture2D();
		this.hitbox = null;
		this._prevPos = pos;
	}

	setPos(pos){
		this.pos = pos;
		this._prevPos = pos;
	}

	setSize(w, h){
		this.width = w;
		this.height = h;
	}
	
	setColor(color){
		this.color = color;
	}
	
	setTexture(texture){
		this.texture = texture;
	}

	setHitbox(hitbox){
		this.hitbox = hitbox;
		this.hitbox.HBOXID = "HBOX#ID"+Object.keys(this.arcsci.colliderQueue).length.toString();
		this.arcsci.colliderQueue[this.hitbox.HBOXID] = this.hitbox;
	}

	_draw(){
		const activeCamera = this.arcsci.activeCamera;
		const wX = this.x - activeCamera.pos.x;
		const wY = this.y - activeCamera.pos.y;

		this.arcsci.arcci.ArcGE_CanvasContext.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`;
		this.arcsci.arcci.ArcGE_CanvasContext.fillRect(wX, wY, this.width, this.height);
		
		if (this.texture != null) {
			this.arcsci.arcci.ArcGE_CanvasContext.drawImage(this.texture, wX, wY, this.width, this.height);
		}

		if(this.hitbox != null){
			this.hitbox.pos = new Point2D(wX, wY);

			if(this.hitbox.isHitboxColliding()){
				if(!this.hitbox.mode == Enums.HitboxModes.DETECTION){
					if(this.hitbox.mode == Enums.HitboxModes.DYNAMIC){
					switch(this.hitbox.collidingFace){
						case Enums.HitboxCollidingFaces.LEFT:
							this.pos.x -= this.hitbox.cX;
							break;
						case Enums.HitboxCollidingFaces.RIGHT:
							this.pos.x += this.hitbox.cX;
							break;
						case Enums.HitboxCollidingFaces.TOP:
							this.pos.y -= this.hitbox.cY;
							break;
						case Enums.HitboxCollidingFaces.BOTTOM:
							this.pos.y += this.hitbox.cY;
							break;
					}
					}else if(this.hitbox.mode == Enums.HitboxModes.STATIC){
						this.pos.x = this._prevPos.x;
						this.pos.y = this._prevPos.y;
					}
				}
			}
			else{
				this._prevPos = this.pos;
			}
		}
	}
}
