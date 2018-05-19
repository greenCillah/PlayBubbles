function Boundries() {


    var width = 30;

    this.boundryList = [];


    // bottom
    this.boundryList.push(new Boundary(400, 1100, 800, 20, 0));
    //right
    this.boundryList.push(new Boundary(800, 500, width, 1200, 0));
    //left
    this.boundryList.push(new Boundary(0, 600, width, 1200, 0));


    this.showAll = function () {

        for (var i = 0; i < this.boundryList.length; i++) {

            this.boundryList[i].show();

        }

    }

}
