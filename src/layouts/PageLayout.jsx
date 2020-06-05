import PropTypes from "prop-types";
import { Segment, SegmentGroup } from "semantic-ui-react";
import React from "react";
import HeaderBar from "./HeaderBar";

const PageLayout = ({ children }) => (
  <SegmentGroup raised>
    <Segment inverted clearing>
      <HeaderBar />
    </Segment>
    <Segment style={{ padding: 0 }}>
      <div>{children}</div>
    </Segment>
  </SegmentGroup>
);
PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PageLayout;
