import React from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const propTypes = {
  in: PropTypes.bool,
  duration: PropTypes.number,
};

const defaultProps = {
  in: false,
  duration: 150,
};

const Fade = ({ in: inProps, duration, children, ...props }) => (
  <CSSTransition
    in={inProps}
    unmountOnExit
    timeout={duration}
    classNames={{ appearDone: "show" }}
    {...props}
  >
    {children}
  </CSSTransition>
);

Fade.propTypes = propTypes;
Fade.defaultProps = defaultProps;

export default Fade;
