import React from "react";
import Badge from "../../Components/Badge";

export default {
  title: "UI/Components/Badge",
  component: Badge,
  argTypes: {
    bg: {
      control: { type: "color" }
    },
    color: {
      control: { type: "color" }
    },
    opacity: {
      control: { type: "number", min: 0, max: 1, step: 0.1 }
    }
  }
};

const Template = (props) => <Badge {...props}>Badge</Badge>;

export const Default = Template.bind({});
Default.args = {
  opacity: 0.1,
  color: "#fff",
  isStatus: true,
  variant: "success",
  radius: 6
};
