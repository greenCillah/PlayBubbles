// module aliases

var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;

var engine;
var world;

var boxes = [];
var backGroundColour = 51;
var scoreBoard;
var debugEvents;
var bubbles;
var menu;
var balls;
var level01;
var level02;

var isBall = false;

function setup() {
    var cnv = createCanvas(1600, 1200);
    cnv.style('display', 'block');
    engine = Engine.create({
        enableSleeping: true
    });
    world = engine.world;


}


function draw() {



    background(backGroundColour);
    Engine.update(engine);

    for (var i = 1; i <= 1000; i++) {

        push();
        translate(200, 200);
        rotate(1);
        rectMode(CENTER);
        strokeWeight(5);
        stroke(224, 8, 77);
        fill(224, 8, 77);
        rect(0 + i, 0, 100, 100);
        pop();
    }

    push()
    var menuText = "MENU    - FPS: " + Math.round(frameRate());
    textSize(32);
    fill(0, 204, 0);
    text(menuText, 200, 400);
    pop();


}
