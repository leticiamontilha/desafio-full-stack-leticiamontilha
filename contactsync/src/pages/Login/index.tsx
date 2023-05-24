import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { LoginData, schema } from "./validator"
import { useAuth } from "../../hooks/useAuth"
import { SectionLogin, SectionLogo } from "./style"
import { MainStyle } from "../../components/Main/style"

export const Login = () => {
    const { signIn } = useAuth()
    const { register, handleSubmit} = useForm<LoginData>({
        resolver: zodResolver(schema)
    })

    return(
        <MainStyle>
            <SectionLogo>
                <h1>Contact<span>Sync</span></h1>
            </SectionLogo>
            
            <SectionLogin>
                <h2>Login</h2>
                <form onSubmit={handleSubmit(signIn)}>
                    <label htmlFor="senha">Email</label>
                    <input type="emai" id="email" placeholder="Digite seu email aqui" {...register("email")}/>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" placeholder="Digite sua senha aqui" {...register("password")}/>
                    <a href="">Não possui uma conta? Cadastre-se</a>
                    <button type="submit">Entrar</button>
                </form>
            </SectionLogin>
        </MainStyle>
    )
}
