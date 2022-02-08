import React, { Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import Notify from "../../Components/Notify";
import Button from "../../Components/Button";

export default {
  title: "UI/Components/Toast",
  component: Notify
};

const Template = (props) => {
  return (
    <Fragment>
      <Button onClick={() => toast.success(<Notify body="Hello world" />)}>
        Trigger toast
      </Button>
      <ToastContainer
        newestOnTop
        hideProgressBar
        autoClose={5000}
        position="top-right"
      />
    </Fragment>
  );
};

export const Default = Template.bind({});
Default.args = {};
