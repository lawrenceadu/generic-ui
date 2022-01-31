import React from "react";
// import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

// import LinkComponent from "../Link";
// import CloseIcon from "../../Icons/Close";

const Content = ({ children, onHide, preventClose }) => (
  <Modal.Body className="p-0">
    {/* {!preventClose && (
        <Link preventDefault onClick={onHide}>
          <CloseIcon color={color} />
        </Link>
      )} */}
    {children}
  </Modal.Body>
);

/**
 * styles
 */
// const Dialog = styled(Modal.Dialog)``;

// const Link = styled(LinkComponent)``;

export default Content;
