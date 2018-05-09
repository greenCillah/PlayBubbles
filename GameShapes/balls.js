function Balls() {

    var options = {
        friction: 0,
        restitution: 0.95
    }

    this.r = 30;
    this.colour = random(10, 255);
    this.ballList = [];

    this.addBall = function (x, y) {

        this.body = Bodies.circle(x, y, this.r, options);
        this.ballList.push(this.body);
        World.add(world, this.body);

    }

    this.showAll = function () {

        for (var i = 0; i < this.ballList.length; i++) {

            var body = this.ballList[i];
            var pos = body.position;
            var angle = body.angle;

            if (pos.y > 1060) {

                Matter.Body.setPosition(body, {
                    x: pos.x,
                    y: 100
                });

            }

            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(1);
            stroke(this.colour);
            fill(this.colour, 204, 0);
            ellipse(0, 0, this.r * 2);
            pop();


        }

    }

}
