//dom
//document object model
//js can access any element present on the webpage by traversing this dom

function init()
{
    var canvas=document.getElementById('mycanvas');
    W=canvas.width=600;
    H=canvas.height=600;
    //canvas is used to draw graphics using javascript
    pen=canvas.getContext('2d');
    cs=65;
    snake={
        init_len:5,
        color:"blue",
        cells:[],
        direction:"right",
        createSnake:function(){
            for(var i=this.init_len;i>0;i--)
            {
                this.cells.push({x:i,y:0});
            }
        },
        drawSnake:function(){
            for(var i=0;i<this.cells.length;i++)
            {
                pen.fillRect(this.cells[i].x*cs,this.cells[i].y,cs-2,cs);
            }
        }
    }
    snake.createSnake();
}

function draw(){
    snake.drawSnake();
}

function update(){
//    rect.x+=rect.speed;
//    if(rect.x>W-rect.w||rect.x<0)
//    {
//        rect.speed*=-1;
//    }
}

function gameloop(){
    draw();
    update();
}

init();
f=setInterval(gameloop,100);