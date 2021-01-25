import React from 'react';

class TextGame {
    constructor() {
        this._textBarController = new TextBarController();
        this._canvasController = new CanvasController();
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

    start() {
        this._textBarController.initTextBar();
        this._canvasController.initCnavas();
    }

    nextPage() {
        if (this._currentBranch.pages[currentpageindex].baseEvents.find(b => {
            b.eventType === EventType.TextBar && b.textBarEventType === TextbarEventType.Branch
        }))
            return;
        
        if (_delaytimer !== null)
            clearTimeout(this._delaytimer);
        
        let branch = this._currentBranch;

        //currentPage: Page
        let currentPage = this._currentBranch.pages[currentpageindex];
        //currentEvents: BaseEvent[]
        let currentEvents = currentPage.baseEvents;
        
        this.eventProcess(currentEvents);

        currentPageIndex += 1;            
        if (currentBranch.pages.length == this._currentPageIndex) {
            this._canvasController.endScreen("END (Error)");
        } 
    }

    //baseEvent: BaseEvent[]
    eventProcess(baseEvent){
        //item: BaseEvent 
        for (let index = 0; index < baseEvent.length; index++) {
            const item = array[index];
            switch (item) {
                case EventType.TextBar:
                    this.textBarProcess(item);
                    break;

                case EventType.Canvas:
                    this.canvasProcess(item);
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
        switch (canvasEvent.textBarEventType) {
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
    Delay: 2
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
    RemoveObject: 3
}

class Page {
    constructor() {
        //baseEvents: BaseEvent[]
        this._baseEvents = [];
    }

    //baseEvent: BaseEvent
    addEvent(baseEvent) {
        this._baseEvents.push(baseEvent);
    }

    //baseEvent: BaseEvent
    removeEvent(baseEvent) {
        this._baseEvents.push(baseEvent);
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

    //name: String, text: String
    static text(name, text) {
        new TextBarEvent(TextbarEventType.Text, new TextPair(name, text));
    }

    //branchPairs: BranchPair[]
    static branch(branchPairs) {
        new TextBarEvent(TextbarEventType.Branch, branchPairs);
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
    static addImage() { 
        return new CanvasEvent(CanvasEventType.AddImage, new ImagePair(name, src, position, transition));
    }

    //return: CanvasEvent
    static changeBackGround() { 

    }

    //return: CanvasEvent
    static drawText() { 

    }

    //return: CanvasEvent
    static removeObject() { 

    }
}

class ImagePair {
    //name: String, src: String, position: ???, transition: String
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
    //name: String, text: String, positon: ???
    constructor(name, text, positon) {
        this._name = name;
        this._text = text;
        this._positon = positon;
    }

    get name() { return this._name; }
    get text() { return this._text; }
    get positon() { return this._positon; }
}

class RemoveObjectPair {
    //name: String
    constructor(name) {
        this._name = name;
    }
    get name() { return this._name; }
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
    }

    initTextBar() {

    }

    //name: String, text: String
    setText(name, text) {

    }

    //options: String, return: String
    showBranch(options) {
        
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

class CanvasController {
    constructor() {
    }

    initCnavas() {

    }

    //name: String, src: String, positon: ???, transition: imageShowType
    imageShow(name, src, positon, transition) { 

    }
    
    //name: String, transition: imageHideType
    imageRemove(name, transition) { 

    }

    //text: String
    endScreen(text) {
        
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
    //branchName: String, endingText: String
    constructor(branchName, endingText) {
        this._branchName = branchName;
        this._endingText = endingText;
        //pages: Page[]
        this._pages = [];
    }

    //baseEvent: Page
    addPage(baseEvent) {
        this._pages.push(baseEvent);
    }

    //return: Page
    removePage() {
        return this._pages.pop();
    }

    //return: String
    get branchName() { return this._branchName; }
    //return: String
    get endingText() { return this._endingText; }
    //return: Page[]
    get pages() { return this._pages; }
}