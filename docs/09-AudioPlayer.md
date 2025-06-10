# AudioPlayer Class
The `AudioPlayer` class can be used to play sounds in game.

**Here is how the AudioPlayer constructor looks:**
```js
export class AudioPlayer{
	constructor(arcsci){
		this.audio = document.createElement("audio");
	}

    ...

}
```

It has a `loadAudio()` function which takes the audio file path and a `play()` function taking the audio **Speed**, **Pitch Preserve State** and **Loop State** as parameter. It also has `pause()` and `stop()` functions.
