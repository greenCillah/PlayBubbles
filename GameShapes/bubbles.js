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

        this.popBubbleList.push(BubbleId);

    }

    this.isBubbleDueToBePoped = function (BubbleId) {

        return this.popBubbleList.includes(BubbleId);

    }


    this.showAll = function () {


        // this needs to be sped up.
        for (var i = 0; i < this.bubbleList.length; i++) {

            if (this.bubbleList[i] === undefined) {
                continue;
            }

            var body = this.bubbleList[i];
            var pos = body.position;
            var angle = body.angle;

            if (pos.y > 1060) {

                Matter.Body.setPosition(body, {
                    x: pos.x,
                    y: 100
                });

            }

            if (this.isBubbleDueToBePoped(body.id)) {
                this.showPoppedBubble(pos.x, pos.y, angle);

                Composite.remove(world, body)

                this.bubbleList.splice(i, 1);


            } else {
                this.showNormalBubble(pos.x, pos.y, angle);
            }

        }

    }

    this.showPoppedBubble = function (x, y, angle) {
        push();
        translate(x, y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke(224, 8, 77);
        fill(224, 8, 77);
        rect(0, 0, this.w, this.h);
        pop();

    }

    this.showNormalBubble = function (x, y, angle) {

        push();
        translate(x, y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke(255);
        fill(127);
        rect(0, 0, this.w, this.h);
        pop();

    }

}
