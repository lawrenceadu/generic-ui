import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  /**
   * works exactly link Anhor tag href
   */
  href: PropTypes.string,

  /**
   * function to handle click event
   */
  onClick: PropTypes.func,

  /**
   * works exactly like stop propagation in js
   */
  stopPropagation: PropTypes.bool
};

const defaultProps = {
  href: "/",
  onClick: () => {},
  stopPropagation: false
};

const Link = ({ href, onClick, children, stopPropagation, ...props }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      if (stopPropagation) e.stopPropagation();
      return onClick();
    }}
    {...props}
  >
    {children}
  </a>
);

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
