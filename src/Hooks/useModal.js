import React, { useState, useCallback, useEffect } from "react";

const useModal = () => {
  const [displayedChild, setDisplayedChild] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback((placeholder) => {
    setDisplayedChild(placeholder);
    setIsModalOpen(true);
  }, []);

  useEffect(() => {
    return () => {

      setIsModalOpen(false);
      setDisplayedChild(null);
    };
  }, []);

  const closeModal = useCallback(() => {
    setDisplayedChild(null);
    setIsModalOpen(false);
  }, []);


  const placeholder = isModalOpen ? (
      <>
    {displayedChild}
    </>
  ) : null;
  return {
    modal: placeholder,
    openModal,
    setDisplayedChild,
    closeModal,
  };
};

export default useModal;
