import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../Components/Button";
import Modal from "../../Components/Modal";

export default {
  title: "UI/Components/Modal",
  component: Modal
};

const Template = ({ show, onHide, ...props }) => {
  /**
   * state
   */
  const [modal, setModal] = useState(false);
  const [light, setLight] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <div>
      <Grid>
        <Button onClick={() => setModal(true)} width={192}>
          Open Modal
        </Button>

        <Button onClick={() => setLight(true)} width={192}>
          Open Light
        </Button>

        <Button onClick={() => setDark(true)} width={192}>
          Open Dark
        </Button>
      </Grid>

      <Modal show={modal} onHide={() => setModal(false)} {...props}>
        <Modal.Body>
          <p>Hello world</p>
        </Modal.Body>
      </Modal>

      <Modal.Light show={light} onHide={() => setLight(false)} {...props}>
        <p>Hello world</p>
      </Modal.Light>

      <Modal.Dark show={dark} onHide={() => setDark(false)} {...props}>
        <p>Hello world</p>
      </Modal.Dark>
    </div>
  );
};

const Grid = styled.div`
  gap: 1rem;
  display: grid;
`;

export const Default = Template.bind({});

Default.args = {
  show: false,
  centered: true
};
