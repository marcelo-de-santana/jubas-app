import {useState} from 'react';

type VisibilityProps = {
  initialValue?: boolean;
};

export type VisibilityResponse = {
  isVisible: boolean;
  open: () => void;
  close: () => void;
  handleVisibility: () => void;
};

export const useVisibility = ({initialValue = false}: VisibilityProps = {}) => {
  const [isVisible, setIsVisible] = useState<boolean>(initialValue);

  const open = () => {
    setIsVisible(true);
  };

  const close = () => {
    setIsVisible(false);
  };

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return {isVisible, open, close, handleVisibility};
};
