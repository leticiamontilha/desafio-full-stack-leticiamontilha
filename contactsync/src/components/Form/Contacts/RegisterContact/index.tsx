import { FormcontactStyle } from "./styled"
import { useForm } from "react-hook-form"
import { registerContactSchema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { ContactContext } from "../../../../contexts/ContactContext"
import { useAuth } from "../../../../hooks/useAuth"

interface NewContactData { 
    name: string,
    email: string,
    phone_number: string
}

interface ModalProps {
  toggleModal: () => void;
}


export const FormRegisterContact = ({toggleModal}: ModalProps) => {
    const {contactRegister} = useContext(ContactContext)
    const { register, handleSubmit, reset} = useForm<NewContactData>({
        mode: "onBlur",
        resolver: zodResolver(registerContactSchema)
    })

    const submit = (data: NewContactData) => {
        const newContact = {
            name: data.name,
            email: data.email,
            phone_number: data.phone_number
        }

        contactRegister(newContact)
        reset()
        toggleModal()

    }
    
    return (
            <FormcontactStyle onSubmit={handleSubmit(submit)}>
                <h2>Adicionar Novo Contato</h2>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" placeholder="Nome" {...register("name")}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" {...register("email")}/>

                <label htmlFor="phone_number">Contato</label>
                <input type="text" id="phone_number" placeholder="Numero do contato" {...register("phone_number")}/>

                <span>
                    <button>Cadastrar</button>
                </span>
            </FormcontactStyle>
    )
}

