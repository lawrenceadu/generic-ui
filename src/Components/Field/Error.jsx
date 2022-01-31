import React, { Fragment } from "react";
import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

const Error = ({ name, className, withFormik, error, ...props }) => (
  <Fragment>
    {withFormik ? (
      <ErrorMessage
        name={name}
        component={Small}
        className={className}
        {...props}
      />
    ) : (
      <Fragment>
        {error && <Small className={className}>{error}</Small>}
      </Fragment>
    )}
  </Fragment>
);

/**
 * styles
 */
const Small = styled.small`
  margin-left: 1rem;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

Error.propTypes = propTypes;

export default Error;
