

window.onload = draw; // Execute draw function when DOM is ready
function draw()
  {
     // Assign our canvas element to a variable
     let canvas = document.getElementById("myCanvas");
     let ctx = canvas.getContext("2d");
     let backDrop = document.getElementById("backdrop");
     ctx.drawImage(backDrop,10,10);

      let player = new Image();
      //position
      let x =120;
      let y =120;
      let key,pos = 0;
      player.src = "Wizard_Male.png";
      player.onload = function()
      {
        ctx.drawImage(player,x ,y ,50,60);
      }
      document.onkeydown = function(e)
      {
        pos=1;
        key=window.event?e.keyCode:e.which;
      }
      document.onkeyup = function(e)
      {
        pos=0;
      }
      setInterval(function()
      {
        if(pos==0)return;
        if(key==37)x-=2;
        if(key==38)y-=2;
        if(key==39)x+=2;
        if(key==40)y+=2;
        canvas.width = canvas.width;
        ctx.drawImage(player,x ,y ,50,60);
      },5);
}
