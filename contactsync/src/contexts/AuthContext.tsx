import { ReactNode, createContext, useEffect } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate} from "react-router-dom"
import { RegisterData } from "../pages/Register/validator";

interface AuthProviderProps {
    children: ReactNode
}

interface AuthContextValues {
    signIn: (data: LoginData) => void
    userRegister: (data: RegisterData) => void
}

export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({children}: AuthProviderProps) => {
    const navigate = useNavigate()

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
            
            console.log("aquiiii")
            console.log(response)
            
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <AuthContext.Provider value={{ signIn, userRegister }}>
            {children}
        </AuthContext.Provider>
    )
}
