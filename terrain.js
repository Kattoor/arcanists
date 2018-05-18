const TerrainGenerator = {

    mapWidth: 2000,
    mapHeight: 1000,

    amountOfBlocksHorizontally: undefined,
    amountOfBlocksVertically: undefined,


    getBlockIndexForPixel: function (x, y) {
        const currentBlockX = Math.ceil(x / 100);
        const currentBlockY = Math.ceil(y / 100);
        return currentBlockY * this.amountOfBlocksHorizontally + currentBlockX;
    },

    generate: function () {
        this.amountOfBlocksHorizontally = Math.ceil(this.mapWidth / 100);
        this.amountOfBlocksVertically = Math.ceil(this.mapHeight / 100);

        const terrain = {
            blocks: new Array(this.amountOfBlocksHorizontally * this.amountOfBlocksVertically).fill(new MapImageBlock(new Array(100 * 100 * 4).fill(255))),
            slopeInfo: new Array(this.amountOfBlocksHorizontally * this.amountOfBlocksVertically),
            dimensions: {width: this.mapWidth, height: this.mapHeight},
            update: function () {
                this.blocks.forEach(b => b.update());
            }
        };

        for (let blockY = 0; blockY < this.amountOfBlocksVertically; blockY++) {
            for (let blockX = 0; blockX < this.amountOfBlocksHorizontally; blockX++) {
                terrain.blocks[blockY * this.amountOfBlocksHorizontally + blockX].setBlockPosition(blockX, blockY);
            }
        }

        for (let y = 0; y < this.mapHeight; y++) {
            for (let x = 0; x < this.mapWidth; x++) {

                if (y > 150 && y < 200 && x > 50 && x < this.mapWidth - 50) {
                    const blockIndex = this.getBlockIndexForPixel(x, y);
                    const offset = (100 * (y % 100) + (x % 100)) * 4;
                    const imageData = terrain.blocks[blockIndex].imageData.slice();
                    imageData[offset] = 255;
                    imageData[offset + 1] = 100;
                    imageData[offset + 2] = 255;
                    imageData[offset + 3] = 255;
                    terrain.blocks[blockIndex].setImageData(imageData);
                }
                if (y > 800 && y < 900 && x > 35 && x < this.mapWidth / 2) {
                    const blockIndex = this.getBlockIndexForPixel(x, y);
                    const offset = (100 * (y % 100) + (x % 100)) * 4;
                    const imageData = terrain.blocks[blockIndex].imageData.slice();
                    imageData[offset] = 100;
                    imageData[offset + 1] = 255;
                    imageData[offset + 2] = 255;
                    imageData[offset + 3] = 255;
                    terrain.blocks[blockIndex].setImageData(imageData);
                }
                if (y > 400 && y < 650 && x > this.mapWidth / 2 && x < this.mapWidth - 35) {
                    const blockIndex = this.getBlockIndexForPixel(x, y);
                    const offset = (100 * (y % 100) + (x % 100)) * 4;
                    const imageData = terrain.blocks[blockIndex].imageData.slice();
                    imageData[offset] = 255;
                    imageData[offset + 1] = 255;
                    imageData[offset + 2] = 100;
                    imageData[offset + 3] = 255;
                    terrain.blocks[blockIndex].setImageData(imageData);
                }
            }
        }

        return terrain;
    }
};
