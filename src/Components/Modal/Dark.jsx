import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";

import Content from "./Content";

const propTypes = {
  onHide: PropTypes.func.isRequired
};

const defaultProps = {
  onHide: () => {}
};

const Dark = ({ show, onHide, children, ...props }) => (
  <Modal
    centered
    // backdrop="static"
    backdropClassName="white-bg"
    {...{ show, onHide, ...props }}
  >
    <Content>{children}</Content>
  </Modal>
);

Dark.propTypes = propTypes;
Dark.defaultProps = defaultProps;

export default Dark;
