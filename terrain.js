const TerrainGenerator = {

    generate: function(canvasDimensions) {
        console.log('generating map');
        const map = {
            imagePixels: new Array(canvasDimensions.width * canvasDimensions.height).fill([255, 255, 255]),
            slopeInfo: new Array(canvasDimensions.width * canvasDimensions.height).fill(null),
            dimensions: canvasDimensions
        };

        for (let y = 0; y < canvasDimensions.height; y++) {
            for (let x = 0; x < canvasDimensions.width; x++) {
                if (y > 200 && y < 300)
                    map.imagePixels[canvasDimensions.width * y + x] = [0, 0, 0];
            }
        }

        console.log('generated map');

        return map;
    }
};
