import React from 'react';
import { CloseButton, ModalContent, ModalWrapper } from '../styled'
import { ContactInfo } from "../../../contexts/AuthContext"
import { FormRegisterContact } from '../../Form/Contacts/RegisterContact';

interface ModalProps {
  toggleModal: () => void;
  setContacts: React.Dispatch<React.SetStateAction<ContactInfo[]>>
}

const ModalAddContact = ({ toggleModal }: ModalProps) => {

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={() => toggleModal()}>X</CloseButton>
        <FormRegisterContact toggleModal={toggleModal}/>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalAddContact
