function Player() {

    this.x = 0;
    this.y = 0;

    this.move = function (e) {
        const keyCode = e.keyCode;
        if (keyCode === 37)
            this.x--;
        if (keyCode === 38)
            this.y--;
        if (keyCode === 39)
            this.x++;
        if (keyCode === 40)
            this.y++;
    };
}
