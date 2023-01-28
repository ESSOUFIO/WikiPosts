import { createContext, useContext, useState } from "react";

const UIContext = createContext();

const UIProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const showModal = (content) => {
    setModal(true);
    setModalContent(content);
  };

  const hideModal = () => {
    setModal(false);
  };

  return (
    <UIContext.Provider value={{ modal, modalContent, showModal, hideModal }}>
      {children}
    </UIContext.Provider>
  );
};

export const UI_Context = () => {
  return useContext(UIContext);
};

export default UIProvider;
