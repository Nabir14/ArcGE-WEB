export class ArcGE{
	static author = "Nabie14";
	static version = 0.1;
	ArcGE_Canvas = null;
	ArcGE_CanvasContext = null;
	constructor(canvasId){
		this.ArcGE_Canvas = document.getElementById(canvasId);
		this.ArcGE_CanvasContext = this.ArcGE_Canvas.getContext("2d");
	}
}
