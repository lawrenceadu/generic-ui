import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * prop definition
 */
const propTypes = {
  /**
   * Background color of badge. If set, will override variant of badge selected
   * @default null
   */
  bg: PropTypes.string,

  /**
   * Color of text in badge, color will only apply when isStatus is false
   * @default "#fff"
   */
  color: PropTypes.string,

  /**
   * Toggle between whether badge is a status or not. If false, color is required
   * @default false
   */
  isStatus: PropTypes.bool,

  /**
   * Background opacity of badge
   */
  opacity: PropTypes.number,

  /**
   * Variant of badge. Will be overridden by bg props if set
   */
  variant: PropTypes.oneOf(["failed", "success", "processing", "warning"]),

  /**
   * Border radius of badge
   */
  radius: PropTypes.number
};

const defaultProps = {
  color: "#fff",
  isStatus: true,
  opacity: 0.1,
  radius: 6
};

const Badge = ({
  bg,
  color,
  radius,
  variant,
  opacity,
  isStatus,
  children,
  ...props
}) => {
  /**
   * variables
   */
  bg = ((bg, variant) => {
    if (bg) {
      return bg;
    }

    switch (variant) {
      case "failed":
        return "red";
      case "success":
        return "green";
      case "processing":
        return "blue";
      case "warning":
        return "orange";
      default:
        break;
    }
  })(bg, variant);

  return (
    <Wrapper {...{ ...props, bg, color, isStatus, opacity, radius }}>
      <span className="text-sub -medium">{children}</span>
    </Wrapper>
  );
};

/**
 * styles
 */
const Wrapper = styled.div`
  z-index: 1;
  height: 1rem;
  overflow: hidden;
  font-weight: 600;
  position: relative;
  white-space: nowrap;
  font-size: 0.6875rem;
  display: inline-flex;
  padding: 0rem 0.5rem;
  background-color: #fff;
  border-radius: ${({ radius }) => `${radius * 0.0625}rem`};

  span {
    margin: auto;
    display: block;
    text-transform: uppercase;
    color: ${({ isStatus, color, bg }) => (isStatus ? bg : color)};
  }

  &::before {
    opacity: ${({ opacity }) => opacity};
    background-color: ${({ bg }) => bg};
    position: absolute;
    display: block;
    content: " ";
    height: 100%;
    width: 100%;
    z-index: -1;
    right: 0;
    top: 0;
  }
`;

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
