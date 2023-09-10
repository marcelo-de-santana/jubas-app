import React, {createContext, useContext, useState} from 'react';

const initialValues = {
  isVisible: false,
  handleVisibility() {},
};

type ModalContextType = {
  isVisible: boolean;
  handleVisibility: () => void;
};

const ModalContext = createContext<ModalContextType>(initialValues);

type ModalProviderProps = {
  children?: React.ReactNode;
};

export function ModalProvider({children}: ModalProviderProps) {
  const [isVisible, setIsVisible] = useState(false);

  function handleVisibility() {
    setIsVisible(!isVisible);
  }
  return (
    <ModalContext.Provider value={{isVisible, handleVisibility}}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext(): ModalContextType {
  return useContext(ModalContext);
}
