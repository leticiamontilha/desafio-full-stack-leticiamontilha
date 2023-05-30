import React from 'react';
import { CloseButton, ModalContent, ModalWrapper } from './styled';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children}: ModalProps) => {
  
    if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
