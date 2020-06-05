import React from "react";
import reducer from "../reducers/gridReducer";

function checkArray(array) {
  return !array.some((value, index) => value && array.indexOf(value) !== index);
}

function checkSquare(matrix) {
  return checkArray(matrix.reduce((total, value) => [...total, ...value], []));
}

function checkCol(matrix, index) {
  return checkArray(
    matrix.reduce((total, value) => {
      return [...total, value[index]];
    }, [])
  );
}

function checkSudoku(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    if (!checkArray(matrix[i]) || !checkCol(matrix, i)) return false;
  }
  return true;
}

export default function useSolver(initial) {
  const [values, setValues] = React.useReducer(reducer, initial);
  const [isLoading, setIsLoading] = React.useState(false);
  const [current, setCurrent] = React.useState([0, 0]);

  const updateGrid = (row, col, value) =>
    withTimeout(() =>
      setValues({ type: "SET", value, cIndex: col, rIndex: row })
    );

  React.useEffect(() => {
    backtrack(values);
  }, []);

  function withTimeout(callback, timeout = 500) {
    setTimeout(() => {
      callback();
    }, timeout);
  }

  function findNext(matrix) {}

  function backtrack(matrix, r = 0, c = 0) {}

  return { values, isLoading };
}
