const DrawEngine = {

    canvas: undefined,
    ctx: undefined,

    createCanvas: function(document) {
        this.canvas = document.getElementById('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        return {width: this.canvas.width, height: this.canvas.height};
    },

    draw: function(terrain) {
        this._drawBackground();
        this._drawTerrain(terrain);
    },

    _drawBackground: function() {
        this.ctx.fillStyle = "#0000FF";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },

    _drawTerrain: function(terrain) {
        console.log('drawing terrain');
        const imageData = this.ctx.createImageData(terrain.dimensions.width, terrain.dimensions.height);
        for (let y = 0; y < imageData.height; y++) {
            for (let x = 0; x < imageData.width; x++) {
                const offset = (y * imageData.width + x) * 4;
                imageData.data[offset] = terrain.imagePixels[0];
                imageData.data[offset + 1] = terrain.imagePixels[1];
                imageData.data[offset + 2] = terrain.imagePixels[2];
                imageData.data[offset + 3] = 255;
            }
        }

        this.ctx.putImageData(imageData, 0, 0);

        console.log('drawn terrain');
    }
};
