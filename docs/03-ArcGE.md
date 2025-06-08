# ArcGE Class

`ArcGE` class is the main **Engine** class that defines `Canvas` and `Canvas Context` aswell as the `KeyCodes` necessary for the `Event Queue`.

**Here is how the ArcGE class constructor looks:**
```js
export class ArcGE{
        
        ...

        constructor(canvasId){                                                        this.ArcGE_Canvas = document.getElementById(canvasId);
                this.ArcGE_CanvasContext = this.ArcGE_Canvas.getContext("2d");                                                                              this.KeyCode = {
                        KEY_A: 65, KEY_B: 66, KEY_C: 67, KEY_D: 68, KE
Y_E: 69,
                        KEY_F: 70, KEY_G: 71, KEY_H: 72, KEY_I: 73, KE
Y_J: 74,
                        KEY_K: 75, KEY_L: 76, KEY_M: 77, KEY_N: 78, KE
Y_O: 79,                                                                                      KEY_P: 80, KEY_Q: 81, KEY_R: 82, KEY_S: 83, KE
Y_T: 84,
                        KEY_U: 85, KEY_V: 86, KEY_W: 87, KEY_X: 88, KE
Y_Y: 89,
                        KEY_Z: 90, KEY_0: 48, KEY_1: 49, KEY_2: 50, KE
Y_3: 51,
                        KEY_4: 52, KEY_5: 53, KEY_6: 54, KEY_7: 55, KE
Y_8: 56,
                        KEY_9: 57, ESCAPE: 27, BACKSPACE: 8, ENTER: 13
, TAB: 9,
                        SHIFT: 16, CONTROL: 17, ALT: 18, CAPS_LOCK: 20
, LEFT: 37,
                        RIGHT: 39, UP: 38, DOWN: 40, SPACE: 32
                };
                this.ArcGE_EventQueue = {};
        }
    
    ...

}
```

The constructor takes `canvasId` and defines the Canvas as `ArcGE_Canvas` and the Canvas Context as `ArcGE_CanvasContext`. Then it defines `KeyCodes` and `ArcGE_EventQueue` for Event handling.

So this class is used for initializing the engine. After that it can be passed to a `Scene2D` class to be used for making games.
