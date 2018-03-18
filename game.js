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
var texts = [];
var width = 30;

var ground;

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    engine = Engine.create();
    world = engine.world;
    //Engine.run(engine);

    texts.push(new Text(200, 100, 'wowser'));
    // boundaries.push(new Boundary(100, 100, width * 0.6, 20, 0.3));
    // boundaries.push(new Boundary(300, 300, width * 0.6, 20, -0.3));
    // boundaries.push(new Boundary(100, 500, width * 0.6, 20, 0.3));
    boundaries.push(new Boundary(100, 100, width * 0.6, 20, 0.3));

    boundaries.push(new Boundary(500, 300, width * 0.6, 20, -0.3));
    boundaries.push(new Boundary(100, 500, width * 0.6, 20, 0.3));

    boundaries.push(new Boundary(500, 700, width * 0.6, 20, -0.3));
    boundaries.push(new Boundary(100, 900, width * 0.6, 20, 0.3));
    // bottom
    boundaries.push(new Boundary(400, 1100, width, 20, 0));
    //right
    boundaries.push(new Boundary(800, 600, 30, 1000, 0));
    //left
    boundaries.push(new Boundary(0, 600, 30, 1200, 0));

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function mousePressed() {

    if (drawCircle) {
        circles.push(new Circle(mouseX, mouseY, random(5, 10)));
        drawCircle = false;

    } else {
        boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
        drawCircle = true;

    }

    texts.push(new Text(mouseX, mouseY, mouseX + ":" + mouseY));


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

    for (var i = 0; i < texts.length; i++) {
        texts[i].show();
    }

}
