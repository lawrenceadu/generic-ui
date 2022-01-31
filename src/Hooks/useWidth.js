import { useState, useEffect } from "react";

const useWidth = () => {
  /**
   * state
   */
  const [width, setWidth] = useState();

  /**
   * function
   */
  const handleWidth = (get) => {
    if (get) {
      if (typeof window !== "undefined") {
        return window.innerWidth;
      }
    } else {
      setWidth(window.innerWidth);
    }
  };

  /**
   * effect
   */
  useEffect(() => {
    window.addEventListener("resize", () => handleWidth());
    return () => {
      window.removeEventListener("resize", handleWidth());
    };
  });

  return width || handleWidth(true);
};

export default useWidth;
