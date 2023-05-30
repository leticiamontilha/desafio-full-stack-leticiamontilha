import { createContext, ReactNode } from "react";
import { RegisterContactData } from "../components/Form/Contacts/RegisterContact/validator";
import { api } from "../services/api";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

interface ContactProviderProps {
    children: ReactNode
}

interface ContactContextValues {
    contactRegister: (data: RegisterContactData) => void
    // updateContact: (data: UpdateContactData) => void
    // deleteContact: () => void
}

export const ContactContext = createContext({} as ContactContextValues)

export const ContactProvider = ({children}: ContactProviderProps) => {
    
    const contactRegister = async (data: RegisterContactData) => {
        const token = localStorage.getItem("contactSync:token")
        
        try {
            api.defaults.headers.common.authorization = `Bearer ${token}`
            await api.post("/contacts", data)

            toast.success("Contato adicionado com sucesso!")
            
        } catch (error) {
            toast.error("O contato não pode ser adicionado")
            console.error(error)

        }
    }

    // const updateContact = async (data: UpdateContactData) => {
    //     const token = localStorage.getItem("contactSync:token")

    //     try {
    //         api.defaults.headers.common.authorization = `Bearer ${token}`
    //         const response = await api.patch(`/contacts/${contactId}`, data)
        
    //         console.log(response)
            
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // const deleteContact = async () => {
        
    //     const token = localStorage.getItem("contactSync:token")
        
    //     try {
    //         api.defaults.headers.common.authorization = `Bearer ${token}`
    //         await api.delete(`/contacts/${contactId}`)
            
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    return (
        <ContactContext.Provider value={{contactRegister}}>
            {children}
        </ContactContext.Provider>
    )
}