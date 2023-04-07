img = "";

function preload(){
    img = loadImage('img.jpg');
}

function setup() {
    canvas = createCanvas (640, 420);
    canvas.center();
}

function draw () {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("stairs", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 300, 250 );
    rect(200, 250, 275, 150);
    text("Table", 250, 275);
}