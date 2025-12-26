export class EventManager {
    constructor() {
		this.eventQueue = {};
    }
	
    queueEvents(){
		window.addEventListener('keydown', (ArcGE_Event) => {
			this.ArcGE_EventQueue[ArcGE_Event.keyCode] = true;
		});
		window.addEventListener('keyup', (ArcGE_Event) => {
			this.ArcGE_EventQueue[ArcGE_Event.keyCode] = false;
		});
	}
	
	checkKeyState(key){
		return (this.ArcGE_EventQueue[key] === true);
	}
}