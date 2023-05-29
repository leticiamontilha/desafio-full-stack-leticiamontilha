import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate} from "react-router-dom"
import { RegisterData } from "../pages/Register/validator"
import { ContactInfo } from "./ContactsContext"

interface AuthProviderProps {
    children: ReactNode
}

interface UserInfo {
    id: string,
    name: string,
    email: string,
    phone_number: string,
    createdAt: string,
    contacts: ContactInfo[]
}

interface AuthContextValues {
    signIn: (data: LoginData) => void
    userRegister: (data: RegisterData) => void
    userInfo: () => void
    user: UserInfo | null
    setUser: React.Dispatch<React.SetStateAction<null>>
    contacts: ContactInfo[] | null
}

export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({children}: AuthProviderProps) => {
    const navigate = useNavigate()
    const [user, setUser ] = useState(null)
    const [contacts, setContacts] = useState<ContactInfo[]>([])

    useEffect(() => {
        const token = localStorage.getItem("contactSync:token")

        if(token){
            navigate("/Dashboard")
        }

        api.defaults.headers.common.Authorization = `Bearer ${token}`

    })

    const signIn =  async (data: LoginData) => {
        try {
            const response = await api.post("/login", data)
            const { token } = response.data

            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("contactSync:token", token)
            
            navigate("/dashboard")
        } catch (error) {
            console.error(error)
        }
    }

    const userRegister = async (data: RegisterData) => {
        try {
            const response = await api.post("/users", data)
        
            console.log(response)
            
        } catch (error) {
            console.error(error)
        }
    }

    const userInfo = async () => {
        const token = localStorage.getItem("contactSync:token")
        
        try {
            api.defaults.headers.common.authorization = `Bearer ${token}`
            const response = await api.get("/users")

            const userData = response.data

            setUser(userData)
            setContacts(userData.contacts)

        } catch (error) {
            console.error(error)
        }
        }

    

    // const contactsInfo = async () => {
    //     const token = localStorage.getItem("contactSync:token")
        
    //     try {
    //         api.defaults.headers.common.authorization = `Bearer ${token}`
    //         const response = await api.get<ContactInfo[]>("/contacts")

    //         const contactData = response.data

    //         console.log(contactData)

    //         setContacts(contactData)

    //     } catch (error) {
    //         console.error(error)
    //     }
    
    //     }


    return(
        <AuthContext.Provider value={{ signIn, userRegister, userInfo, user, setUser, contacts }}>
            {children}
        </AuthContext.Provider>
    )
}
