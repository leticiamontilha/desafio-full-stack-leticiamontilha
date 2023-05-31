import { createContext, ReactNode } from "react";
import { RegisterContactData, UpdateContactData } from "../components/Form/Contacts/RegisterContact/validator";
import { api } from "../services/api";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useAuth } from "../hooks/useAuth";

interface ContactProviderProps {
    children: ReactNode
}

interface ContactContextValues {
    contactRegister: (data: RegisterContactData) => void
    updateContact: (data: UpdateContactData, contactId: string) => void
    deleteContact: (contactId: string) => void
}

export const ContactContext = createContext({} as ContactContextValues)

export const ContactProvider = ({children}: ContactProviderProps) => {

    const {contacts, setContacts} = useAuth()
    
    const contactRegister = async (data: RegisterContactData) => {
        const token = localStorage.getItem("contactSync:token")
        
        try {
            api.defaults.headers.common.authorization = `Bearer ${token}`
            const response = await api.post("/contacts", data)

            toast.success("Contato adicionado com sucesso!")

            return response.data
            
        } catch (error) {
            toast.error("O contato não pode ser adicionado")
            console.error(error)

        }
    }

    const updateContact = async (data: UpdateContactData, contactId: string) => {
        const token = localStorage.getItem("contactSync:token")

        try {
            api.defaults.headers.common.authorization = `Bearer ${token}`
            const response = await api.patch(`/contacts/${contactId}`, data)
            
            toast.success("Contato atulizado com sucesso!")
            
            setContacts(response.data)
            
            console.log(response.data) 

        } catch (error) {
            console.error(error)
            toast.error("O contato não pode ser atualizado")
        }
    }

    const deleteContact = async (contactId: string) => {
        
        const token = localStorage.getItem("contactSync:token")
        
        try {
            api.defaults.headers.common.authorization = `Bearer ${token}`
            await api.delete(`/contacts/${contactId}`)

            toast.success("Contato excluido com sucesso!")

            
        } catch (error) {
            console.error(error)
            toast.error("O contato não pode ser excluido")

        }
    }

    return (
        <ContactContext.Provider value={{contactRegister, updateContact, deleteContact}}>
            {children}
        </ContactContext.Provider>
    )
}