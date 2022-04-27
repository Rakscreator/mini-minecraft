var canvas = new fabric.Canvas("myCanvas");

var block_img_width = 30;
var block_img_height = 30;

var player_x = 10;
var player_y = 10;

var player_object = " ";

var block_img_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function (img){
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_img(getimg){
    fabric.Image.fromURL(getimg , function (img){
        block_img_object = img;
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);
    });
} 
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    if(e.shiftKey == true && keypressed == 80 ){
        block_img_width = block_img_width + 10;
        block_img_height += 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if(e.shiftKey == true && keypressed == 77){
        block_img_height -= 10;
        block_img_width -= 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if(keypressed == 37){
        left();
        console.log("left");
    }
    if(keypressed == 38){
        up();
        console.log("up");
    }
    if(keypressed == 39){
        right();
        console.log("right");
    }
    if(keypressed == 40){
        down();
        console.log("down");
    }
    if(keypressed == 87){
        new_img("wall.jpg");
        console.log("w");
    }
    if(keypressed == 71){
        new_img("ground.png");
        console.log("g");
    }
    if(keypressed == 76){
        new_img("light_green.png");
        console.log("l");
    }
    if(keypressed == 84){
        new_img("trunk.jpg");
        console.log("t");
    }
    if(keypressed == 82){
        new_img("roof.jpg");
        console.log("r");
    }
    if(keypressed == 89){
        new_img("yellow_wall.png");
        console.log("y");
    }
    if(keypressed == 68){
        new_img("dark_green.png");
        console.log("d");
    }
    if(keypressed == 67){
        new_img("cloud.jpg");
        console.log("c");
    }
    if(keypressed == 85){
        new_img("unique.png");
        console.log("u");
    }
}

function up(){//up funtion
    if(player_y >= 0){
        player_y = player_y - block_img_height;
        console.log("block image height is" + block_img_height)
        console.log("when up arrow is pressed, x = " + player_x + " and Y = " + player_y)
        canvas.remove(player_object);
        player_update();
    }
}
function down(){//down
    if(player_y <= 500){
        player_y = player_y + block_img_height;
        console.log("block image height is" + block_img_height)
        console.log("when down arrow is pressed, x = " + player_x + " and Y = " + player_y)
        canvas.remove(player_object);
        player_update();
    }
}
function left(){//left function
    if(player_x >= 0){
        player_x = player_x - block_img_width;
        console.log("block image width is" + block_img_width)
        console.log("when left arrow is pressed, x = " + player_x + " and Y = " + player_y)
        canvas.remove(player_object);
        player_update();
    }
}
function right(){//right function
    if(player_x <= 850){
        player_x = player_x + block_img_width;
        console.log("block image width is" + block_img_width)
        console.log("when left arrow is pressed, x = " + player_x + " and Y = " + player_y)
        canvas.remove(player_object);
        player_update();
    }
}

