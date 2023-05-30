import React from 'react';
import { CloseButton, ModalContent, ModalWrapper } from '../styled'
import { ContactInfo } from "../../../contexts/AuthContext"
import { FormStyle } from '../../Form/FormLogin/style';
import { UpdateContactData, updateContactSchema } from '../../Form/Contacts/RegisterContact/validator';
import { zodResolver } from '@hookform/resolvers/zod';
import {useForm} from'react-hook-form'
import { FormDelete } from '../../Form/Contacts/RegisterContact/styled';

interface ModalProps {
  toggleDeleteModal: () => void;
  setContacts: React.Dispatch<React.SetStateAction<ContactInfo[]>>
}

const ModalDeleteContact = ({ toggleDeleteModal, setContacts }: ModalProps) => {
  // const {contactRegister} = useContext(ContactContext)
  const {handleSubmit} = useForm<UpdateContactData>({
      mode: "onBlur",
      resolver: zodResolver(updateContactSchema)
  })

  const submit = (data: any) => {

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
