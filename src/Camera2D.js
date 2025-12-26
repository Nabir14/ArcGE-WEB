import { Point2D } from "./Point2D";

export class Camera2D {
	constructor(pos){
		this.pos = pos;
	}

	setPos(pos){
		this.pos = pos;
	}
	
	getPos(){
		return this.pos;
	}
}
