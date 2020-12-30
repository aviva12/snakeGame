//dom
//document object model
//js can access any element present on the webpage by traversing this dom


function init()
{
    var canvas=document.getElementById('mycanvas');
    W=canvas.width=500;
    H=canvas.height=500;
    //canvas is used to draw graphics using javascript
    pen=canvas.getContext('2d');
    rect={
        x:20,
        y:20,
        w:50,
        h:50,
        speed:10,
    }
}

function draw(){
    pen.clearRect(0,0,W,H);
    pen.fillStyle="red";
    pen.fillRect(rect.x,rect.y,rect.w,rect.h);
}

function update(){
    rect.x+=rect.speed;
    if(rect.x>W-rect.w||rect.x<0)
    {
        rect.speed*=-1;
    }
}

function gameloop(){
    console.log("In game loop");
    draw();
    update();
}

init();
f=setInterval(gameloop,100);