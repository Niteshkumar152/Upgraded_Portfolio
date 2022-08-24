import { useState, useEffect } from "react";
import Spinner from "./layout/Spinner";

const Delayed = ({ children, waitBeforeShow = 1000, showSpinner = true }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    console.log(waitBeforeShow);
    setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
  }, [waitBeforeShow]);

  return isShown ? children : showSpinner ? <Spinner /> : null;
};

export default Delayed;
