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

    menu = new Menu();
    scoreBoard = new scoreBoard(0, 0);
    debugEvents = new events();
    bubbles = new Bubbles();
    balls = new Balls();
    allBoundries = new Boundries();

    gameLevel();


    Events.on(engine, 'collisionEnd', function (event) {
        var pairs = event.pairs;

        // change object colours to show those ending a collision
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];

            // going to pass in identifier
            bubbles.popBubble(pair.bodyA.id);
            bubbles.popBubble(pair.bodyB.id);

        }
    });

}

function fn_isBall() {
    if (isBall) {
        isBall = false;
    } else {
        isBall = true;
    }

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



    background(backGroundColour);
    Engine.update(engine);

    allBoundries.showAll();
    bubbles.showAll();
    level02.showAll();
    balls.showAll();
    scoreBoard.show();
    menu.show();
    debugEvents.show();



}

function gameLevel() {

    // level01 = new Level01();
    level02 = new Level02();

}
