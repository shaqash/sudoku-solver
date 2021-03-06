import React from "react";
import reducer from "../reducers/gridReducer";

const GridContext = React.createContext({
  values: Array,
  solve: Function,
});
export default GridContext;
const INITIAL = [
  [3, 0, 6, 5, 0, 8, 4, 0, 0],
  [5, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 8, 7, 0, 0, 0, 0, 3, 1],
  [0, 0, 3, 0, 1, 0, 0, 8, 0],
  [9, 0, 0, 8, 6, 3, 0, 0, 5],
  [0, 5, 0, 0, 9, 0, 6, 0, 0],
  [1, 3, 0, 0, 0, 0, 2, 5, 0],
  [0, 0, 0, 0, 0, 0, 0, 7, 4],
  [0, 0, 5, 2, 0, 6, 3, 0, 0],
];
export function GridProvider({ children }) {
  const [values, setValues] = React.useReducer(reducer, INITIAL);

  const updateGrid = (row, col, value) =>
    withTimeout(() =>
      setValues({ type: "SET", value, cIndex: col, rIndex: row })
    );

  function withTimeout(callback, timeout = 500) {
    setTimeout(() => {
      callback();
    }, timeout);
  }

  function getCellPossibilites(matrix, cellRow, cellCol) {
    let possibilites = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // check row
    for (let column = 0; column < matrix.length; column++) {
      const value = matrix[cellRow][column];
      possibilites = possibilites.filter(
        (possibility) => possibility !== value
      );
    }
    // check column
    for (let row = 0; row < matrix.length; row++) {
      const value = matrix[row][cellCol];
      possibilites = possibilites.filter(
        (possibility) => possibility !== value
      );
    }

    // check square
    let colStart;
    let rowStart;
    if (cellCol < 3) {
      colStart = 0;
    } else if (cellCol < 6) {
      colStart = 3;
    } else {
      colStart = 6;
    }
    if (cellRow < 3) {
      rowStart = 0;
    } else if (cellRow < 6) {
      rowStart = 3;
    } else {
      rowStart = 6;
    }
    for (let row = rowStart; row < rowStart + 3; row++) {
      for (let column = colStart; column < colStart + 3; column++) {
        const value = matrix[row][column];
        possibilites = possibilites.filter(
          (possibility) => possibility !== value
        );
      }
    }
    return possibilites;
  }

  function getMinimumPossibilityCell(matrix) {
    let minimumCell = null;
    // go over rows
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
      const row = matrix[rowIndex];
      // go over values
      for (let colIndex = 0; colIndex < row.length; colIndex++) {
        const value = row[colIndex];
        if (value !== 0) continue;

        const possibilities = getCellPossibilites(matrix, rowIndex, colIndex);
        if (possibilities.length === 0) continue;
        if (minimumCell === null) {
          minimumCell = {
            row: rowIndex,
            col: colIndex,
            possibilities: [...possibilities],
          };
        } else if (minimumCell.possibilities.length > possibilities.length) {
          minimumCell = {
            row: rowIndex,
            col: colIndex,
            possibilities: [...possibilities],
          };
        }
      }
    }
    return minimumCell;
  }

  function isAllFilled(matrix) {
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix.length; col++) {
        const value = matrix[row][col];
        if (value === 0) return false;
      }
    }
    return true;
  }

  function sleep(ms = 250) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function backtrack(matrix) {
    const allFilled = isAllFilled(matrix);
    if (allFilled) return true;

    const cell = getMinimumPossibilityCell(matrix);

    // success
    if (cell === null) {
      return false;
    }
    if (cell.possibilities.length === 1) {
      // fill cell with the possibility
      updateGrid(cell.row, cell.col, cell.possibilities[0]);
      matrix[cell.row][cell.col] = cell.possibilities[0];
      await sleep();

      //backtrack with changed matrix
      const result = await backtrack(matrix);
      if (result === false) {
        updateGrid(cell.row, cell.col, 0);
        matrix[cell.row][cell.col] = 0;
        await sleep();
        return false;
      }
      return true;
    }
    if (cell.possibilities.length > 1) {
      for (const possibility of cell.possibilities) {
        // fill cell with the possibility
        updateGrid(cell.row, cell.col, possibility);
        matrix[cell.row][cell.col] = possibility;
        await sleep();
        //backtrack with changed matrix
        const result = await backtrack(matrix);
        if (result === false) {
          updateGrid(cell.row, cell.col, 0);
          matrix[cell.row][cell.col] = 0;
          await sleep();
          continue;
        } else {
          return true;
        }
      }
      // if we got here it means none of the possibilites didnt work
      return false;
    }
  }

  async function solve() {
    // reset values
    setValues(INITIAL);
    const copyMatrix = values.map((row) => [...row]);
    // true for success, false for not possible
    await backtrack(copyMatrix);
  }

  return (
    <GridContext.Provider value={{ values, solve: () => solve() }}>
      {children}
    </GridContext.Provider>
  );
}

