import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * props definition
 */
const propTypes = {
  title: PropTypes.string,
  body: PropTypes.string.isRequired
};

const defaultProps = {
  body: "",
  title: null
};

const Notify = ({ title, body }) => (
  <Fragment>
    {title && <Header>{title}</Header>}
    <Content>{body}</Content>
  </Fragment>
);

/**
 * styles
 */
const Header = styled.h3`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Content = styled.small`
  line-height: 1.125;
  color: var(--black);
  letter-spacing: -0.4px;
  font-family: var(--font-family-base);
`;

Notify.propTypes = propTypes;
Notify.defaultProps = defaultProps;

export default Notify;
