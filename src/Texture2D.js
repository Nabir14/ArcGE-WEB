export class Texture2D {
    constructor() {
        this.texture = new Image();
        this.isLoaded = false;
    }

    loadTexture(path) {
        this.texture.src = path;
        this.texture.onload = () => {
            this.isLoaded = true;
        };
    }
}