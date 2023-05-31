import React, { useContext } from 'react';
import { CloseButton, ModalContent, ModalWrapper } from '../styled'
import { ContactInfo } from "../../../contexts/AuthContext"
import { FormStyle } from '../../Form/FormLogin/style';
import { UpdateContactData, updateContactSchema } from '../../Form/Contacts/RegisterContact/validator';
import { zodResolver } from '@hookform/resolvers/zod';
import {useForm} from'react-hook-form'
import { ContactContext } from '../../../contexts/ContactContext';

interface ModalProps {
  toggleEditModal: () => void;
  setContacts: React.Dispatch<React.SetStateAction<ContactInfo[]>>
  isIdContact: string
  isNameContact: string
  isEmailContact: string
  isPhoneContact: string
}

const ModalEditContact = ({ toggleEditModal, isIdContact, isNameContact, isEmailContact, isPhoneContact }: ModalProps) => {
  const {updateContact} = useContext(ContactContext)
  const {register, handleSubmit} = useForm<UpdateContactData>({
      mode: "onBlur",
      resolver: zodResolver(updateContactSchema)
  })
  
  const submit = (data: UpdateContactData) => {
    updateContact(data, isIdContact)
    toggleEditModal()

  }

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={() => toggleEditModal()}>X</CloseButton>
        
        <FormStyle onClick={handleSubmit(submit)}>
          <h2>Editar Contato</h2>

          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Nome" defaultValue={isNameContact} {...register("name")}/>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" defaultValue={isEmailContact} {...register("email")}/>

          <label htmlFor="phone_number">Contato</label>
          <input type="text" id="phone_number" placeholder="Numero do contato" defaultValue={isPhoneContact} {...register("phone_number")}/>

          <span>
              <button>Editar</button>
          </span>
        </FormStyle>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ModalEditContact
