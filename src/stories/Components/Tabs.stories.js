import React, { useState } from "react";
import Tabs from "../../Components/Tabs";

export default {
  title: "UI/Components/Tabs",
  component: Tabs
};

const Template = (props) => {
  const [activeKey, setActiveKey] = useState("daddy");

  return (
    <Tabs
      activeKey={activeKey}
      contentProps={{ className: "p-4" }}
      navProps={{ onSelect: (key) => setActiveKey(key) }}
      tabs={[
        { name: "Daddy", slug: "daddy", component: () => <div>Hello</div> },
        {
          name: "Mommy",
          slug: "mommy",
          component: () => <div>{console.log("hi")}</div>
        },
        { name: "Lawrence", slug: "larry", component: "div" },
        { name: "Leonard", slug: "leo", component: "div" },
        { name: "Leslie", slug: "les", component: "div" }
      ]}
      {...props}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
