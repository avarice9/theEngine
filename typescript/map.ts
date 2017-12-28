class map {

    private grid: number[][];
    constructor(public height: number, public width: number) {
        let grid = new Array(this.height);
        for (let i:number  = 0; i < this.width; i++) {
            grid[i] = new Array(this.height);

            for (let j:number = 0; j < this.height; j++) {
                if(i != 0 && j != 0) {
                    let max = grid[i-1][j];
                    let min = grid[i][j-1];
                    if(min > max) {
                        let min = grid[i-1][j];
                        let max = grid[i][j-1];
                    }
                    //alternate rows so that there are not diagonal stripes
                    if(i%2==1) {
                        grid[this.width - i][j] = gaussianRandom(min - 1, max + 1);
                    } else {
                        grid[i][j] = gaussianRandom(min - 1, max + 1);
                    }
                } else if (i!=0) {
                    grid[i][j] = gaussianRandom(grid[i-1][j]-1, grid[i-1][j]+1);
                } else if (j!=0) {
                    grid[i][j] = gaussianRandom(grid[i][j-1]-1, grid[i][j-1]+1);
                } else {

                    grid[i][j] = gaussianRandom(0, 10);
                }
            }

        }
        this.grid = grid;
        // console.log(grid);
    }

    display() {
        let boxSize:number = 1;
        let output = "<table style='border-collapse: collapse;'>";
        for(let i:number = 0;i< this.width; i++) {
            output += "<tr>";
            for(let j:number = 0; j < this.height; j++) {
                output += "<td height="+boxSize+" width="+boxSize+" " + " bgcolor='" + mapColors[this.grid[i][j]] + "'" + ">" +
                    // this.grid[i][j] +
                    "</td>";
            }
            output += "</tr>";
        }
        output += "</table>";
        // console.log(output);
        return output;
    }
}

function gaussianRandom(start, end) {
    return Math.abs(Math.floor(start + gaussianRand() * (end - start + 1)));
}
function gaussianRand() {
    let rand = 0;

    for (let i = 0; i < 6; i += 1) {
        rand += Math.random();
    }

    return rand / 6;
}

let mapColors = ['000066',//deep water
                '0000cc',//deep water
                '0000cc',//deep water
                '0000ff',//water
                'ffff66',//sand
                '00ff00',//grass
                '00cc00',//brush
                '009933',//forest
                '666633',//rock
                '333300',//stone
                'e0e0d1',//snow
                'ebebe0',//snow
                'f5f5f0',//snow
                'ffffff',//snow
                'ffffff',//snow
                'ffffff',//snow
                'ffffff',//snow
                'ffffff',//snow
                'ffffff',//snow
                'ffffff',//snow
                'ffffff'];//more snow



let gameMap = new map(250,250);
document.body.innerHTML = gameMap.display();
