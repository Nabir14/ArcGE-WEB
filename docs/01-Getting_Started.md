# Getting Started

**ArcGE-Web** uses Vanilla JavaScript and HTML Canvas to render graphics. Which makes it very lightweight.
In this page you will be setting up the environment.

## Installation:

To install the latest stable version of the library run:
```
npm install @arcge/arcge-web
```
or
If you want to install a specific version use:
```
npm install @arcge/arcge-web@version
```

**Note:** You can also clone the repo and copy the `arcge.js` to your project directory without installing `NodeJS`. Though it is recommended to use the `npm` method.


## Test:
Create a index.html in your project directory and paste the code below. Don't think much of this right now as in the following chapter everything will be explained in detail.

```html
<!DOCTYPE html>
<html>
	<head>
		<title>ArcGE</title>
	</head>
	<body>
		<canvas id="c" width="320" height="240" style="border: none"></canvas>
		<script type="module">
			import { ArcGE, Scene2D, Rect2D } from "@arcge/arcge-web";

			const engine = new ArcGE("c");
			const scene = new Scene2D(engine);

			engine.ArcGE_Canvas.width = window.innerWidth;
			engine.ArcGE_Canvas.height = window.innerHeight;
			scene.setClearColor(255, 255, 255, 255);
			scene.setBackground("https://raw.githubusercontent.com/Nabir14/ArcGE-WEB/refs/heads/main/arcge-web-icon.png");

			function loop(){
				scene.render();

				requestAnimationFrame(loop);
				}

				requestAnimationFrame(loop);
		
		</script>
        </body>
		
	</body>
</html>
```

Now start your server and if you see the **ArcGE-WEB** logo then you're ready to make **Your First 2D Game** using the Arc Game Library.
