import React from "react";
import countryList from "react-select-country-list";
import PropTypes from "prop-types";
import Flag from "react-country-flag";

import { DefaultWrapper } from "./Wrapper";
import Select from "../Select";

const propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  withFormik: PropTypes.bool,
  setFieldTouched: PropTypes.func,
  setFieldValue: PropTypes.func
};

const defaultProps = {
  withFormik: false,
  setFieldValue: () => {},
  setFieldTouched: () => {}
};

const Country = ({
  name,
  value,
  options,
  onChange,
  withFormik,
  placeholder,
  setFieldValue,
  setFieldTouched,
  component: Input,
  ...props
}) => {
  /**
   * variable
   */
  options = ((options) => {
    return options.map(({ label, value }) => ({
      value,
      label,
      type: "svg",
      icon: () => <Flag countryCode={value} svg />
    }));
  })(options || countryList().getData());

  return (
    <DefaultWrapper {...{ ...props, name, value, withFormik }}>
      <Select
        options={options}
        onBlur={() => setFieldTouched(name, true)}
        {...(onChange
          ? { onChange }
          : { onChange: ({ value }) => setFieldValue(name, value) })}
        {...{ name, value, placeholder }}
      />
    </DefaultWrapper>
  );
};

Country.propTypes = propTypes;
Country.defaultProps = defaultProps;

export default Country;
