function Circle(x, y, r) {
    var options = {
        friction: 0,
        restitution: 0.95
    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);

    var colour = random(10, 255);

    this.show = function () {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke(colour);
        fill(colour, 204, 0);
        ellipse(0, 0, this.r * 2);
        pop();
    }

}
