import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import AlertEmitter from './AlertEmitter';

export const position = {

};
const Alert = ({ children, portal }) => {
  const portalRef = useRef(null);

  useEffect(() => {
    portalRef.current = document.querySelector(portal);
  });

  const getClass = (variant) => {
    const defaultClass = 'absolute mx-0 md:mx-12 my-12  z-50 w-full md:w-auto h-auto';
    switch (variant) {
      case 'BOTTOM_RIGHT': return `
      ${defaultClass} bottom-0 right-0
      `;
      default:
        return `${defaultClass} top-0 left-0 `;
    }
  };

  return (
    <>
      {children}
      <AlertEmitter emitterReference="mainAlert">
        {({
          show, variant, content, onClose,
        }) => {
          const className = getClass(variant);
          return (
            show
            && portalRef.current
            && createPortal(
              <div className={className}>
                {React.Children.map(content, (child) => React.cloneElement(child, {
                  close: onClose,
                }))}
              </div>,
              portalRef.current,
            )
          );
        }}
      </AlertEmitter>
    </>
  );
};

export default Alert;
