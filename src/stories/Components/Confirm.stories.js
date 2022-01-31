import React, { Fragment } from "react";
import Confirm from "../../Components/Confirm";
import Button from "../../Components/Button";

export default {
  title: "UI/Components/Confirm",
  component: Confirm
};

const Template = (props) => {
  const handleSubmit = async () => {
    if (
      await Confirm({
        header: "Hello world",
        message: "Wanna see something cool?"
      })
    ) {
      alert("Gob3 is a kind of food");
    } else {
      return false;
    }
  };

  return (
    <Fragment>
      <p>Confirmable can be used as a promise or a simple if condition</p>
      <p>
        We are using <code>react-confirm</code>. For more information you can
        read their docs
      </p>
      <Button onClick={handleSubmit}>Click me</Button>
    </Fragment>
  );
};

export const Default = Template.bind({});
