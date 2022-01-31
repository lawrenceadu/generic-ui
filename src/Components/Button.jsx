import React from "react";
import PropTypes from "prop-types";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const propTypes = {
  /**
   * this will toggle disable on the button
   * @default 'true'
   */
  isValid: PropTypes.bool,

  /**
   * used to determine which variant of button to display
   * @default 'default'
   */
  variant: PropTypes.oneOf(["default", "custom"]),

  /**
   * Will show loading animation when true
   * @default 'false'
   */
  isSubmitting: PropTypes.bool,

  /**
   * Determine whether button is for form submission or normal button
   * @default 'button'
   */
  type: PropTypes.oneOf(["submit", "button"]),

  /**
   * loading props for spinner
   * @default '{color: "#fff"}'
   */
  loader: PropTypes.shape({
    color: PropTypes.string
  })
};

const defaultProps = {
  isValid: true,
  type: "button",
  variant: "default",
  isSubmitting: false,
  loader: { color: "#fff" }
};

const Template = ({
  isSubmitting,
  children,
  variant,
  isValid,
  loader,
  value,
  ...props
}) => {
  switch (variant) {
    case "default":
      props = {
        ...props,
        bg: "blue",
        color: "#fff",
        border: "blue"
      };
      break;
    default:
      break;
  }

  return (
    <Wrapper
      className="text-truncate"
      {...(!isValid && { disabled: true })}
      {...(isSubmitting && { disabled: true })}
      {...props}
    >
      {isSubmitting ? <Spinner animation="border" {...loader} /> : children}
    </Wrapper>
  );
};

/**
 * styles
 */
const Wrapper = styled(Button)`
  height: ${({ height }) => (height ? `${height * 0.0625}rem` : "3rem")};
  max-width: ${({ width }) => (width ? `${width * 0.0625}rem` : "100%")};
  ${({ radius }) => radius && `border-radius: ${radius};`};
  ${({ border }) => border && `border-color: ${border};`};
  ${({ bg }) => bg && `background-color: ${bg};`};
  ${({ color }) => color && `color: ${color};`};
  width: 100%;
`;

Template.propTypes = propTypes;
Template.defaultProps = defaultProps;

export default Template;
