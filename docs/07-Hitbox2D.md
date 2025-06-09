# Hitbox2D Class
The `Hitbox2D` class is used for collision detection. It uses a simple AABB (Axis Aligned Bounding Box) method to detect collision.

**Here is how the constructor of Hitbox2D Class looks:**
```js
export class Hitbox2D{
	constructor(arcsci, pX = 0, pY = 0, width = 0, height = 0){
		this.arcsci = arcsci;
		this.x = pX;
		this.y = pY;
		this.width = width;
		this.height = height;
		this.debugIsColliding = false;
		this.HBOXID = "";
		this.isDetectionOnly = false;
	}

    ...
    
}
```

The `Hitbox2D` class takes in almost the same parameters as the `Rect2D` class except the colors. It has a unique id as `HBOXID` and a `isDetectionOnly` variable to determine weather it will act as barrier or a collision trigger which should be set using `setDetectionMode()`. . The `debugIsColliding` is for debug view which can be enabled by calling the `drawDebugOutline()` function in **Game Loop**. Its position and size can be set using `setPos()` and `setSize()`.
