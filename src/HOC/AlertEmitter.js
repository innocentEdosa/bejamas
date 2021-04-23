import { useState, useEffect } from "react";
import { emitter } from "../Utils/eventEmitter";

const AlertEmitter = ({ emitterReference, children }) => {
  const [alertState, setAlertState] = useState({
    show: false,
    autoClose: false,
    duration: 2000,
    variant: "TOP_RIGHT",
    content: "",
  });

  emitter.on(emitterReference, (content, options) => {
    setAlertState((prevState) => ({
      ...prevState,
      ...options,
      content,
      show: true,
    }));
  });

  const onClose = () => {
    setAlertState((prevState) => ({
      ...prevState,
      show: false,
      content: "",
    }));
  };

  useEffect(() => {
    (() => {
      if (alertState.autoClose) {
        setTimeout(() => {
          setAlertState((prevState) => ({
            ...prevState,
            show: false,
            content: "",
          }));
        }, alertState.duration);
      }
    })();
  }, [alertState.show, alertState?.autoClose, alertState?.duration]);

  return children({ ...alertState, onClose });
};

export default AlertEmitter;
