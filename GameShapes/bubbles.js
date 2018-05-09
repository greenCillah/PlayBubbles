function Bubbles() {

    var options = {
        friction: 0.3,
        restitution: 0.6
    }

    this.w = 30;
    this.h = 30;
    this.bubbleList = [];

    this.addBubble = function (x, y) {
        var body = Bodies.rectangle(x, y, this.w, this.h, options);
        this.bubbleList.push(body);
        World.add(world, body);
    }


    this.showAll = function () {

        for (var i = 0; i < this.bubbleList.length; i++) {

            var body = this.bubbleList[i];
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
            strokeWeight(5);
            stroke(255);
            fill(127);
            rect(0, 0, this.w, this.h);
            pop();


        }

    }

}
