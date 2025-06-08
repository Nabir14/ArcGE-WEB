# Camera2D Class

The `Camera2D` is also a object. It can be used to explore big **Scenes**. The way it works is that it updates the `CameraRectX` and CameraRectY` in `Scene2D`. All rendered objects for example `Rect2D` uses it to calculate its world position when drawing itself.

**Here is how the Camera2D constructor looks:**

```js
export class Camera2D{
	constructor(arcsci, pX = 0, pY = 0){
		this.arcsci = arcsci;
		this.x = pX;
		this.y = pY;
	}

    ...

}
```

The `Camera2D` takes a `Scene2D` so it knows which **Scene** to render. It also takes in *optional* position when being initialized. The position of `Camera2D` can be changed using the `setPos()` function and it must be rendered using the `view()` function in a **Game Loop**.
