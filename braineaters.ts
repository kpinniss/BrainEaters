
window.onload = draw; // Execute draw function when DOM is ready
function draw()
  {
     // Assign our canvas element to a variable
     let canvas = document.getElementById("myCanvas");
     let ctx = canvas.getContext("2d");
     let backDrop = document.getElementById("backdrop");
     ctx.drawImage(backDrop,10,10);

      let player = new Image();
      player.src = "Wizard_Male.png";
      player.onload = function(){
      ctx.drawImage(player,20,20,50,60);
  }
}

 function movePlayer()
 {

 }
