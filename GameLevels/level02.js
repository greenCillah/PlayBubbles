function Level02() {

    this.boundryList = [];


    this.boundryList.push(new Boundary(500, 200, 60, 20, radians(160)));



    this.showAll = function () {

        for (var i = 0; i < this.boundryList.length; i++) {

            this.boundryList[i].show();

        }

    }

}
