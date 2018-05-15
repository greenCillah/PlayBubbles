function events() {

    this.eventList = [];
    this.x = 1200;
    this.y = 400;
    this.gap = 18;

    this.show = function () {
        textSize(20);
        fill(0, 102, 153);

        // console.log(this.eventList.length);

        var j = 0;
        for (var i = this.eventList.length - 1; i >= 0; i--) {
            text("[" + i + "] " + this.eventList[i], this.x, this.y + (this.gap * j));

            j++;

            if (j > 100) { //for performance only show 100
                return;
            }

        }

    }

    this.addEvent = function (newEvent) {
        this.eventList.push(newEvent);
    }


}
