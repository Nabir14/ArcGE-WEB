export class ArcGE{
	static author = "Nabir14";
	static version = "0.3.8";
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
		this.a = 0;
		this.texture = new Image();
		this.isTextureLoaded = false;
		this.CameraRectX = 0;
		this.CameraRectY = 0;
	}
	setBackground(texturePath){
		this.texture.src = texturePath;
		this.texture.onload = () => {
			this.isTextureLoaded = true
		}
	}
	setClearColor(cR, cG, cB, cA){
		this.r = cR;
		this.g = cG;
		this.b = cB;
		this.a = cA;
	}
	render(){
		this.arcci.ArcGE_CanvasContext.clearRect(0, 0, this.arcci.ArcGE_Canvas.width, this.arcci.ArcGE_Canvas.height);
		this.arcci.ArcGE_CanvasContext.fillStyle= `rgba(${this.r},${this.g},${this.b},${this.a})`;
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
		this.width = w;
		this.height = h;
		this.r = cR;
		this.g = cG;
		this.b = cB;
		this.a = cA;
		this.texture = new Image();
		this.isTextureLoaded = false;
	}
	setPos(pX, pY){
		this.x = pX;
		this.y = pY;
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
	draw(){
		let wX = this.x - this.arcsci.CameraRectX;
		let wY = this.y - this.arcsci.CameraRectY;
		this.arcsci.arcci.ArcGE_CanvasContext.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
		this.arcsci.arcci.ArcGE_CanvasContext.fillRect(wX, wY, this.width, this.height);
		if (this.isTextureLoaded === true){
			this.arcsci.arcci.ArcGE_CanvasContext.drawImage(this.texture, wX, wY, this.width, this.height);
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
