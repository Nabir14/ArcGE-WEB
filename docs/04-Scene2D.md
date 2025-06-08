# Scene2D Class

The `Scene2D` class is used to define the **Game World**. It can be colored using the `setClearColor()` function and textured using the `setBackground()` function. The `render()` function has to be called within a **Game Loop**.

**Here is how the Scene2D consturctor looks:**
```js
export class Scene2D{
	constructor(arcci){
		this.arcci = arcci;
		this.r = 0;
		this.g = 0;
		this.b = 0;
		this.a = 0;
		this.texture = new Image();
		this.isTextureLoaded = false;
	}

    ...

```

The `Scene2D` class takes previously defined `ArcGE` class to use the **Canvas** and **Canvas Context**. It defines the `r`, `g`, `b` and `a` values to use it as its clear color. It defines the `texture` to use as background and the `isTextureLoaded` to decide if it can render a texture. It can now be passed to a object class like `Rect2D`.
