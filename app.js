//Test Cases
//0 is an empty cell, 1 is an active cell

const example1 = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
const example2 = [[1, 1, 0], [0, 1, 0], [0, 0, 0]];
const example3 = [[1, 1, 1], [0, 1, 0], [0, 0, 0]];
const example4 = [[1, 1, 1], [0, 0, 0], [0, 1, 0]];

//The function will return which of the indexed cells neighbors are active

const countActiveNeighbors = (cell, grid) => {
    const cellPosition = determineCellPosition(cell);
    let activeNeighbors = 0;

    //These if statements will check every surrounding cell in clockwise rotation after first checking that the cell exists
    
    if(grid[cellPosition[0] - 1] && grid[cellPosition[0] - 1][cellPosition[1]] === 1){
        activeNeighbors++;
    }
    if(grid[cellPosition[0] - 1] && [cellPosition[1] + 1] && grid[cellPosition[0] - 1][cellPosition[1] + 1] === 1){
        activeNeighbors++;
    }
    if(grid[cellPosition[1] + 1] && grid[cellPosition[0]][cellPosition[1] + 1] === 1){
        activeNeighbors++;
    }
    if(grid[cellPosition[0] + 1] && grid[cellPosition[1] + 1]  && grid[cellPosition[0] + 1][cellPosition[1] + 1] === 1){
        activeNeighbors++;
    }
    if(grid[cellPosition[0] + 1] && grid[cellPosition[0] + 1][cellPosition[1]] === 1){
        activeNeighbors++;
    }
    if(grid[cellPosition[0] + 1] && grid[cellPosition[1] - 1] && grid[cellPosition[0] + 1][cellPosition[1] - 1] === 1){
        activeNeighbors++;
    }
    if(grid[cellPosition[1] - 1] && grid[cellPosition[0]][cellPosition[1] - 1] === 1){
        activeNeighbors++;
    }
    if(grid[cellPosition[0] - 1] && grid[cellPosition[1] - 1] && grid[cellPosition[0] - 1][cellPosition[1] - 1] === 1){
        activeNeighbors++;
    }

    return activeNeighbors;
}

//Helper function to determine the cells position in the grid

const determineCellPosition = (cell) => {
    let position;

    switch(cell){
        case 1:
            position = [0, 0];
            break;
        case 2: 
            position = [0, 1];
            break;
        case 3:
            position = [0, 2];
            break;
        case 4:
            position = [1, 0];
            break;
        case 5: 
            position = [1, 1];
            break;
        case 6:
            position = [1, 2];
            break;
        case 7: 
            position = [2, 0];
            break;
        case 8:
            position = [2, 1];
            break;
        case 9:
            position = [2, 2];
            break;
        default:
            null
    }

    return position;
}



//Test for all center cell cases

console.log(countActiveNeighbors(5, example1));//Expected result: 0
console.log(countActiveNeighbors(5, example2));//Expected result: 2
console.log(countActiveNeighbors(5, example3));//Expected result: 3
console.log(countActiveNeighbors(5, example4));//Expected result: 4

//Test for all cell 1 cases

console.log(countActiveNeighbors(1, example1));//Expected result: 1
console.log(countActiveNeighbors(1, example2));//Expected result: 2
console.log(countActiveNeighbors(1, example3));//Expected result: 2

//The instructions for the exercise state that example 5 should return a result of 2 but visually looking at example 4 there is only 1 active cell adjacent to the first cell block.

console.log(countActiveNeighbors(1, example4));//Expected result: 1


//For example in example 4 if you choose cells 4 or 6 it is surrounded by 3 adjacent active cells and is performing the count correctly. 

console.log(countActiveNeighbors(4, example4));//Expected result: 3
console.log(countActiveNeighbors(6, example4));//Expected result: 3