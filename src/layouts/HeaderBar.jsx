import React from "react";
import { Icon, Header } from "semantic-ui-react";
import StatusContext from "../contexts/StatusContext";

const HeaderBar = () => {
  const { redo } = React.useContext(StatusContext);
  return (
    <Header inverted as="h5" floated="left">
      <Header.Content>
        <button
          style={{
            marginRight: 2,
            border: 0,
            padding: 0,
            color: "white",
            backgroundColor: "transparent",
          }}
          onClick={redo}
        >
          <Icon
            style={{ margin: 0 }}
            color="white"
            name="redo"
            avatar
            circular
          />
        </button>
        <span>Sudoku Solver</span>
      </Header.Content>
    </Header>
  );
};
export default HeaderBar;
