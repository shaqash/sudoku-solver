import PropTypes from "prop-types";
import { Segment, SegmentGroup } from "semantic-ui-react";
import React from "react";
import HeaderBar from "./HeaderBar";

const PageLayout = ({ children }) => (
  <SegmentGroup raised>
    <Segment clearing inverted>
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
