function Menu() {


    this.x = 1000;
    this.y = 500;
    this.buttonGap = 5;
    this.bubblesButtonWidth = 70;
    this.bubblesButtonHeight = 50;
    this.bubblesMenuWidth = 420;
    this.bubblesMenuHeight = 420;
    this.bubblesMenuBarHeight = 50;
    this.bubblesMenuBarWidth = this.bubblesMenuWidth;
    this.bubblesButtonX = this.x + 5;
    this.bubblesButtonY = this.y + 75;
    this.bubblesColourOf = color(0, 204, 0);
    this.bubblesColourOn = color(255, 204, 0);
    this.bubblesIsOn = false;
    this.bubblesButtonTextTrue = "Bubbles";
    this.bubblesButtonTextFalse = "Ball";
    this.bubblesButtonText = this.bubblesButtonTextFalse;

    this.show = function () {


        // backGround
        fill(127, 63, 120);
        rect(this.x, this.y, this.bubblesMenuWidth, this.bubblesMenuHeight);

        //menuBar
        fill(0, 9, 255);
        rect(this.x, this.y, this.bubblesMenuBarWidth, this.bubblesMenuBarHeight);

        // Text
        this.menuText = "MENU";
        textSize(32);
        fill(0, 204, 0);
        text(this.menuText, this.x + 30, this.y + 35);

        //Button
        if (this.bubblesIsOn) {
            fill(this.bubblesColourOn);
            this.bubblesButtonText = this.bubblesButtonTextTrue;

        } else {
            fill(this.bubblesColourOf);
            this.bubblesButtonText = this.bubblesButtonTextFalse;
        }

        this.bubblesButton = rect(this.bubblesButtonX, this.bubblesButtonY, this.bubblesButtonWidth, this.bubblesButtonHeight);
        fill(0, 0, 0);
        textSize(18);
        text(this.bubblesButtonText, this.bubblesButtonX + 4, this.bubblesButtonY + 30);

    }

    this.clickHere = function (x, y) {

        if (x >= this.bubblesButtonX && x <= this.bubblesButtonX + this.bubblesButtonWidth) {
            if (y >= this.bubblesButtonY && y <= this.bubblesButtonY + this.bubblesButtonHeight) {
                this.bubblesIsOn = !this.bubblesIsOn;
            }

        }

        return (this.bubblesIsOn);

    }

    this.drag = function (x, y) {

        if (x >= this.x && x <= this.x + this.bubblesMenuBarWidth) {
            if (y >= this.y && y <= this.y + this.bubblesMenuBarHeight) {
                console.log('fred');
            }



        } else {
            console.log(' not fred');
        }
    }


}
