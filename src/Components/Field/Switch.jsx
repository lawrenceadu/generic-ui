import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ToggleIcon from "../../Icons/Toggle";

const propTypes = {
  /**
   * onChange to handle change of switched values
   */
  onChange: PropTypes.func,
  /**
   * whether item is switched or not
   */
  checked: PropTypes.bool.isRequired,
  /**
   * disabled state
   */
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

const defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {}
};

const Switch = ({ checked, onChange, children, disabled, ...props }) => {
  return (
    <Wrapper
      onClick={() => !disabled && onChange(!checked)}
      {...{ ...props, disabled }}
    >
      <div className="switch__icon d-flex align-items-center overflow-hidden">
        <ToggleIcon
          size={48}
          checked={checked}
          disabled={disabled}
          color={checked ? "blue" : "grey"}
        />
      </div>
      <div className="switch__content">{children}</div>
    </Wrapper>
  );
};

/**
 * style
 */
const Wrapper = styled.div`
  gap: 1rem;
  user-select: none;
  align-items: center;
  display: inline-grid;
  grid-template-columns: 3rem minmax(0, 1fr);
  opacity: ${({ disabled }) => (disabled ? 0.65 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  .switch__icon {
    height: 1.5rem;
  }
`;

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default React.memo(Switch);
