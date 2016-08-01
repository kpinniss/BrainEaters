var canvas;
var ctx;
var background = document.getElementById("background");
var wizard = document.getElementById("wizard");
var zombie = document.getElementById("mob");
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.drawImage(background, 0, 0, 750, 550);
    player.draw();
    zomb1.draw();
    moveZomb(zomb1);
    playerCollsionBoarder(player, canvas);
    playerZombieCol(player, zomb1, canvas);
}
window.onload = function () {
    canvas = document.getElementById('myCanvas');
    var cwidth = canvas.width;
    var cheight = canvas.height;
    ctx = canvas.getContext("2d");
    document.addEventListener('keydown', keyboardInput);
    gameLoop();
};
var cPlayer = (function () {
    function cPlayer(x, y, speed, width, height) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.draw = function () {
            ctx.save();
            ctx.translate(_this.width, _this.height);
            ctx.translate(_this.x, _this.y);
            ctx.drawImage(wizard, 0, 0, 50, 60);
            ctx.restore();
        };
        x = 0;
        y = 0;
        speed = 0;
    }
    return cPlayer;
}());
var player = new cPlayer(575, 200, 150, 50, 50);
function playerCollsionBoarder(player, canvas) {
    if (player.x + player.width > canvas.width) {
        player.x = canvas.width - player.width * 2;
    }
    if (player.y + player.height > canvas.height) {
        player.y = canvas.height - player.height * 2;
    }
    if (player.x < -50) {
        player.x = -40;
    }
    if (player.y < -50) {
        player.y = -40;
    }
}
function keyboardInput(event) {
    if (event.keyCode == 37 || event.keyCode == 65) {
        player.x -= 10;
    }
    else if (event.keyCode == 38 || event.keyCode == 87) {
        player.y -= 10;
    }
    else if (event.keyCode == 39 || event.keyCode == 68) {
        player.x += 10;
    }
    else if (event.keyCode == 40 || event.keyCode == 83) {
        player.y += 10;
    }
}
var cMob = (function () {
    function cMob(x, y, speed, width, height) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.draw = function () {
            ctx.save();
            ctx.translate(_this.width, _this.height);
            ctx.translate(_this.x, _this.y);
            ctx.drawImage(zombie, 0, 0, 50, 60);
            ctx.restore();
        };
        x = 0;
        y = 0;
        speed = 0;
    }
    return cMob;
}());
var zomb1 = new cMob(200, 45, 0, 50, 50);
function playerZombieCol(player, zomb1, canvas) {
    var playerPos = (player.x, player.y);
    var ZombPos = (zomb1.x, zomb1.y);
    if (playerPos == ZombPos) {
        playerPos = player.x - player.width;
        console.log("You died!");
    }
}
function moveZomb(zomb1) {
}
