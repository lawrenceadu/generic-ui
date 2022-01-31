import React from "react";

import { Field } from "generic-ui";
import "generic-ui/dist/index.css";

const App = () => {
  return (
    <div>
      <p>Hello world</p>
      <Field name="name" label="Name" />
    </div>
  );
};

export default App;
