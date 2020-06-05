import React from "react";
import GridContext from "../contexts/GridContext";

const GRID_MODULO = 3;
const THICK_BORDER = 2;
const NORMAL_BORDER = 1;

const borderModulo = (index, modulo = GRID_MODULO) =>
  !(index % modulo) ? THICK_BORDER : NORMAL_BORDER;

export default function SudokuGrid() {
  const { values, solve } = React.useContext(GridContext);

  React.useEffect(() => {
    solve();
  }, []);

  return values.map((row, rIndex) => (
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
            borderLeft: borderModulo(cIndex),
            borderTop: borderModulo(rIndex),
            borderColor: "grey",
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
  ));
}
