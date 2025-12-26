export class AudioPlayer{
	constructor(){
		this.audio = document.createElement("audio");
	}
	
	loadAudio(audioPath){
		this.audio.src = audioPath;
		this.audio.type = "audio/mpeg";
	}
	
	play(speed = 1.0, preservePitch = true, loop = false){
		this.audio.playbackRate = speed;
		this.audio.preservePitch = preservePitch;
		this.audio.loop = loop;
		this.audio.play();
	}
	
	pause(){
		this.audio.pause();
	}
	
	stop(){
		this.audio.stop();
	}
}
