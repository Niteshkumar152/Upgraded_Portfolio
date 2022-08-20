import { useState, useEffect } from "react";
import Spinner from "./layout/Spinner";

const Delayed = ({ children, waitBeforeShow = 700 }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return isShown ? children : <Spinner />;
};

export default Delayed;
