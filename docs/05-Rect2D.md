# Rect2D Class

The `Rect2D` class is a object class and is used to define objects in games. `Rect2D` has a `setColor()` function to set color and `setTexture()` function to set an image as **texture**. It has a `draw()` function which must be called in the **Game Loop** to render the rect.

```js
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

    ...

}
```
The `Rect2D` takes `Scene2D` which determines on which **Scene** or **Level** will this be rendered in. It defines it's `x`, `y` position and `width`, **height** of its **rect** as 0 by default. It then defines its `r`, `g`, `b` and `a` values to use as its color and `texture` to use as its texture. The `isTextureLoaded` variable decides weather the object can draw texture or not.


