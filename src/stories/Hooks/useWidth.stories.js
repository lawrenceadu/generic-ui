import React from "react";
import useWidth from "../../Hooks/useWidth";

export default {
  title: "Hooks/useWidth",
  component: useWidth
};

const Template = () => {
  const width = useWidth();

  return (
    <div>
      <h1>useWidth</h1>
      <div>
        <p>
          Used to get the width of the window. Uses eventListener so will update
          as window width changes
        </p>
        <code>const width = useWidth()</code>
      </div>
      <p>Current width of page is {width}px</p>
    </div>
  );
};

export const Default = Template.bind({});
