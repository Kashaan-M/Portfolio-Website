import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [light, setLight] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitter, setSubmitter] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [disable, setDisable] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        light,
        isSidebarOpen,
        setLight,
        openSidebar,
        closeSidebar,
        isModalOpen,
        openModal,
        closeModal,
        submitter,
        setSubmitter,
        showAlert,
        setShowAlert,
        disable,
        setDisable,
        isSubmitted,
        setIsSubmitted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
