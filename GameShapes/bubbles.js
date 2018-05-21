function Bubbles() {

    var options = {
        friction: 0,
        restitution: 0,
        isStatic: true,
        label: 'fred'
    }

    this.w = 30;
    this.h = 30;
    this.bubbleList = [];
    this.popBubbleList = [];

    this.addBubble = function (x, y) {
        var body = Bodies.rectangle(x, y, this.w, this.h, options);
        this.bubbleList.push(body);
        World.add(world, body);

    }

    this.popBubble = function (BubbleId) {

        if (this.popBubbleList.includes(BubbleId)) {
            return;
        }

        console.log("ssss" + BubbleId);
        this.popBubbleList.push(BubbleId);

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
