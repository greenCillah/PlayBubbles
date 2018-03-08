// module aliases
var Engine = Matter.Engine,
    // Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var drawCircle = false;
var circles = [];
var boxes = [];
var boundaries = [];

var ground;

function setup() {
    createCanvas(400, 1400);
    engine = Engine.create();
    world = engine.world;
    //Engine.run(engine);

    boundaries.push(new Boundary(100, 100, width * 0.6, 20, 0.3));
    boundaries.push(new Boundary(300, 300, width * 0.6, 20, -0.3));
    boundaries.push(new Boundary(100, 500, width * 0.6, 20, 0.3));
    boundaries.push(new Boundary(300, 700, width * 0.6, 20, -0.3));
    boundaries.push(new Boundary(100, 900, width * 0.6, 20, 0.3));
    // bottom
    boundaries.push(new Boundary(200, 1100, width, 20, 0));

}

// function keyPressed() {
//   if (key == ' ') {
//   }
// }

function mousePressed() {
    if (drawCircle) {
        circles.push(new Circle(mouseX, mouseY, random(5, 10)));
        drawCircle = false;
    } else {
        boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
        drawCircle = true;

    }

}

function draw() {
    background(51);
    Engine.update(engine);
    for (var i = 0; i < circles.length; i++) {
        circles[i].show();
    }
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }

}
