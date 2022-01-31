import React from "react";
import { createConfirmation, confirmable } from "react-confirm";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "./Button";
import Modal from "./Modal";

const propTypes = {
  /**
   * whether to show the confirm dialog or not
   */
  show: PropTypes.bool,
  /**
   * function that determines whether to proceed or not
   */
  proceed: PropTypes.func,
  /**
   * header of the message
   */
  header: PropTypes.string,
  /**
   * props to different buttons, proceed and cancel
   */
  buttons: PropTypes.object,
  /**
   * confirm message
   */
  message: PropTypes.any.isRequired
};

const Dialog = ({ show, proceed, message, header, buttons }) => (
  <Modal.Dark centered show={show} onHide={() => proceed(false)}>
    <div className="mb-8">
      {header && <h3 className="mb-2">{header}</h3>}
      <p>{message}</p>
    </div>

    <Buttons>
      <Button {...buttons?.cancel} onClick={() => proceed(false)}>
        {buttons?.cancel?.value || "Cancel"}
      </Button>
      <Button {...buttons?.proceed} onClick={() => proceed(true)}>
        {buttons?.proceed?.value || "Proceed"}
      </Button>
    </Buttons>
  </Modal.Dark>
);

/**
 * styles
 */
const Buttons = styled.div`
  gap: 0.5rem;
  margin-left: auto;
  align-items: center;
  display: inline-flex;
`;

Dialog.propTypes = propTypes;

export default createConfirmation(confirmable(Dialog));
