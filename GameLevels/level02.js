function Level02() {

    this.boundryList = [];


    this.boundryList.push(new Boundary(500, 200, 60, 20, radians(160)));


    for (var i = 0; i < 18; i++) {
        for (var j = 0; j < 20; j++) {
            bubbles.addBubble((i * 40) + 50, (j * 40) + 300);
        }
    }

    this.showAll = function () {

        for (var i = 0; i < this.boundryList.length; i++) {

            this.boundryList[i].show();

        }

    }

}
