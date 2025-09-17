export class ArcGE{
	static author = "Nabir14";
	static version = "0.4.2";
	constructor(canvasId){
		this.ArcGE_Canvas = document.getElementById(canvasId);
		this.ArcGE_CanvasContext = this.ArcGE_Canvas.getContext("2d");
		this.KeyCode = {
			KEY_A: 65, KEY_B: 66, KEY_C: 67, KEY_D: 68, KEY_E: 69,
			KEY_F: 70, KEY_G: 71, KEY_H: 72, KEY_I: 73, KEY_J: 74,
			KEY_K: 75, KEY_L: 76, KEY_M: 77, KEY_N: 78, KEY_O: 79,
			KEY_P: 80, KEY_Q: 81, KEY_R: 82, KEY_S: 83, KEY_T: 84,
			KEY_U: 85, KEY_V: 86, KEY_W: 87, KEY_X: 88, KEY_Y: 89,
			KEY_Z: 90, KEY_0: 48, KEY_1: 49, KEY_2: 50, KEY_3: 51,
			KEY_4: 52, KEY_5: 53, KEY_6: 54, KEY_7: 55, KEY_8: 56,
			KEY_9: 57, ESCAPE: 27, BACKSPACE: 8, ENTER: 13, TAB: 9,
			SHIFT: 16, CONTROL: 17, ALT: 18, CAPS_LOCK: 20, LEFT: 37,
			RIGHT: 39, UP: 38, DOWN: 40, SPACE: 32
		};
		this.ArcGE_EventQueue = {};
	}
	toggleFullscreen(){
		this.ArcGE_Canvas.width = window.innerWidth;
		this.ArcGE_Canvas.height = window.innerHeight;
	}
	queueEvents(){
		window.addEventListener('keydown', (ArcGE_Event) => {
			this.ArcGE_EventQueue[ArcGE_Event.keyCode] = true;
		});
		window.addEventListener('keyup', (ArcGE_Event) => {
			this.ArcGE_EventQueue[ArcGE_Event.keyCode] = false;
		});
	}
	checkKeyState(key){
		return (this.ArcGE_EventQueue[key] === true);
	}
}

export class Scene2D{
	constructor(arcci){
		this.arcci = arcci;
		this.r = 0;
		this.g = 0;
		this.b = 0;
		this.texture = new Image();
		this.isTextureLoaded = false;
		this.CameraRectX = 0;
		this.CameraRectY = 0;
		this.colliderQueue = {};
	}
	setBackground(texturePath){
		this.texture.src = texturePath;
		this.texture.onload = () => {
			this.isTextureLoaded = true
		}
	}
	setClearColor(cR, cG, cB){
		this.r = cR;
		this.g = cG;
		this.b = cB;
	}
	render(){
		this.arcci.ArcGE_CanvasContext.clearRect(0, 0, this.arcci.ArcGE_Canvas.width, this.arcci.ArcGE_Canvas.height);
		this.arcci.ArcGE_CanvasContext.fillStyle= `rgba(${this.r},${this.g},${this.b}, 255)`;
		this.arcci.ArcGE_CanvasContext.fillRect(0, 0, this.arcci.ArcGE_Canvas.width, this.arcci.ArcGE_Canvas.height);
		if(this.isTextureLoaded){
			this.arcci.ArcGE_CanvasContext.drawImage(this.texture, 0, 0, this.arcci.ArcGE_Canvas.width, this.arcci.ArcGE_Canvas.height);
		}
	}
}

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

export class AnimatedTexture2D{
	constructor(arcsci){
		this.arcsci = arcsci;
		this.spriteSheet = new Image();
		this.frameSizeX = 0;
		this.frameSizeY = 0;
		this.totalFrames = 0;
		this.currentFrame = 0;
		this.isSpriteSheetLoaded = false;
	}
	setSpriteSheet(spriteSheetPath, fSX, fSY){
		this.spriteSheet.src = spriteSheetPath;
		this.spriteSheet.onload = () => {
			this.isSpriteSheetLoaded = true;
			this.frameSizeX = fSX;
			this.frameSizeY = fSY;
			this.totalFrames = Math.floor(this.spriteSheet.width / this.frameSizeX);
		}
	}
	animate(speed = 1){
		if(this.isSpriteSheetLoaded === true){
			let tempCanvas = document.createElement("canvas");
			tempCanvas.width = this.frameSizeX;
			tempCanvas.height = this.frameSizeY;
			let tempCanvasContext = tempCanvas.getContext("2d");
			let currentFrameX = this.frameSizeX * this.currentFrame;
			tempCanvasContext.drawImage(this.spriteSheet, currentFrameX, 0, this.frameSizeX, this.frameSizeY, 0, 0, this.frameSizeX, this.frameSizeY);
			this.currentFrame += speed;
			if(this.currentFrame >= this.totalFrames){
				this.currentFrame = 0;
			}
			return tempCanvas.toDataURL();
		}
	}
}

export class AudioPlayer{
	constructor(arcsci){
		this.audio = document.createElement("audio");
	}
	loadAudio(audioPath){
		this.audio.src = audioPath;
		this.audio.type = "audio/mpeg";
	}
	play(speed = 1.0, preservePitch = true, loop = false){
		this.audio.playbackRate = speed;
		this.audio.preservePitch = preservePitch;
		this.audio.loop = loop;
		this.audio.play();
	}
	pause(){
		this.audio.pause();
	}
	stop(){
		this.audio.stop();
	}
}
