class TextGame {
    constructor() {
        this.textBarController = new TextBarController();
        this.canvasController = new CanvasController();
        this.branchManager = new BranchManager();
        this.currentBranch = Branch.RootBranch;
        this.currentPageIndex = 0;
    }
    
    get textBarController() { return this.textBarController; }
    get canvasController() { return this.canvasController; }

    //branch: Branch
    addBranch(branch) {
        this.branchManager.addBranch(branch);
    }

    //branchName: String, return: Branch
    removeBranch(branchName) {
        return this.branchManager.removeBranch(branchName);
    }

    start() {
        this.textBarController.initTextBar();
        this.canvasController.initCnavas();
    }

    nextPage() {
        let branch = this.currentBranch;

        //currentPage: Page
        let currentPage = this.currentBranch.pages[currentpageindex];
        //currentEvents: BaseEvent[]
        let currentEvents = currentPage.pages[currentpageindex].event;
        
        this.eventProcess(currentEvents);

        currentPageIndex += 1;            
        if (currentBranch.pages.count == this.currentPageIndex) {
            //end
        } 
    }

    //baseEvent: BaseEvent[]
    eventProcess(baseEvent){
        //item: BaseEvent 
        baseEvent.forEach(item => {
            switch (item) {
                case EventType.TextBar:
                    this.textBarProcess(item);
                    break;

                case EventType.Canvas:
                    this.canvasProcess(item);
                    break;

                case EventType.Delay:
                            
                    break;
            
                default:
                    break;
            }
        });
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
                    this.canvasController.endScreen("END (Error)");
                    return;
                } else {
                    let jumpBranch = this.branchManager.getBranch(jumpBranchName);
                    if (jumpBranchName === null) {
                        this.canvasController.endScreen("END (Error)");
                        return;
                    } else {
                        this.currentBranch = jumpBranch;
                        this.currentPageIndex = 0;
                    }
                }
                break;
        
            default:
                break;
        }
    }

    //canvasEvent: CanvasEvent
    canvasProcess(canvasEvent) {

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
        //events: BaseEvent[]
        this.events = [];
    }

    //baseEvent: BaseEvent
    addEvent(baseEvent) {
        events.push(baseEvent);
    }

    //baseEvent: BaseEvent
    removeEvent(baseEvent) {
        events.push(baseEvent);
    }

    get events() { return this.events; }
}

class BaseEvent {
    //eventType: EventType
    constructor(eventType) {
        //eventType: EventType
        this.eventType = eventType;
    }

    //return: EventType
    get eventType() { return this.eventType; }
}

class TextBarEvent extends BaseEvent {
    //textBarEventType: TextBarEventType, eventData: any
    constructor(textBarEventType, eventData) {
        super(EventType.TextBar);
        //textBarEventType: TextBarEventType
        this.textBarEventType = textBarEventType;
        //eventData: any
        this.eventData = eventData;
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
    get textBarEventType() { return this.textBarEventType; }
}

class TextPair {
    //name: String, text: String
    constructor(name, text) {
        this.name = name;
        this.text = text;
    }   

    //return: String
    get name() { return this.name; }
    
    //return: String
    get text() { return this.text; }
}

class BranchPair {
    //name: String, branch: Branch
    constructor(name, branch) {
        this.name = name;
        this.branch = branch;
    }   

    //return: String
    get name() { return this.name; }
    
    //return: Branch
    get branch() { return this.branch; }
}

class CanvasEvent extends BaseEvent {
    //canvasEventType: CanvasEventType
    constructor(canvasEventType, eventData) {
        super(EventType.Canvas);
        this.canvasEventType = canvasEventType;
        this.eventData = eventData;
    }

    static addImage() { 

    }
}

class ImagePair {
    constructor(name, src, positon, transition) {
        this.name = name;
        this.src = src;
        this.positon = positon;
        this.transition = transition;
    }

    get name() { return this.name; }
    get src() { return this.src; }
    get positon() { return this.positon; }
    get transition() { return this.transition; }
}

class BackGroundPair {
    constructor(src) {
        this.src = src;
    }

    get src() { return this.src; }
}

class DrawTextPair {
    constructor(name, text, positon) {
        this.name = name;
        this.text = text;
        this.positon = positon;
    }

    get name() { return this.name; }
    get text() { return this.text; }
    get positon() { return this.positon; }
}

class RemoveObjectPair{
    constructor(name) {
        this.name = name;
    }
    get name() { return this.name; }
}

class DelayEvent extends BaseEvent {
    //delay: Number
    constructor(delay) {
        super(EventType.Delay);
        this.delay = delay;
    }

    static delay(delay) {
        return new DelayEvent(delay);
    }

    get delay() { return this.delay; }
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
        this.objects = [];
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

class BranchManager{
    constructor() {
        this.branches = [];
    }
    
    //branch: Branch
    addBranch(branch) {
        this.branches.push(branch);
    }

    //branchName: String, return: Branch
    removeBranch(branchName) {
        return this.branches.find(branch => branch.name == branchName);
    }

    //branchName: String, return: Branch
    getBranch(branchName) {
        return this.branches.find(branch => branch.name == branchName);
    }
}

class Branch {
    //branchName: String, endingText: String
    constructor(branchName, endingText) {
        this.branchName = branchName;
        this.endingText = endingText;
        //pages: Page[]
        this.pages = [];
    }

    //baseEvent: Page
    addPage(baseEvent) {
        this.pages.push(baseEvent);
    }

    //return: Page
    removePage() {
        return this.pages.pop();
    }

    //return: String
    get branchName() { return this.branchName; }
    //return: String
    get endingText() { return this.endingText; }
    //return: Page[]
    get pages() { return this.pages; }

    //Rootbranch: Branch
    static RootBranch = new Branch("root", "END");
}