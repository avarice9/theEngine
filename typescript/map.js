var map = /** @class */ (function () {
    function map(height, width) {
        this.height = height;
        this.width = width;
        var grid = new Array(this.height);
        for (var i = 0; i < this.width; i++) {
            grid[i] = new Array(this.height);
            for (var j = 0; j < this.height; j++) {
                if (i != 0 && j != 0) {
                    var max = grid[i - 1][j];
                    var min = grid[i][j - 1];
                    if (min > max) {
                        var min_1 = grid[i - 1][j];
                        var max_1 = grid[i][j - 1];
                    }
                    grid[i][j] = gaussianRandom(min - 1, max + 1);
                }
                else if (i != 0) {
                    grid[i][j] = gaussianRandom(grid[i - 1][j] - 1, grid[i - 1][j] + 1);
                }
                else if (j != 0) {
                    grid[i][j] = gaussianRandom(grid[i][j - 1] - 1, grid[i][j - 1] + 1);
                }
                else {
                    grid[i][j] = gaussianRandom(0, 10);
                }
            }
        }
        this.grid = grid;
        // console.log(grid);
    }
    map.prototype.display = function () {
        var boxSize = 1;
        var output = "<table style='border-collapse: collapse;'>";
        for (var i = 0; i < this.width; i++) {
            output += "<tr>";
            for (var j = 0; j < this.height; j++) {
                output += "<td height=" + boxSize + " width=" + boxSize + " " + " bgcolor='" + mapColors[this.grid[i][j]] + "'" + ">" +
                    // this.grid[i][j] +
                    "</td>";
            }
            output += "</tr>";
        }
        output += "</table>";
        // console.log(output);
        return output;
    };
    return map;
}());
function gaussianRandom(start, end) {
    return Math.abs(Math.floor(start + gaussianRand() * (end - start + 1)));
}
function gaussianRand() {
    var rand = 0;
    for (var i = 0; i < 6; i += 1) {
        rand += Math.random();
    }
    return rand / 6;
}
var mapColors = ['000066',
    '0000cc',
    '0000cc',
    '0000ff',
    'ffff66',
    '00ff00',
    '00cc00',
    '009933',
    '666633',
    '333300',
    'e0e0d1',
    'ebebe0',
    'f5f5f0',
    'ffffff',
    'ffffff',
    'ffffff',
    'ffffff',
    'ffffff',
    'ffffff',
    'ffffff',
    'ffffff']; //more snow
var gameMap = new map(250, 250);
document.body.innerHTML = gameMap.display();
