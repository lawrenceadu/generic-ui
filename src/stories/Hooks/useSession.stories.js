import React from "react";
import useSession from "../../Hooks/useSession";

export default {
  title: "Hooks/useSession",
  component: useSession
};

const Template = () => {
  const [item, setItem] = useSession("storybook");

  return (
    <div>
      <h1>useSession</h1>
      <div style={{ marginBottom: "1.5rem" }}>
        <p>
          Used to set tab specific session. Common usage is to persist form data
          or sensitive data for single sessions
        </p>
        <code>const [item, setItem] = useSession(key)</code>
      </div>

      <div>
        <label htmlFor="item" style={{ display: "block" }}>
          Type something, and reload
        </label>
        <input
          id="item"
          name="item"
          value={item || ""}
          onChange={({ currentTarget: { value } }) => setItem(value)}
        />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
