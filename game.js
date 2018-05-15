// module aliases

var Engine = Matter.Engine,
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
var bubbles;
var menu;

var ground;
var isBall = false;

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.style('display', 'block');
    engine = Engine.create();
    world = engine.world;


    menu = new Menu();
    scoreBoard = new scoreBoard(0, 0);
    debugEvents = new events();
    bubbles = new Bubbles();
    balls = new Balls();

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
    boundaries.push(new Boundary(800, 500, 30, 1200, 0));
    //left
    boundaries.push(new Boundary(0, 600, 30, 1200, 0));

}

function fn_isBall() {
    if (isBall) {
        isBall = false;
    } else {
        isBall = true;
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function mousePressed() {


    //    fn_isBall();
    // If it isn't a bubble then it is a button
    isBall = !menu.clickHere(mouseX, mouseY);


    if (mouseX < 800) { // keep in the game zone
        if (isBall) {
            balls.addBall(mouseX, mouseY);
            scoreBoard.addBall();

        } else {
            bubbles.addBubble(mouseX, mouseY);
            scoreBoard.addSquare();
        }
    }

    debugEvents.addEvent(Math.round(mouseX) + " : " + Math.round(mouseY));

}

function mouseDragged() {
    debugEvents.addEvent(Math.round(mouseX) + " Drag " + Math.round(mouseY));
    menu.drag(mouseX, mouseY);
}

function draw() {
    background(51);
    Engine.update(engine);

    for (var j = 0; j < circles.length; j++) {
        circles[j].show();
    }

    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }

    for (var i = 0; i < texts.length; i++) {
        texts[i].show();
    }

    bubbles.showAll();
    balls.showAll();
    scoreBoard.show();
    menu.show();
    debugEvents.show();

}
