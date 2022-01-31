import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

/**
 * prop definition
 */
const propTypes = {
  tabs: PropTypes.array.isRequired,
  variant: PropTypes.oneOf(["default", "outline"]),
  navProps: PropTypes.object,
  childProps: PropTypes.object,
  contentProps: PropTypes.object,
  activeKey: PropTypes.string.isRequired
};

const defaultProps = {
  variant: "default"
};

const Template = ({
  tabs,
  variant,
  navProps,
  activeKey,
  childProps,
  contentProps,
  ...props
}) => {
  /**
   * variable
   */
  const tab = tabs.find(({ slug }) => slug === activeKey);

  return (
    <Wrapper variant={variant}>
      <Tab.Container {...{ activeKey, ...props }}>
        <Nav variant="tabs" {...navProps}>
          {tabs.map(({ slug, name }, key) => (
            <Nav.Item key={key}>
              <Nav.Link eventKey={slug}>{name}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <Tab.Content {...contentProps}>
          {tab && <tab.component {...childProps} />}
        </Tab.Content>
      </Tab.Container>
    </Wrapper>
  );
};

/**
 * style
 */
const Wrapper = styled.div``;

Template.propTypes = propTypes;
Template.defaultProps = defaultProps;

export default Template;
