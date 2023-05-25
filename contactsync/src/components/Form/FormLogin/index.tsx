import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useAuth } from "../../../hooks/useAuth"
import { LoginData, schema } from "../../../pages/Login/validator"


export const FormLogin = () => {
    const { signIn } = useAuth()
    const { register, handleSubmit} = useForm<LoginData>({
        resolver: zodResolver(schema)
    })
    
    return (
        <form onSubmit={handleSubmit(signIn)}>
            <label htmlFor="senha">Email</label>
            <input type="emai" id="email" placeholder="Digite seu email aqui" {...register("email")}/>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha aqui" {...register("password")}/>
            <a href="">Não possui uma conta? Cadastre-se</a>
            <button type="submit">Entrar</button>
        </form>
    )
}