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
                pen.fillStyle="red";
                pen.fillRect(this.cells[i].x*cs,this.cells[i].y,cs-2,cs);
            }
        },
        updateSnake:function(){
            this.cells.pop();
            
            var headX=this.cells[0].x;
            var headY=this.cells[0].y;
            var X=headX+1;
            var Y=headY;
            this.cells.unshift({x:X,y:Y});
        }
    }
    snake.createSnake();
}

function draw(){
    pen.clearRect(0,0,W,H);
    snake.drawSnake();
}

function update(){
    snake.updateSnake();
}

function gameloop(){
    draw();
    update();
}

init();
f=setInterval(gameloop,100);