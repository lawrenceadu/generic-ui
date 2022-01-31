import { useEffect } from "react";
import PropTypes from "prop-types";

const propTypes = {
  /**
   * Set title of page
   */
  title: PropTypes.string.isRequired
};

const defaultProps = {
  title: ""
};

const useTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = [title.trim(), process.env.REACT_APP_APP_NAME]
        .filter((i) => i)
        .join(" | ");
    }
  }, [title]);
};

useTitle.propTypes = propTypes;
useTitle.defaultProps = defaultProps;

export default useTitle;
