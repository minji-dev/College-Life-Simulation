const img = new Image();

function start(){
    draw('test');
    const chatBox = document.createElement('div');
    const canvas = document.getElementById('canvas'); 
    document.body.appendChild(chatBox);
    chatBox.style.left = '10vw';
    chatBox.style.top = '35vw';
    chatBox.style.width='80vw';
    chatBox.style.height='15vw';
    chatBox.style.position = 'absolute';
    chatBox.style.zIndex="1000";
    
    chatBox.style.padding = '30px';
    chatBox.style.backgroundColor = rgba( 255, 255, 255, 0.5 );
    chatBox.innerHTML = "hello world"

    canvas.appendChild('chatBox');
}

let memorize;
function draw(source){
    memorize = source;
    img.addEventListener('load', () => {
        const ctx = document.getElementById('canvas').getContext("2d");
        ctx.drawImage(img, 0, 0, 1920, 1080);
    },false);
    img.src = 'images/' + source + '.jpeg';
    console.log(source);
}

function interaction(c){
    draw(interactionList[memorize].choice[c]);
}

const interactionList = {
    main : {
        choice : ['second'],
        interaction : "hello world"
    }
};