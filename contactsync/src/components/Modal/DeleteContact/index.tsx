import React, { useContext } from 'react';
import { CloseButton, ModalContent, ModalWrapper } from '../styled'
import { ContactInfo } from "../../../contexts/AuthContext"
import { UpdateContactData, updateContactSchema } from '../../Form/Contacts/RegisterContact/validator';
import { zodResolver } from '@hookform/resolvers/zod';
import {useForm} from'react-hook-form'
import { FormDelete } from '../../Form/Contacts/RegisterContact/styled';
import { ContactContext } from '../../../contexts/ContactContext';

interface ModalProps {
  toggleDeleteModal: () => void;
  setContacts: React.Dispatch<React.SetStateAction<ContactInfo[]>>
  isIdContact: string
}

const ModalDeleteContact = ({ toggleDeleteModal, isIdContact }: ModalProps) => {
  const {deleteContact} = useContext(ContactContext)
  const {handleSubmit} = useForm({
      mode: "onBlur",
      resolver: zodResolver(updateContactSchema)
  })

  const submit = () => {

    deleteContact(isIdContact)
    toggleDeleteModal()

  }

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={() => toggleDeleteModal()}>X</CloseButton>
        <FormDelete onClick={handleSubmit(submit)}>

            <p>Deseja realmente excluir o contato?</p>
            <span>
                <button>Confirmar</button>
            </span>

        </FormDelete>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalDeleteContact
