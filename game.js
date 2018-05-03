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
var scoreBoard;
var debugEvents;

var ground;

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    engine = Engine.create();
    world = engine.world;
    //Engine.run(engine);

    scoreBoard = new scoreBoard(0, 0);
    debugEvents = new events();

    //top left  diagonal
    boundaries.push(new Boundary(100, 100, 800, 20, 0.3));
    //top right diagonal
    boundaries.push(new Boundary(500, 300, 800, 20, -0.3));
    //middle left diagonal
    boundaries.push(new Boundary(100, 500, 800, 20, 0.3));
    //middle right diagonal
    boundaries.push(new Boundary(500, 700, 800, 20, -0.3));
    //bottom left diagonal
    boundaries.push(new Boundary(100, 900, 800, 20, 0.3));

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
        scoreBoard.addBall();
        drawCircle = false;

    } else {
        boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
        scoreBoard.addSquare();
        drawCircle = true;

    }

    debugEvents.addEvent(Math.round(mouseX) + " : " + Math.round(mouseY));

}

function draw() {
    background(51);
    Engine.update(engine);

    for (var j = 0; j < circles.length; j++) {
        circles[j].show();
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

    scoreBoard.show();
    debugEvents.show();

}
