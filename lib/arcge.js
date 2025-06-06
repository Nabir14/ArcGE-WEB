export class ArcGE{
	static author = "Nabir14";
	static version = 0.1;
	ArcGE_Canvas = null;
	ArcGE_CanvasContext = null;
	constructor(canvasId){
		this.ArcGE_Canvas = document.getElementById(canvasId);
		this.ArcGE_CanvasContext = this.ArcGE_Canvas.getContext("2d");
	}
	destroy(){
		this.ArcGE_Canvas = null;
		this.ArcGE_CanvasContext = null;
	};
}

export class Scene2D extends ArcGE{
	constructor(){}
	pollEvent(){}
	clear(r, g, b, a){}
	render(){}
}

export class Rect2D extends Scene2D{
	constructor(){}
	setPos(x, y){}
	setTexture(texturePath){}
	draw(){}
}

export class Camera2D extends Scene2D{
	constructor(){}
	setPos(x, y){}
	view(scene){}
}

