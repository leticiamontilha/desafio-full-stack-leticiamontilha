import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate} from "react-router-dom"
import { RegisterData } from "../pages/Register/validator"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

interface AuthProviderProps {
    children: ReactNode
}

export interface ContactInfo {
    id: string,
    name: string,
    email: string,
    phone_number: string,
    createdAt: string
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
    contacts: ContactInfo[]
    setContacts: React.Dispatch<React.SetStateAction<ContactInfo[]>>
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

            toast.success("Login realizado com sucesso!")
            
            navigate("/dashboard")
        } catch (error) {
            console.error(error)
            toast.error("Usuário e/ou senha inválidos")
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

            const userId = userData.id
            localStorage.setItem("contactSync:idUser", userId)

            setUser(userData)
            setContacts(userData.contacts)

        } catch (error) {
            console.error(error)
        }
    }

    return(
        <AuthContext.Provider value={{ signIn, userRegister, userInfo, user, setUser, contacts, setContacts }}>
            {children}
        </AuthContext.Provider>
    )
}
