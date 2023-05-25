import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useAuth } from "../../../hooks/useAuth"
import { LoginData, schema } from "../../../pages/Login/validator"
import { FormStyle } from "./style"
import { Link } from "react-router-dom"


export const FormLogin = () => {
    const { signIn } = useAuth()
    const { register, handleSubmit} = useForm<LoginData>({
        resolver: zodResolver(schema)
    })
    
    return (
        <FormStyle onSubmit={handleSubmit(signIn)}>
            <label htmlFor="senha">Email</label>
            <input type="emai" id="email" placeholder="Digite seu email aqui" {...register("email")}/>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha aqui" {...register("password")}/>
            <Link to={"/Register"}>Não possui uma conta? Cadastre-se</Link>
            <button type="submit">Entrar</button>
        </FormStyle>
    )
}