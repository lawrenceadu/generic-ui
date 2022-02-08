import React from "react";

import { Toast, Button } from "generic-ui";
import "generic-ui/dist/index.css";

const App = () => {
  const handleToast = () => {
    return Toast({ body: "Hello world" });
  };

  return (
    <div>
      <p>Hello world</p>
      <Button onClick={handleToast}>Toast</Button>
    </div>
  );
};

export default App;
