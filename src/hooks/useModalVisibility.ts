import {useState} from 'react';

type ModalVisibilityProps = {
  initialValue?: boolean;
};

export type ModalVisibilityResponse = {
  isVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
  handleVisibility: () => void;
};

export const useModalVisibility = ({
  initialValue = false,
}: Readonly<ModalVisibilityProps> = {}) => {
  const [isVisible, setIsVisible] = useState<boolean>(initialValue);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return {isVisible, openModal, closeModal, handleVisibility};
};
