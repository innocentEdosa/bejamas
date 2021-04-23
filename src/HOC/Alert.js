import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import AlertEmitter from "./AlertEmitter";

export const position = {};
const Alert = ({ children, portal }) => {
  const portalRef = useRef(null);

  useEffect(() => {
    portalRef.current = document.querySelector(portal);
  });

  const getClass = (variant, classes) => {
    const defaultClass = `alert ${classes}`;
    switch (variant) {
      case "TOP_RIGHT":
        return `
      ${defaultClass} alert__top alert__right
      `;
      default:
        return `${defaultClass} alert__bottom alert__right `;
    }
  };

  return (
    <>
      {children}
      <AlertEmitter emitterReference="mainAlert">
        {({ show, variant, content, onClose, classes }) => {
          const className = getClass(variant, classes);
          return (
            show &&
            portalRef.current &&
            createPortal(
              <div className={className}>
                {React.Children.map(content, (child) =>
                  React.cloneElement(child, {
                    close: onClose,
                  })
                )}
              </div>,
              portalRef.current
            )
          );
        }}
      </AlertEmitter>
    </>
  );
};

export default Alert;
