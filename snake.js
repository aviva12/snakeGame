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
    food=getRandomFood();
    game_over=false;
    
    snake={
        init_len:2,
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
                pen.fillStyle="blue";
                pen.fillRect(this.cells[i].x*cs,this.cells[i].y*cs,cs-2,cs-2);
            }
        },
        updateSnake:function(){
            var headX = this.cells[0].x;
            var headY = this.cells[0].y;

            if(headX==food.x && headY==food.y){
                console.log("Food eaten");
                food = getRandomFood();
            }
            else
            {
                this.cells.pop();
            }
            
            var nextX,nextY;
            
            if(this.direction=="right")
            {
                nextX=headX+1;
                nextY=headY;
            }
            else if(this.direction=="left")
            {
                nextX=headX-1;
                nextY=headY;
            }
            else if(this.direction=="up")
            {
                nextX=headX;
                nextY=headY-1;
            }
            else
            {
                nextX=headX;
                nextY=headY+1;
            }
            this.cells.unshift({x:nextX,y:nextY});
            
            var last_x = Math.round(W/cs);
			var last_y = Math.round(H/cs);

			if(this.cells[0].y<0 || this.cells[0].x < 0 || this.cells[0].x > last_x || this.cells[0].y > last_y){
				game_over = true;
			}
        }
    }
    snake.createSnake();
    
    function keyPressed(e){
//        console.log(e.key);
        //condition check
        if(e.key=="ArrowRight")
        {
            snake.direction="right";
        }
        else if(e.key=="ArrowLeft")
        {
            snake.direction="left";       
        }
        else if(e.key=="ArrowUp")
        {
            snake.direction="up";       
        }
        else
        {
            snake.direction="down";  
        }
    }
    //add event listener
    document.addEventListener('keydown',keyPressed);
}

function getRandomFood(){

	var foodX = Math.round(Math.random()*(W-cs)/cs);
	var foodY = Math.round(Math.random()*(H-cs)/cs);

	var food = {
		x:foodX,
		y:foodY,
		color:"red",
	}
	return food

}

function draw(){
    pen.clearRect(0,0,W,H);
    snake.drawSnake();
    pen.fillStyle = food.color;
	pen.fillRect(food.x*cs,food.y*cs,cs,cs);
}

function update(){
    snake.updateSnake();
}

function gameloop(){
    if(game_over==true){
		clearInterval(f);
		alert("Game Over");
		return;
	}
    draw();
    update();
}

init();
f=setInterval(gameloop,100);