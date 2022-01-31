import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

import { FloatWrapper, DefaultWrapper } from "./Field/Wrapper";
import CheckboxField from "./Field/Checkbox";
import CountryField from "./Field/Country";
import ErrorMessage from "./Field/Error";
import SwitchField from "./Field/Switch";
import PhoneField from "./Field/Phone";
import RadioField from "./Field/Radio";
import DateField from "./Field/Date";

/**
 * props definition
 */
const propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  containerClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  withFormik: PropTypes.bool,
  postfix: PropTypes.node,
  prefix: PropTypes.node,
  children: PropTypes.any,
  type: PropTypes.string,
  float: PropTypes.bool,
  value: PropTypes.any
};

const defaultProps = {
  float: false,
  withFormik: false,
  component: Form.Control
};

const Field = ({
  containerClassName,
  wrapperClassName,
  component: Input,
  labelClassName,
  withFormik,
  className,
  postfix,
  prefix,
  float,
  label,
  name,
  ...props
}) => {
  /**
   * variables
   */
  const Parent = float ? FloatWrapper : DefaultWrapper;

  return (
    <Parent
      {...{
        name,
        label,
        prefix,
        postfix,
        withFormik,
        labelClassName,
        wrapperClassName,
        containerClassName,
        ...props
      }}
    >
      <Input name={name} className={className || "form-control"} {...props} />
    </Parent>
  );
};

Field.propTypes = propTypes;
Field.defaultProps = defaultProps;

export default Object.assign(Field, {
  Checkbox: CheckboxField,
  Country: CountryField,
  Switch: SwitchField,
  Error: ErrorMessage,
  Phone: PhoneField,
  Radio: RadioField,
  Date: DateField
});
