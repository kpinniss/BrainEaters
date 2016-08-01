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

//main loop to redraw canvas at 60fps
function gameLoop(): void
{
  requestAnimationFrame(gameLoop);
  // ctx.fillStyle = "black";
  // ctx.fillRect(0, 0, 800, 500);

  ctx.drawImage(background, 0, 0, 750 ,550);

  player.draw();
  zomb1.draw();
  // zomb2.draw();
  // zomb3.draw();
  // zomb4.draw();
  moveZomb(zomb1);
  playerCollsionBoarder(player,canvas);
  playerZombieCol(player,zomb1, canvas);

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

let player = new cPlayer(575, 200 , 150, 50, 50);


 function playerCollsionBoarder(player, canvas)
 {
   if(player.x + player.width > canvas.width)
   {
     player.x = canvas.width - player.width*2;
   }
   if(player.y + player.height > canvas.height)
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

let zomb1 = new cMob(200, 45, 0, 50, 50)
//let zomb2 = new cMob(0,0, 0, 50 ,50)
//let zomb3 = new cMob(80, 54, 100, 0 ,0)
//let zomb4 = new cMob(200, 111, 100, 0, 0)



 function playerZombieCol(player, zomb1, canvas)
 {
   let playerPos = (player.x, player.y);
   let ZombPos = (zomb1.x, zomb1.y);
  // if(zomb2.x == zomb1.x)
  //   {
  //     console.log('YAY!!!');
  //   }
  if(playerPos == ZombPos)
    {
        playerPos = player.x - player.width;
        console.log("You died!")

    }
  }


 function moveZomb(zomb1)
{

   //zomb1.y += 5;
  // zomb2.y += 3;
  //  zomb3.y += 5;
  //  zomb4.y += 7;
  //  if(zomb1.y >= 589)
  //  {
  //    zomb1.y = -100;
   //
  //  }

  //  if(zomb2.y >= 589)
  //  {
  //    zomb2.y = -100;
  //  }
  //  //
  //  if(zomb3.y >= 589)
  //  {
  //    zomb3.y = -100;
  //  }
  //  //
  //  if(zomb4.y >= 589)
  //  {
  //    zomb4.y = -100;
  //  }

}






 // function moveZomb(zomb1,canvas)
 //    {
 //      zomb1.x -=8;
 //      if(zomb1.x + zomb1.width > canvas.width)
 //      {
 //        zomb1.x = canvas.width - zomb1.width*3;
 //        zomb1.x =0;
 //        zomb1.x++
 //      }
 //      if(zomb1.y + zomb1.height > canvas.height)
 //      {
 //        zomb1.y = canvas.height - zomb1.height*3;
 //      }
 //      if(zomb1.x < -50)
 //      {
 //        zomb1.x =  -40;
 //      }
 //      if(zomb1.y < -50)
 //      {
 //        zomb1.y = -40;
 //      }
 //    }


  //   function moveZomb(zomb1,zomb2,zomb3,zomb4)
  //  {
   //
  //     zomb1.y += 5;
  //     zomb2.y += 3;
  //     zomb3.y += 5;
  //     zomb4.y += 7;
  //     if(zomb1.y >= 589)
  //     {
  //       zomb1.y = -100;
  //     }
  //     //
  //     if(zomb2.y >= 589)
  //     {
  //       zomb2.y = -100;
  //     }
  //     //
  //     if(zomb3.y >= 589)
  //     {
  //       zomb3.y = -100;
  //     }
  //     //
  //     if(zomb4.y >= 589)
  //     {
  //       zomb4.y = -100;
  //     }
   //
  //  }
