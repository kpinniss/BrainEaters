var canvas;
var ctx;
var background = document.getElementById("background");
var wizard = document.getElementById("wizard");
var zombie = document.getElementById("mob");
var lifeImg = document.getElementById("heart");
var door = document.getElementById("door");
function gameLoop() {
    requestAnimationFrame(gameLoop);
    ctx.drawImage(background, 0, 0, 750, 550);
    life1.draw();
    life2.draw();
    life3.draw();
    door4.draw();
    door1.draw();
    door2.draw();
    door3.draw();
    player.draw();
    zomb1.draw();
    zomb2.draw();
    zomb3.draw();
    zomb4.draw();
    moveZomb(zomb2, zomb3, zomb4);
    playerCollsionBoarder(player, canvas);
    playerZombieCol(player, zomb1, canvas, life1, life2, life3);
}
window.onload = function () {
    canvas = document.getElementById('myCanvas');
    var cwidth = canvas.width;
    var cheight = canvas.height;
    ctx = canvas.getContext("2d");
    document.addEventListener('keydown', keyboardInput);
    gameLoop();
};
var cDoor = (function () {
    function cDoor(x, y, speed, width, height) {
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
            ctx.drawImage(door, 0, 0, 60, 90);
            ctx.restore();
        };
        x = 0;
        y = 0;
        speed = 0;
    }
    return cDoor;
}());
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
var player = new cPlayer(350, 300, 0, 50, 60);
function playerCollsionBoarder(player, canvas) {
    if (player.x + player.width * 2 > canvas.width) {
        player.x = canvas.width - player.width * 2;
    }
    if (player.y + player.height * 2 > canvas.height) {
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
var zomb1 = new cMob(400, 400, 0, 60, 60);
var zomb2 = new cMob(0, 60, 0, 60, 60);
var zomb3 = new cMob(80, 160, 0, 60, 60);
var zomb4 = new cMob(200, 350, 0, 60, 60);
var door1 = new cDoor(650, 111, 0, 0, 0);
var door2 = new cDoor(650, 70, 0, 0, 0);
var door3 = new cDoor(650, 369, 0, 0, 0);
var door4 = new cDoor(650, 400, 0, 0, 0);
function playerZombieCol(player, zomb1, canvas, life1, life2, life3) {
    if (player.x == zomb1.x && player.y == zomb1.y) {
        player.x = zomb1.x - player.width;
        life1.x = -100;
        life2.x = -100;
        life3.x = -100;
        console.log("You are Dead!");
    }
    else if (player.x == zomb2.x && player.y == zomb2.y) {
        player.x = zomb2.x - player.width;
        life1.x = -100;
        life1.x = -100;
        life1.x = -100;
    }
    else if (player.x == zomb3.x && player.y == zomb3.y) {
        player.x = zomb3.x - player.width;
        life1.x = -100;
        life1.x = -100;
        life1.x = -100;
    }
    else if (player.x == zomb4.x && player.y == zomb4.y) {
        player.x = zomb4.x - player.width;
        life1.x = -100;
        life1.x = -100;
        life1.x = -100;
    }
    if (life1.x == -100 && life2.x == -100 && life3.x == -100) {
        alert("You are Dead!!!");
    }
}
var cLife = (function () {
    function cLife(x, y, speed, width, height) {
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
            ctx.drawImage(lifeImg, 0, 0, 30, 30);
            ctx.restore();
        };
        x = 0;
        y = 0;
        speed = 0;
    }
    return cLife;
}());
var life1 = new cLife(0, -30, 0, 50, 50);
var life2 = new cLife(30, -30, 0, 50, 50);
var life3 = new cLife(60, -30, 0, 50, 50);
function moveZomb(zomb2, zomb3, zomb4) {
    zomb1.x -= 5;
    zomb2.x -= 3;
    zomb3.x -= 5;
    zomb4.x -= 7;
    if (zomb1.x < -100) {
        zomb1.x = 650;
    }
    if (zomb2.x < -100) {
        zomb2.x = 650;
    }
    if (zomb3.x < -100) {
        zomb3.x = 650;
    }
    if (zomb4.x < -100) {
        zomb4.x = 650;
    }
}
