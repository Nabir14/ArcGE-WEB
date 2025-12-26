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
