function Level01() {

    this.boundryList = [];


    this.boundryList.push(new Boundary(100, 200, 80, 20, 180));


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


    this.showAll = function () {

        for (var i = 0; i < this.boundryList.length; i++) {

            this.boundryList[i].show();

        }

    }

}
