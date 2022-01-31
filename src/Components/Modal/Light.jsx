import React from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

import Content from "./Content";

const propTypes = {
  onHide: PropTypes.func.isRequired
};

const defaultProps = {
  onHide: () => {}
};

const Light = ({ show, onHide, children, ...props }) => (
  <Modal
    centered
    // backdrop="static"
    backdropClassName="white-bg"
    {...{ show, onHide, ...props }}
  >
    <Content>{children}</Content>
  </Modal>
);

Light.propTypes = propTypes;
Light.defaultProps = defaultProps;

export default Light;
