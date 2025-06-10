# AnimatedTexture2D

The `AnimatedTexture2D` can be used to create animated textures on object. It takes a vertical spritesheet and returns a single frame based on the animation logic. It must be assigned as a texture to an Object in the **Game Loop** after the object has drawn.

**Here is how the AnimatedTexture2D constructor looks:**
```js
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

    ...

}
```

The `AnimatedTexture2D` class has a `setSpriteSheet()` function which can he used to set the **Sprite Sheet**. It takes the spritesheet file path and the size of a single frame in the spritesheet as its parameter. It can be then assigned to a object as a texture by passing it calling the `animate()` funcion. This must be done in the **Game Loop** after the target object has been drawn.
