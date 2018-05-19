function Boundries() {

    this.boundryList = [];

    //top left  diagonal
    this.boundryList.push(new Boundary(100, 100, 800, 20, 0.3));

    //top right diagonal
    this.boundryList.push(new Boundary(500, 300, 800, 20, -0.3));
    //middle left diagonal
    this.boundryList.push(new Boundary(100, 500, 800, 20, 0.3));
    //middle right diagonal
    this.boundryList.push(new Boundary(500, 700, 800, 20, -0.3));
    //bottom left diagonal
    this.boundryList.push(new Boundary(100, 900, 800, 20, 0.3));

    // bottom
    this.boundryList.push(new Boundary(400, 1100, width, 20, 0));
    //right
    this.boundryList.push(new Boundary(800, 500, 30, 1200, 0));
    //left
    this.boundryList.push(new Boundary(0, 600, 30, 1200, 0));


    this.showAll = function () {

        for (var i = 0; i < this.boundryList.length; i++) {

            this.boundryList[i].show();

        }

    }

}
