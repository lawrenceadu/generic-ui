import React from "react";
import Button from "../../Components/Button";

export default {
  title: "UI/Components/Button",
  component: Button,
  argTypes: {
    isValid: {},
    type: {},
    isSubmitting: {},
    variant: {},
    loader: {},
    height: {
      description: "Height of button in px",
      control: { type: "number" }
    },
    width: {
      description: "Width of button in px",
      control: { type: "number" }
    },
    border: {
      description:
        "Border color of button. Will only apply when variant is set to custom",
      control: { type: "color" }
    },
    bg: {
      description:
        "Background color of button. Will only apply when variant is set to custom",
      control: { type: "color" }
    },
    color: {
      description:
        "Color of text in button. Will only apply when variant is set to custom",
      control: { type: "color" }
    }
  }
};

const Template = (props) => <Button {...props}>Button</Button>;

export const Default = Template.bind({});

Default.args = {
  isValid: true,
  type: "button",
  variant: "default",
  isSubmitting: false
};
