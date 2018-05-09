function Menu() {


    this.x = 1000;
    this.y = 500;
    this.buttonGap = 5;
    this.bubblesButtonWidth = 70;
    this.bubblesButtonHeight = 50;
    this.bubblesButtonX = this.x + 5;
    this.bubblesButtonY = this.y + 5;
    this.bubblesColourOf = color(0, 204, 0);
    this.bubblesColourOn = color(255, 204, 0);
    this.bubblesIsOn = false;
    this.bubblesButtonTextTrue = "Bubbles";
    this.bubblesButtonTextFalse = "Ball";
    this.bubblesButtonText = this.bubblesButtonTextFalse;

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


}
