function Menu() {


    this.x = 1000;
    this.y = 500;
    this.buttonGap = 5;

    this.show = function () {


        // backGround
        fill(127, 63, 120);
        rect(this.x - 10, this.y - 40, 420, 420);

        // Text
        this.menuText = "MENU";
        textSize(32);
        fill(0, 204, 0);
        text(this.menuText, this.x + 5, this.y);

        //Button
        fill(0, 204, 0);
        this.bubblesButton = rect(this.x + 5, this.y + 10, 70, 50);
        fill(0, 0, 0);
        textSize(18);
        text("Bubbles", this.x + 10, this.y + 45);

    }

    this.clickHere = function () {


    }


}
