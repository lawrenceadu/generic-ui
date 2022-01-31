import React, { useState } from "react";
import { getCountries, formatPhoneNumberIntl, getCountryCallingCode } from "react-phone-number-input"; // prettier-ignore
import { Field } from "formik";
import countryList from "react-select-country-list";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import Phone from "react-phone-number-input/input";
import Flag from "react-country-flag";

import { DefaultWrapper, FloatWrapper } from "./Wrapper";
import ChevronIcon from "../../Icons/Chevron";

/**
 * props definition
 */
const propTypes = {
  float: PropTypes.bool,
  withFormik: PropTypes.bool,
  placeholder: PropTypes.string,
  onlyCountries: PropTypes.array,
  defaultCountry: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired
};

const defaultProps = {
  float: false,
  placeholder: "",
  withFormik: true,
  setFieldValue: () => {},
  setFieldTouched: () => {}
};

const PhoneInput = ({
  name,
  float,
  label,
  value,
  withFormik,
  placeholder,
  onlyCountries,
  setFieldValue,
  defaultCountry,
  setFieldTouched,
  wrapperClassName,
  containerClassName
}) => {
  /**
   * states
   */
  const [country, setCountry] = useState(defaultCountry?.toUpperCase());

  /**
   * functions
   */
  const handleCountries = () => {
    const selectedCountries = onlyCountries || getCountries();

    return selectedCountries
      .map((country) => {
        if (!country) return false;

        country = country.toUpperCase();

        const countryName = countryList().getLabel(country);

        if (countryName) {
          return {
            country,
            value: countryName,
            label: getCountryCallingCode(country)
          };
        }

        return {};
      })
      .filter((e) => e)
      .sort((a, b) => {
        const nameA = a?.value?.toUpperCase();
        const nameB = b?.value?.toUpperCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
  };

  /**
   * variables
   */
  const Parent = float ? FloatWrapper : DefaultWrapper;

  return (
    <Parent
      prefix={
        <Dropdown>
          <Toggle className="rounded-0 p-0 gap-2">
            {country && (
              <div className="d-flex gap-1 align-items-center">
                <Flag countryCode={country} svg />
                <span>{country && getCountryCallingCode(country)}</span>
              </div>
            )}
            <ChevronIcon variant="down" size={20} />
          </Toggle>
          <Menu className="text-truncate">
            {handleCountries().map(({ label, value, ...others }, key) => {
              if (!label || !value) return false;

              return (
                <Item
                  key={key}
                  className={`text-truncate ${
                    country?.toLowerCase() === others?.country?.toLowerCase()
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setCountry(others.country) |
                    setFieldValue("country", others.country) |
                    setFieldValue(name, "")
                  }
                >
                  <Flag countryCode={others.country} svg />
                  <span className="ml-1">{value}</span>
                  <span aria-label={others.country}>({label})</span>
                </Item>
              );
            })}
          </Menu>
        </Dropdown>
      }
      {...{ name, label, withFormik, wrapperClassName, containerClassName }}
    >
      <Field
        component={Phone}
        className="form-control"
        onBlur={() => setFieldTouched(name, true)}
        onChange={(value) =>
          setFieldValue(name, formatPhoneNumberIntl(value)?.replace(/\s/g, ""))
        }
        {...(country && { country })}
        {...{ name, value, placeholder }}
      />
    </Parent>
  );
};

/**
 * styles
 */

const Item = styled(Dropdown.Item)``;

const Menu = styled(Dropdown.Menu)`
  max-height: 25rem;
  overflow-y: auto;
  max-width: 20rem;

  .dropdown-item {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
  }
`;

const Toggle = styled(Dropdown.Toggle)`
  width: 6rem;
  height: 3rem;
  background-color: lightgrey;
  border-radius: 0.375rem 0rem 0rem 0.375rem;
`;

PhoneInput.propTypes = propTypes;
PhoneInput.defaultProps = defaultProps;

export default React.memo(PhoneInput);
