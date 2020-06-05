import React from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import PageLayout from "./layouts/PageLayout";
import SudokuGrid from "./components/SudokuGrid";
import { GridProvider } from "./contexts/GridContext";

const App = () => {
  function randomBgColor() {
    const x = Math.floor(Math.random() * 20);
    const y = Math.floor(Math.random() * 200);
    const z = Math.floor(Math.random() * 256);
    const bgColor = `rgb(${x},${y},${z})`;

    document.body.style.background = bgColor;
  }

  React.useEffect(() => {
    randomBgColor();
  }, []);
  return (
    <div className="App">
      <div style={{ display: "inline-block" }}>
        <GridProvider>
          <PageLayout>
            <SudokuGrid />
          </PageLayout>
        </GridProvider>
      </div>
    </div>
  );
};

export default App;
