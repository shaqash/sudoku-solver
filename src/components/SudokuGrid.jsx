import React from "react";
import useSolver from "../hooks/useSolver.js";

const DEFAULT_STATE = [
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

export default function SudokuGrid() {
  const { values, isLoading } = useSolver(DEFAULT_STATE);

  return (
    //    <div style={{display: 'flex'}}>
    values.map((row, rIndex) => (
      <div
        key={`${rIndex}+${row.toString()}`}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        {row.map((cell, cIndex) => (
          <div
            key={`${rIndex}+${cIndex}+${cell.toString()}`}
            style={{
              textAlign: "center",
              borderWidth: 1,
              borderColor: "gray",
              borderStyle: "solid",
              height: 40,
              width: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span style={{ fontColor: "black" }}>{cell || ""}</span>
          </div>
        ))}
        <br />
      </div>
    ))

    //   </div>
  );
}
