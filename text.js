function Text(x, y, theText) {
    var options = {

    }

    this.x = x;
    this.y = y;
    this.theText = theText;

    this.show = function () {
        textSize(32);
        fill(0, 102, 153);
        text(this.theText, this.x, this.y);

    }

}
