function scoreBoard(ballCount, squareCount) {
    var options = {

    }

    var ballTotal = 0;
    var squareTotal = 0;

    this.x = 1300;
    this.y = 100;
    this.gap = 50;
    this.ballCount = ballCount;
    this.squareCount = squareCount;

    this.show = function () {
        this.squareText = "Square Count: " + squareTotal;
        this.ballText = "Ball Count: " + ballTotal;
        textSize(32);
        fill(0, 102, 153);
        text(this.squareText, this.x, this.y);
        text(this.ballText, this.x, this.y + this.gap);
        text("Total: " + ballTotal + squareTotal, this.x, this.y + (this.gap * 2));

    }

    this.addBall = function () {
        ballTotal++;

    }


    this.addSquare = function () {
        squareTotal++;

    }


}
