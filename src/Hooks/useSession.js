import { useState, useEffect } from "react";

const useSession = (key) => {
  /**
   * state
   */
  const [session, setSession] = useState();

  /**
   * variables
   */
  const storage = window.sessionStorage;

  /**
   * functions
   */
  const setItem = (value) => {
    if (value) {
      storage.setItem(key, JSON.stringify(value));
    } else {
      storage.removeItem(key);
    }
    return setSession(value);
  };

  const getItem = () => {
    return JSON.parse(storage.getItem(key));
  };

  /**
   * effect
   */
  useEffect(() => {
    const item = getItem();
    setSession(item);
  }, [key]);

  return [session, setItem];
};

export default useSession;
