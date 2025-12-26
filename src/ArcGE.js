export class ArcGE {
	static author = "Nabir14";
	static version = "0.4.3";

	constructor(canvasId){
		this.ArcGE_Canvas = document.getElementById(canvasId);
		this.ArcGE_CanvasContext = this.ArcGE_Canvas.getContext("2d");
	}
	
	toggleFullscreen(){
		this.ArcGE_Canvas.width = window.innerWidth;
		this.ArcGE_Canvas.height = window.innerHeight;
	}
}
