import React, { useState } from "react";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";

import { Field, Select as S, Button } from "../../Components";

export default {
  title: "UI/Components/Field",
  component: Field
};

export const Input = (props) => (
  <Field
    name="name"
    label="Full name"
    placeholder="Enter your name here"
    {...props}
  />
);

export const Select = (props) => (
  <Field
    name="name"
    component={S}
    label="Select an item"
    placeholder="--"
    options={[
      { label: "Item 1", value: 1 },
      { label: "Item 2", value: 2 },
      { label: "Item 3", value: 3 }
    ]}
    {...props}
  />
);

export const Checkbox = ({ checked: i, ...props }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Field.Checkbox
      name="name"
      id="checkbox"
      checked={checked}
      onChange={setChecked}
      {...props}
    >
      Hello world
    </Field.Checkbox>
  );
};

export const Country = () => {
  return <Field.Country label="Country" name="country" onChange={() => {}} />;
};

export const Phone = () => {
  return (
    <Formik
      initialValues={{ phoneNumber: "" }}
      onSubmit={(params, { setSubmitting }) => {
        console.log(params);
        setSubmitting(false);
      }}
    >
      {({
        values: { phoneNumber },
        setFieldTouched,
        setFieldValue,
        handleSubmit,
        isSubmitting,
        isValid
      }) => (
        <Form>
          <Field.Phone
            defaultCountry="GH"
            name="phoneNumber"
            label="Phone Number"
            value={phoneNumber || ""}
            {...{ setFieldTouched, setFieldValue }}
          />

          <Button
            type="submit"
            onClick={handleSubmit}
            {...{ isSubmitting, isValid }}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

// export const Date = () => {
//   return <div />;
// };

export const Radio = ({ checked: i, ...props }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Field.Radio
      name="name"
      id="checkbox"
      checked={checked}
      onChange={setChecked}
      className="align-items-center"
      {...props}
    >
      Hello world
    </Field.Radio>
  );
};

export const Switch = ({ checked: i, ...props }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Field.Switch
      name="name"
      id="checkbox"
      checked={checked}
      onChange={setChecked}
      className="align-items-center"
      {...props}
    >
      Hello world
    </Field.Switch>
  );
};
