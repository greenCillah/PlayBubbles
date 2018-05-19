// module aliases

var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;

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
    allBoundries = new Boundries();

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

    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].show();
    }

    for (var i = 0; i < texts.length; i++) {
        texts[i].show();
    }

    allBoundries.showAll();
    bubbles.showAll();
    balls.showAll();
    scoreBoard.show();
    menu.show();
    debugEvents.show();

}
