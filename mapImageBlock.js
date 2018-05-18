function MapImageBlock(imageData) {

    this.imageData = imageData;
    this.imageBlock = undefined;
    this.hasToBeRedrawn = true;
    this.x = 0;
    this.y = 0;

    this.setImageData = function (imageData) {
        this.imageData = imageData;
        this.hasToBeRedrawn = true;
    };

    this.setBlockPosition = function (x, y) {
        this.x = x;
        this.y = y;
    };

    this.update = function (ctx) {
        if (this.hasToBeRedrawn) {
            this.imageBlock = ctx.createImageData(100, 100);
            for (let y = 0; y < 100; y++) {
                for (let x = 0; x < 100; x++) {
                    const offset = y * 100 + x;
                    this.imageBlock.data[offset] = this.imageData[0];
                    this.imageBlock.data[offset + 1] = this.imageData[1];
                    this.imageBlock.data[offset + 2] = this.imageData[2];
                    this.imageBlock.data[offset + 3] = 255;
                }
            }
            this.hasToBeRedrawn = false;
        }
    }

}