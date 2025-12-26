import { Color } from "./Color";

export class Scene2D {
	constructor(arcci){
		this.arcci = arcci;
		this.color = new Color(0, 0, 0, 255);
		this.texture = null;
		this.isTextureLoaded = false;
		this.activeCamera = null;
		this.colliderQueue = {};
	}

	setActiveCamera(camera) {
		this.activeCamera = camera;
	}
	
	setBackground(texture){
		this.texture = texture;
	}
	
	setClearColor(color){
		this.color = color;
	}

	_clearScreen() {
		this.arcci.ArcGE_CanvasContext.clearRect(0, 0, this.arcci.ArcGE_Canvas.width, this.arcci.ArcGE_Canvas.height);
		this.arcci.ArcGE_CanvasContext.fillStyle= `rgba(${this.r},${this.g},${this.b}, 255)`;
		this.arcci.ArcGE_CanvasContext.fillRect(0, 0, this.arcci.ArcGE_Canvas.width, this.arcci.ArcGE_Canvas.height);
		if(this.isTextureLoaded){
			this.arcci.ArcGE_CanvasContext.drawImage(this.texture, 0, 0, this.arcci.ArcGE_Canvas.width, this.arcci.ArcGE_Canvas.height);
		}
	}

	render(...objects) {
		this._clearScreen();

		for (object in objects) {
			object._draw();
		}
	}
}
