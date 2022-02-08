import React, { useState } from "react";
import Toast from "react-bootstrap/Toast";

const Template = ({ type, body }) => {
  /**
   * state
   */
  const [show, setShow] = useState(true);

  return (
    <Toast onClose={() => setShow(false)} show={show} delay={4000} autohide>
      <Toast.Body>{body}</Toast.Body>
    </Toast>
  );
};

export default Template;
