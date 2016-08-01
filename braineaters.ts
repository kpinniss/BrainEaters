//create and render canvas
let canvas : HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
//set images
//background
let background = <HTMLImageElement>document.getElementById("background");
//images
let wizard = <HTMLImageElement>document.getElementById("wizard");
//zombie
let zombie = <HTMLImageElement>document.getElementById("mob");
//magicBolt
let lifeImg = <HTMLImageElement>document.getElementById("heart");
//door
let door = <HTMLImageElement>document.getElementById("door");

//main loop to redraw canvas at 60fps
function gameLoop(): void
{
  requestAnimationFrame(gameLoop);
  // ctx.fillStyle = "black";
  // ctx.fillRect(0, 0, 800, 500);

  ctx.drawImage(background, 0, 0, 750 ,550);
//draw life sprite
  life1.draw();
  life2.draw();
  life3.draw();
//draw door sprite
  door4.draw();
  door1.draw();
  door2.draw();
  door3.draw();
//draw player and enemy sprite
  player.draw();
  zomb1.draw();
   zomb2.draw();
   zomb3.draw();
   zomb4.draw();
//funtions on load
  moveZomb(zomb2,zomb3,zomb4);
  playerCollsionBoarder(player,canvas);
  playerZombieCol(player,zomb1, canvas, life1, life2, life3);

}

//draws game on load
window.onload = () =>
{
  canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
  let cwidth = canvas.width;
  let cheight = canvas.height;
  ctx = canvas.getContext("2d");

  document.addEventListener('keydown', keyboardInput);
//init game loop
  gameLoop();
}

//interface to store char and monster data
interface iGameChar
{
   draw(): void;
   x: number;
   y: number;
   speed: number; //movement in pixs per sec
}

class cDoor implements iGameChar
{
  constructor(public x:number, public y:number, public speed:number, public width:number, public height: number){
    x = 0;
    y = 0;
    speed = 0;

  }
  public draw = (): void =>
  {
    ctx.save();
    ctx.translate(this.width, this.height);
    ctx.translate(this.x, this.y);
    ctx.drawImage(door, 0, 0, 60, 90);
    ctx.restore();
  }
}


//player char
class cPlayer implements iGameChar
{
  constructor(public x:number, public y:number, public speed:number, public width:number, public height: number){
    x = 0;
    y = 0;
    speed = 0;

  }
  public draw = (): void =>
  {
    ctx.save();
    ctx.translate(this.width, this.height);
    ctx.translate(this.x, this.y);
    ctx.drawImage(wizard, 0, 0, 50, 60);
    ctx.restore();
  }
}

let player = new cPlayer(350, 300 , 0, 50, 60);


 function playerCollsionBoarder(player, canvas)
 {
   if(player.x + player.width*2 > canvas.width)
   {
     player.x = canvas.width - player.width*2;
   }
   if(player.y + player.height*2 > canvas.height)
   {
     player.y = canvas.height - player.height*2;
   }
   if(player.x < -50)
   {
     player.x =  -40;
   }
   if(player.y < -50)
   {
     player.y = -40;
   }

 }

//get keyboard inputs 4 player movment
function keyboardInput(event: KeyboardEvent)
{
   // PRESS LEFT ARROW OR 'A' KEY
   if (event.keyCode == 37 || event.keyCode == 65) {
      player.x -= 10;
   }
   // PRESS UP ARROW OR 'W' KEY
   else if (event.keyCode == 38 || event.keyCode == 87 ) {
    player.y -= 10;
   }
   // PRESS RIGHT ARROW OR 'D' KEY
   else if (event.keyCode == 39 || event.keyCode == 68 ) {
      player.x += 10;
   }
   // PRESS DOWN ARROW OR 'S' KEY
   else if (event.keyCode == 40 || event.keyCode == 83 ) {
      player.y += 10;
   }

}

//zombie char
class cMob implements iGameChar
{
  constructor(public x:number, public y:number, public speed:number, public width:number, public height: number){
    x = 0;
    y = 0;

    speed = 0;
  }
  public draw = (): void =>
  {
    ctx.save();
    ctx.translate(this.width, this.height);
    ctx.translate(this.x, this.y);
    ctx.drawImage(zombie, 0, 0, 50, 60);
    ctx.restore();
  }

}
//

let zomb1 = new cMob(400, 400, 0, 60, 60)
let zomb2 = new cMob(0,60, 0, 60, 60)
let zomb3 = new cMob(80, 160, 0, 60, 60)
let zomb4 = new cMob(200, 350, 0, 60, 60)

let door1 = new cDoor(650, 111, 0, 0 ,0)
let door2 = new cDoor(650, 70, 0, 0 ,0)
let door3 = new cDoor(650, 369, 0, 0 ,0)
let door4 = new cDoor(650, 400, 0, 0 ,0)



 function playerZombieCol(player, zomb1, canvas, life1, life2, life3)
 {
   if(player.x == zomb1.x && player.y == zomb1.y )
   {

    player.x = zomb1.x - player.width;
    //player.y = zomb1.y - player.height;

    life1.x = -100;
    life2.x = -100;
    life3.x = -100;

    console.log("You are Dead!")
   }
   else if(player.x == zomb2.x && player.y == zomb2.y )
   {

    player.x = zomb2.x - player.width;
    //player.y = zomb1.y - player.height;

    life1.x = -100;
    life1.x = -100;
    life1.x = -100;
   }
   else if(player.x == zomb3.x && player.y == zomb3.y )
   {

    player.x = zomb3.x - player.width;
    //player.y = zomb1.y - player.height;

    life1.x = -100;
    life1.x = -100;
    life1.x = -100;
   }
   else if(player.x == zomb4.x && player.y == zomb4.y )
   {

    player.x = zomb4.x - player.width;
    //player.y = zomb1.y - player.height;

    life1.x = -100;
    life1.x = -100;
    life1.x = -100;
   }
   if (life1.x ==-100 && life2.x == -100 && life3.x == -100)
   {
     alert("You are Dead!!!")
   }

 }


class cLife implements iGameChar
{
  constructor(public x:number, public y:number, public speed:number, public width:number, public height: number){
    x = 0;
    y = 0;
    speed = 0;

  }
  public draw = (): void =>
  {
    ctx.save();
    ctx.translate(this.width, this.height);
    ctx.translate(this.x, this.y);
    ctx.drawImage(lifeImg, 0, 0, 30, 30);
    ctx.restore();
  }
}

let life1 = new cLife(0, -30, 0, 50, 50)
let life2 = new cLife(30, -30, 0, 50, 50)
let life3 = new cLife(60, -30, 0, 50, 50)



     function moveZomb(zomb2,zomb3,zomb4)
    {

       zomb1.x -= 5;
       zomb2.x -= 3;
       zomb3.x -= 5;
       zomb4.x -= 7;
       if(zomb1.x < -100)
       {
         zomb1.x = 650;
       }
       //
       if(zomb2.x < -100)
       {
         zomb2.x = 650;
       }
       //
       if(zomb3.x < -100)
       {
         zomb3.x = 650;
       }
       //
       if(zomb4.x < -100)
       {
         zomb4.x = 650;
       }
       //

    }
