import React from "react";
import { Button, Icon, Header } from "semantic-ui-react";

const HeaderBar = () => {
  return (
    <div>
      <Header inverted as="h5" floated="left">
        <Header.Content>
          <Button
            style={{
              background: "transparent",
              border: 0,
              padding: 0,
              margin: 0,
              marginRight: 5,
              color: "white",
            }}
            onClick={() => window.location.reload(false)}
          >
            <Icon name="redo" circular />
          </Button>
          <span>Sudoku Solver</span>
        </Header.Content>
      </Header>
    </div>
  );
};
export default HeaderBar;
