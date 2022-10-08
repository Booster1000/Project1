canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

background_images_array=["race track.jpg", "race track1.jpg", "race track2.jpg", "race track3.jpg"]
random_number = Math.floor(Math.random()*4);


carheight =100;
carwidth = 150;

backgroundimage = background_images_array[random_number];
carimage = "Car.png";

carX = 100;
carY = 100;

function add(){
    backgroundimage1 = new Image();
    backgroundimage1.onload = uploadBackground;
    backgroundimage1.src = backgroundimage;

    carimage1 = new Image();
    carimage1.onload = uploadcar;
    carimage1.src = carimage;
}

function uploadBackground() {
ctx.drawImage(backgroundimage1 , 0 , 0 , canvas.width, canvas.height);
}

function uploadcar() {
    ctx.drawImage(carimage1 , carX , carY , carwidth, carheight);
    }

    window.addEventListener("keydown", my_keydown);
    function my_keydown(e){
key_pressed = e.keyCode;
 
if (key_pressed == "38")
{
    up();
}

if (key_pressed == "40")
{
    down();
}

if (key_pressed == "37")
{
    left();
}

if (key_pressed == "39")
{
    right();
}
    }

    function up(){
        if(carY >= 0){
            carY = carY - 10;
            uploadBackground();
            uploadcar();
        }
    }

    function down(){
        if(carY <= 500){
            carY = carY + 10;
            uploadBackground();
            uploadcar();
        }
    }

    function left(){
        if(carX >= 0){
            carX = carX - 10;
            uploadBackground();
            uploadcar();
        }
    }

    function right(){
        if(carX <= 750){
            carX = carX + 10;
            uploadBackground();
            uploadcar();
        }
    }canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

carheight =100;
carwidth = 150;

backgroundimage = "race track.jpg";
carimage = "Car.png";

carX = 100;
carY = 100;

function add(){
    backgroundimage1 = new Image();
    backgroundimage1.onload = uploadBackground;
    backgroundimage1.src = backgroundimage;

    carimage1 = new Image();
    carimage1.onload = uploadcar;
    carimage1.src = carimage;
}

function uploadBackground() {
ctx.drawImage(backgroundimage1 , 0 , 0 , canvas.width, canvas.height);
}

function uploadcar() {
    ctx.drawImage(carimage1 , carX , carY , carwidth, carheight);
    }

    window.addEventListener("keydown", my_keydown);
    function my_keydown(e){
key_pressed = e.keyCode;
 
if (key_pressed == "38")
{
    up();
}

if (key_pressed == "40")
{
    down();
}

if (key_pressed == "37")
{
    left();
}

if (key_pressed == "39")
{
    right();
}
    }

    function up(){
        if(carY >= 0){
            carY = carY - 10;
            uploadBackground();
            uploadcar();
        }
    }

    function down(){
        if(carY <= 500){
            carY = carY + 10;
            uploadBackground();
            uploadcar();
        }
    }

    function left(){
        if(carX >= 0){
            carX = carX - 10;
            uploadBackground();
            uploadcar();
        }
    }

    function right(){
        if(carX <= 750){
            carX = carX + 10;
            uploadBackground();
            uploadcar();
        }
    }