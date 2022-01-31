import React from "react";
import Link from "../../Components/Link";

export default {
  title: "UI/Components/Link",
  component: Link
};

const Template = (props) => <Link {...props}>Link</Link>;

export const Default = Template.bind({});
Default.args = {
  stopPropagation: false,
  href: "/"
};
