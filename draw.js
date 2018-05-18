const DrawEngine = {

    canvas: undefined,
    ctx: undefined,
    canvasDimensions: undefined,

    mapOffsetX: 0,
    mapOffsetY: 0,

    mapImageBlocks: [],

    createCanvas: function (document) {
        this.canvas = document.getElementById('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.canvasDimensions = {width: this.canvas.width, height: this.canvas.height};
        return this.canvasDimensions;
    },

    initImageData: function (terrain) {
        //this.imageData = this.ctx.createImageData(terrain.dimensions.width, terrain.dimensions.height);
    },

    draw: function (terrain, player) {
        this._drawBackground();
        this._drawTerrain(terrain);
        this._drawPlayer(player);
    },

    _drawBackground: function () {
        this.ctx.fillStyle = "#0000FF";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },

    _drawTerrain: function (terrain) {
        const a = Date.now();
        for (let y = 0; y < terrain.amountOfBlocksVertically; y++) {
            for (let x = 0; x < terrain.amountOfBlocksHorizontally; x++) {
                const block = terrain.blocks[y + terrain.amountOfBlocksHorizontally + x];
                this.ctx.putImageData(block.imageBlock, block.x * 100, block.y * 100);
            }
        }
        console.log(Date.now() - a)
        //this.ctx.putImageData(this.imageData, 0, 0);
    },

    _drawPlayer: function (player) {

    }
};
