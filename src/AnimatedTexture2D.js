export class AnimatedTexture2D{
	constructor(){
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
