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
            const response = await api.post("/contacts", data)

            toast.success("Contato adicionado com sucesso!")

        
            console.log(response)
            
        } catch (error) {
            console.error(error)
            toast.error("O contato não pode ser adicionado")

        }
    }

    // const updateContact = async (data: UpdateContactData) => {
    //     const token = localStorage.getItem("contactSync:token")
    //     const userId = localStorage.getItem("contactSync:idUser")
        
    //     try {
    //         api.defaults.headers.common.authorization = `Bearer ${token}`
    //         const response = await api.post(`/contacts/${userId}`, data)
        
    //         console.log(response)
            
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // const deleteContact = async () => {
        
    //     const token = localStorage.getItem("contactSync:token")
    //     const userId = localStorage.getItem("contactSync:idUser")
        
    //     try {
    //         api.defaults.headers.common.authorization = `Bearer ${token}`
    //         await api.post(`/contacts/${userId}`)
            
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