var canvas = new fabric.Canvas('myCanvas');

block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: block_y,
            left:block_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

window.addEventListener("keydown", my_keydown);

    if (keyPressed == '82'){
        new_image('red-ranger.png')
        console.log("r");
        block_x = 200;
    }

    if (keyPressed == '89'){
        new_image('yellow-ranger.png');
        console.log("y");
        block_x = 300;
    }

    if (keyPressed == '71'){
        new_image('green-ranger.png');
        console.log("g");
        block_x = 400;
    }

    if (keyPressed == '66'){
        new_image('blue-ranger.png');
        console.log("b");
        block_x = 500;
    }

    if (keyPressed == '80'){
        new_image('pink-ranger.png');
        console.log("p");
        block_x = 600;
    }
}
