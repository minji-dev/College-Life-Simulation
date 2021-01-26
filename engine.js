class TextGame {
    constructor() {
        this._textBarController = new TextBarController();
        this._canvasController = new CanvasController();
        this._soundController = new SoundController();
        this._branchManager = new BranchManager();
        this._currentBranch = new Branch("Root", "END");
        this._currentPageIndex = 0;
        this._delaytimer = null;
    }
    
    get textBarController() { return this._textBarController; }
    get canvasController() { return this._canvasController; }

    //branch: Branch
    addBranch(branch) {
        this._branchManager.addBranch(branch);
    }

    //branchName: String, return: Branch
    removeBranch(branchName) {
        return this._branchManager.removeBranch(branchName);
    }

    setEle

    //entryBranch: Branch
    start(entryBranch) {
        this._currentBranch = entryBranch;
        this.nextPage();
    }

    nextPage() {
        if (this._currentBranch.pages[this._currentPageIndex].baseEvents.find(b => {
            b.eventType === EventType.TextBar && b.textBarEventType === TextbarEventType.Branch
        }))
            return;

        if (this._currentBranch.pages.length < this._currentPageIndex)
            return;

        if (this._delaytimer !== null)
            clearTimeout(this._delaytimer);
        
        //currentPage: Page
        let currentPage = this._currentBranch.pages[this._currentPageIndex];
        //currentEvents: BaseEvent[]
        let currentEvents = currentPage.baseEvents;
        
        this.eventProcess(currentEvents);

        this._currentPageIndex += 1;            
        if (this._currentBranch.pages.length <= this._currentPageIndex) {
            if(this._currentBranch._end === null)
                this._canvasController.endScreen("END (Error)"); 
            else {
                this._currentBranch = this._currentBranch._end;
                this._currentPageIndex = 0;
            }
        } 
    }

    //baseEvent: BaseEvent[]
    eventProcess(baseEvent){
        //item: BaseEvent 
        for (let index = 0; index < baseEvent.length; index++) {
            const item = baseEvent[index];
            switch (item) {
                case EventType.TextBar:
                    this.textBarProcess(item);
                    break;

                case EventType.Canvas:
                    this.canvasProcess(item);
                    break;

                case EventType.Sound:
                    this.soundProcess(item);
                    break;

                case EventType.Delay:
                    this.delayProcess(item, index);
                    return;
            
                default:
                    break;
            }
        }
    }

    //textBarEvent: TextBarEvent
    textBarProcess(textBarEvent) {
        switch (textBarEvent.textBarEventType) {
            case TextBarEventType.Text:
                textBarController.setText(textBarEvent.eventData.name, textBarEvent.eventData.text);
                break;

            case TextBarEventType.Branch:
                let branchResult = textBarController.showBranch(textBarEvent.eventData.filter(function(x) { return x.name }));
                
                let jumpBranchName = textBarEvent.eventData.find(function(item) { return item === branchResult });
                if (jumpBranchName === null) {
                    this._canvasController.endScreen("END (Error)");
                    return;
                } else {
                    let jumpBranch = this._branchManager.getBranch(jumpBranchName);
                    if (jumpBranchName === null) {
                        this._canvasController.endScreen("END (Error)");
                        return;
                    } else {
                        this._currentBranch = jumpBranch;
                        this._currentPageIndex = 0;
                    }
                }
                break;
        
            default:
                break;
        }
    }

    //canvasEvent: CanvasEvent
    canvasProcess(canvasEvent) {
        switch (canvasEvent.canvasEventType) {
            case CanvasEventType.AddImage:
                this._canvasController.imageShow(
                    canvasEvent._eventData.name, 
                    canvasEvent._eventData.src, 
                    canvasEvent._eventData.positon, 
                    canvasEvent._eventData.transition
                );
                break;

            case CanvasEventType.ChangeBackGround:
                this._canvasController.setBackground(
                    canvasEvent._eventData.src
                );
                break;

            case CanvasEventType.DrawText:
                this._canvasController.drawtext(
                    canvasEvent._eventData.text
                );
                break;

            case CanvasEventType.RemoveObject:
                this._canvasController.imageRemove(
                    canvasEvent._eventData.name, 
                    canvasEvent._eventData.transition
                );
                break;

            default:
                break;
        }
    }
    
    //soundEvent: SoundEvent
    soundProcess(soundEvent) {
        switch (soundEvent) {
            case SoundEventType.Background:
                if (soundEvent.stop === true)
                    this._soundController.stopBackground();
                else
                    this._soundController.playBackground(soundEvent.src);
                break;
                
            case SoundEventType.Sfx:
                this._soundController.playSound(soundEvent.src)
                break;
        
            default:
                break;
        }
    }
    
    //delayEvent: DelayEvent, index: Number
    delayProcess(delayEvent, index) {
        this._delaytimer = setTimeout(() => {
            for (let innerIndex = index + 1; innerIndex < baseEvent.length; innerIndex++) {
                const item = array[innerIndex];
                switch (item) {
                    case EventType.TextBar:
                        this.textBarProcess(item);
                        break;
    
                    case EventType.Canvas:
                        this.canvasProcess(item);
                        break;
    
                    case EventType.Delay:
                        this.delayProcess(item, innerIndex);
                        return;
                
                    default:
                        break;
                }
            }
        }, delayEvent.delay);
    }
}

//EventType: Number
const EventType = {
	TextBar: 0,
    Canvas: 1,
    Sound: 2,
    Delay: 3
}

//TextbarEventType: Number
const TextbarEventType = {
	Text: 0,
	Branch: 1
}

//CanvasEventType: Number
const CanvasEventType = {
	AddImage: 0,
    ChangeBackGround: 1,
    DrawText: 2,
    ShowEnding: 3,
    RemoveObject: 4
}

class Page {
    constructor() {
        //baseEvents: BaseEvent[]
        this._baseEvents = [];
    }

    //baseEvent: BaseEvent, return: Page
    addEvent(baseEvent) {
        this._baseEvents.push(baseEvent);
        return this;
    }
    
    //name: String, text: String, return: Page
    addTextEvent(name, text) {
        this.addEvent(TextBarEvent.text(name, text));
        return this;
    }

    //src: String, return: Branch
    addBackbroundEvent(src){
        this.addEvent(CanvasEvent.changeBackGround(src));
        return this;
    }

    //baseEvent: BaseEvent, return: Page
    removeEvent(baseEvent) {
        this._baseEvents.push(baseEvent);
        return this;
    }

    get baseEvents() { return this._baseEvents; }
}

class BaseEvent {
    //eventType: EventType
    constructor(eventType) {
        //eventType: EventType
        this._eventType = eventType;
    }

    //return: EventType
    get eventType() { return this._eventType; }
}

class TextBarEvent extends BaseEvent {
    //textBarEventType: TextBarEventType, eventData: any
    constructor(textBarEventType, eventData) {
        super(EventType.TextBar);
        //textBarEventType: TextBarEventType
        this._textBarEventType = textBarEventType;
        //eventData: any
        this._eventData = eventData;
    }

    //name: String, text: String, return: TextBarEvent
    static text(name, text) {
        return new TextBarEvent(TextbarEventType.Text, new TextPair(name, text));
    }

    //branchPairs: BranchPair[], return: TextBarEvent
    static branch(branchPairs) {
        return new TextBarEvent(TextbarEventType.Branch, branchPairs);
    }

    //return: TextbarEventType
    get textBarEventType() { return this._textBarEventType; }
}

class TextPair {
    //name: String, text: String
    constructor(name, text) {
        this._name = name;
        this._text = text;
    }   

    //return: String
    get name() { return this._name; }
    
    //return: String
    get text() { return this._text; }
}

class BranchPair {
    //name: String, branch: Branch
    constructor(name, branch) {
        this._name = name;
        this._branch = branch;
    }   

    //return: String
    get name() { return this._name; }
    
    //return: Branch
    get branch() { return this._branch; }
}

class CanvasEvent extends BaseEvent {
    //canvasEventType: CanvasEventType
    constructor(canvasEventType, eventData) {
        super(EventType.Canvas);
        this._canvasEventType = canvasEventType;
        this._eventData = eventData;
    }

    //return: CanvasEvent
    static addImage(name, src, position, transition) { 
        return new CanvasEvent(
            CanvasEventType.AddImage, 
            new ImagePair(name, src, position, transition)
        );
    }

    //return: CanvasEvent
    static changeBackGround(src) { 
        return new CanvasEvent(
            CanvasEventType.ChangeBackGround, 
            new BackGroundPair(src)
        );
    }

    //return: CanvasEvent
    static drawText(text) { 
        return new CanvasEvent(
            CanvasEventType.DrawText, 
            new DrawTextPair(text)
        );
    }
    
    //return: CanvasEvent
    static showEnding(text) {
        return new CanvasEvent(
            CanvasEventType.ShowEnding,
            new DrawTextPair(text)
        );
    }

    //return: CanvasEvent
    static removeObject(name, transition) { 
        return new CanvasEvent(
            CanvasEventType.RemoveObject,
            new RemoveObjectPair(name, transition)
        );
    }

    get canvasEventType() { return this._canvasEventType; }
}

class ImagePair {
    //name: String, src: String, position: modelPosition transition: String
    constructor(name, src, positon, transition) {
        this._name = name;
        this._src = src;
        this._positon = positon;
        this._transition = transition;
    }

    get name() { return this._name; }
    get src() { return this._src; }
    get positon() { return this._positon; }
    get transition() { return this._transition; }
}

class BackGroundPair {
    //src: String
    constructor(src) {
        this._src = src;
    }

    get src() { return this._src; }
}

class DrawTextPair {
    //text: String
    constructor(text) {
        this._text = text;
    }

    get text() { return this._text; }
}

class RemoveObjectPair {
    //name: String
    constructor(name, transition) {
        this._name = name;
        this._transition = transition;
    }
    get name() { return this._name; }
    get transition() { return this._transition; }
}

//SoundEventType: Number
const SoundEventType = {
    Background: 0,
    Sfx: 1
}

class SoundEvent extends BaseEvent {
    //src: String, soundEventType: SoundEventType, stop: bool
    constructor(src, soundEventType, stop) {
        super(EventType.Sound);
        this._src = src;
        this._stop = stop;
    }

    static background(src) {
        return new SoundEvent(src, SoundEventType.Background, false);
    }

    static stopbackground() {
        return new SoundEvent(null, SoundEventType.Background, true);
    }

    static sfx(src) {
        return new SoundEvent(src, SoundEventType.Sfx, false);
    }

    get src() { return this._src; }
    get stop() { return this._stop; }
}

class DelayEvent extends BaseEvent {
    //delay: Number
    constructor(delay) {
        super(EventType.Delay);
        this._delay = delay;
    }

    static delay(delay) {
        return new DelayEvent(delay);
    }

    get delay() { return this._delay; }
}

class TextBarController {
    constructor() {
        this._chatBox = null;
        this._nameBox = null;
    }

    //chatBox: HTMLElement, nameBox: HTMLElement
    initTextBar(chatBox, nameBox) {
        this._chatBox = chatBox;
        this._nameBox = nameBox;
    }

    //name: String, text: String
    setText(name, text) { 
        //const chatBox = document.getElementById("chatBox");
        if(name == null) {
            this._nameBox.style.visibility = "hidden";
            this._nameBox.innerHTML = "";
        } else{
            this._nameBox.style.visibility = "visible";
            this._nameBox.innerHTML = name;
        }

        this._chatBox.innerHTML = text;
        
    }

    //options: String[], return: String
    showBranch(options) { 
        let button = [];
        let label = [];
        let text = [];
        for(let i = 0; i < options.length; i++){
            label[i] = document.createElement('label');
            button[i] = document.createElement('button');
            text[i] = document.createElement('span');
            this._chatBox.appendChild(label[i]);
            label[i].appendChild(button[i]);
            label[i].appendChild(text[i]);
            label[i].appendChild(document.createElement('br'));
            label[i].appendChild(document.createElement('br'));
            text[i].innerHTML = "→" + options[i];
            
            eventlistener(i).then(function(resolvedData) {
                console.log(resolvedData);
              });
        }
        function eventlistener(i) {
            return new Promise(function(resolve, reject) {
                button[i].addEventListener('click', function(event) {
                    resolve(options[i]);
                }, false);
            })
        }
    }

    clearTextBar() {
        while(this._chatBox.hasChildNodes()){
            this._chatBox.removeChild(this._chatBox.firstChild);
        }
        this._nameBox.style.visibility = "hidden";
        this._nameBox.innerHTML = "";
    }
}

//imageShowType: Number
const imageShowType = {
	Appear: 0,
    FadeIn: 1
}

//imageHideType: Number
const imageHideType = {
	Disappear: 0,
    FadeOut: 1
}

//modelPosition: Number
const modelPosition = {
    left: 0,
    center: 1,
    right: 2
}

class CanvasController {
    constructor() {
        this._canvasImg = null;
        this._leftImg = null;
        this._centerImg = null;
        this._rightImg = null;
    }

    //canvasImg: HTMLElement, leftImg: HTMLElement, centerImg: HTMLElement, rightImg: HTMLElement
    initCanvas(canvasImg, leftImg, centerImg, rightImg) {
        this._canvasImg = canvasImg;
        this._leftImg = leftImg;
        this._centerImg = centerImg;
        this._rightImg = rightImg;
        let img = document.getElementById('canvasDiv').getElementsByClassName('img');
        for(let i = 0; i < 3; i++){
            img[i].style.opacity = 0;
        }
    }
    //name: String, src: String, positon: modelPosition transition: imageShowType
    imageShow(name, src, position, transition) { // 
        let img;
        if(position === 0) {
            img = this._leftImg;
        }
        else if(position === 1) {
            img = this._centerImg;
        }
        else if(position === 2) {
            img = this._rightImg;
        }
        img.src = "images/characters/" + src + ".jpeg";
        img.className = name;
        if(transition === 1){
            
            img.style.transition = '2s';
            img.style.opacity = '1';
            //img.classList.add("show");
        }
        else{
            img.style.transition = 'all 0s';
            img.style.opacity = '1';
            //img.classList.add("showImmediately");
        }

    }
    
    //name: String, transition: imageHideType
    imageRemove(name, transition) { 
        //name으로 이미지를 지울수 있음
        let img = document.getElementById('canvasDiv').getElementsByClassName(name)[0];
        img.className = name;
        if(transition === 1) {
            img.style.transition = 'all 2s';
            img.style.opacity = '0';
            //img.classList.add("hide");
        }
        else{
            img.style.transition = 'all 0s';
            img.style.opacity = '0';
            //img.classList.add("hideImmediately");
        }
    }

    //src: String
    setBackground(src) {
        this._canvasImg.src = "images/backgrounds/" + src + ".jpeg";
    }

    //text: String
    drawtext(text){ //null 넣으면 지워짐
        if(text === null){
            this._chatBox.innerHTML = "";
            return;
        }
        this._chatBox.innerHTML = text;
    }

    //text: String
    endScreen(text) {
        //엔딩화면은 그냥 텍스트 띄우는 함수로 따로 만듬
    }
}

class BranchManager {
    constructor() {
        this._branches = [];
    }
    
    //branch: Branch
    addBranch(branch) {
        this._branches.push(branch);
    }

    //branchName: String, return: Branch
    removeBranch(branchName) {
        return this._branches.find(branch => branch.name == branchName);
    }

    //branchName: String, return: Branch
    getBranch(branchName) {
        return this._branches.find(branch => branch.name == branchName);
    }
}

class Branch {
    //branchName: String, end: Branch
    constructor(branchName, end) {
        this._branchName = branchName;
        this._end = end;
        //pages: Page[]
        this._pages = [];
    }

    //page: Page, return: Branch
    addPage(page) {
        this._pages.push(page);
        return this;
    }

    //name: String, text: String, return: Branch
    addTextPage(name, text) {
        this.addPage(new Page().addEvent(TextBarEvent.text(name, text)));
        return this;
    }

    //src: String, return: Branch
    addBackbroundPage(src){
        this.addPage(new Page().addEvent(CanvasEvent.changeBackGround(src)));
        return this;
    }

    //baseEvents: BaseEvent[]
    addEventsAsPage(baseEvents) {
        let page = new Page();
        baseEvents.forEach(element => {
            page.addEvent(element);
        });
        this.addPage(page);
        return this;
    }

    //text: String
    addEndingAsPage(text) {
        this.addPage(new Page().addEvent(CanvasEvent.showEnding(text)));
    }

    //return: Page
    removePage() {
        return this._pages.pop();
    }

    //return: String
    get branchName() { return this._branchName; }
    //return: String
    get end() { return this._end; }
    //return: Page[]
    get pages() { return this._pages; }
}

class SoundController {
    constructor() {
        this._backgroundSound = null;
        this._activeSound = null;
    }

    initSound(backgroundSound, activeSound) {
        this._backgroundSound = backgroundSound;
        this._activeSound = activeSound;
    }

    //src: String
    playBackground(src) {
        this._backgroundSound.src = src;
    }

    stopBackground() {
        this._backgroundSound.src = "";
    }

    //src: String
    playSound(src) {
        this._activeSound.src = src;
    }
}