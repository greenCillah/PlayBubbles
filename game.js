// module aliases

var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;

var engine;
var world;

var boxes = [];
var backGroundColour = 51;
var scoreBoard;
var debugEvents;
var bubbles;
var menu;

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
    level01 = new Level01();

    Events.on(engine, 'collisionEnd', function (event) {
        var pairs = event.pairs;

        // change object colours to show those ending a collision
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];

            console.log(pair);

            // pair.bodyA.render.fillStyle = '#222';
            // pair.bodyB.render.fillStyle = '#222';
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
    level01.showAll();
    balls.showAll();
    scoreBoard.show();
    menu.show();
    debugEvents.show();

}
