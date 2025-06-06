export class ArcGE{
	static author = "Nabir14";
	static version = 0.1;
	constructor(canvasId){
		this.ArcGE_Canvas = document.getElementById(canvasId);
		this.ArcGE_CanvasContext = this.ArcGE_Canvas.getContext("2d");
	}
}

export class Scene2D{
	constructor(arcci){
		this.arcci = arcci;
	}
	pollEvent(){}
	clear(cR, cG, cB, cA){
		this.arcci.ArcGE_CanvasContext.clearRect(0, 0, this.arcci.ArcGE_Canvas.width, this.arcci.ArcGE_Canvas.height);
		this.arcci.ArcGE_CanvasContext.fillStyle= `rgba(${cR},${cG},${cB},${cA})`;
		this.arcci.ArcGE_CanvasContext.fillRect(0, 0, this.arcci.ArcGE_Canvas.width, this.arcci.ArcGE_Canvas.height);
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
	setTexture(texturePath){}
	draw(){
		this.arcsci.arcci.ArcGE_CanvasContext.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
		this.arcsci.arcci.ArcGE_CanvasContext.fillRect(this.x, this.y, this.width, this.height);
	}
}

export class Camera2D{
	constructor(){}
	setPos(x, y){}
	view(scene){}
}

