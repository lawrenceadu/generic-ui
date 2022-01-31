import React from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";

import ErrorMessage from "./Error";

export const FloatWrapper = ({
  name,
  error,
  label,
  prefix,
  postfix,
  children,
  withFormik,
  labelClassName,
  wrapperClassName,
  containerClassName,
  ...props
}) => {
  return (
    <div className={wrapperClassName || "mb-6"}>
      <Container className={containerClassName}>
        {prefix && prefix}
        <Form.Floating>
          {children}
          {label && (
            <Form.Label htmlFor={name} className={labelClassName || ""}>
              {label}
            </Form.Label>
          )}
        </Form.Floating>
        {postfix && postfix}
      </Container>
      <ErrorMessage name={name} {...{ error, withFormik }} />
    </div>
  );
};

export const DefaultWrapper = ({
  name,
  error,
  label,
  prefix,
  postfix,
  children,
  withFormik,
  labelClassName,
  wrapperClassName,
  containerClassName,
  ...props
}) => {
  return (
    <Form.Group controlId={name} className={wrapperClassName || "mb-6"}>
      {label && (
        <Form.Label className={labelClassName || ""}>{label}</Form.Label>
      )}
      <Container className={containerClassName || ""}>
        {prefix && prefix}
        {children}
        {postfix && postfix}
      </Container>
      {/* <ErrorMessage name={name} {...{ error, withFormik }} /> */}
    </Form.Group>
  );
};

/**
 * styles
 */
const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 0.375rem;
  border: solid 0.0625rem black;
  transition: border-color 0.15s ease-in-out;

  .form-control,
  .form-select {
    border: none;
  }

  .form-floating {
    width: 100%;
  }

  &:focus-within {
    border-color: black;
  }
`;
