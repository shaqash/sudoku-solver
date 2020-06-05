import React from "react";
import { Icon, Header } from "semantic-ui-react";

const HeaderBar = () => {
  return (
    <div>
      <Header inverted as="h5" floated="left">
        <Header.Content>
          <Icon name="redo" circular />
          <span>Sudoku Solver</span>
        </Header.Content>
      </Header>
    </div>
  );
};
export default HeaderBar;
