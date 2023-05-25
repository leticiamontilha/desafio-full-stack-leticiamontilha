import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterData, registerSchema } from "../../../pages/Register/validator"
import { SubmitHandler, useForm } from "react-hook-form"
import { useContext } from "react"
import { UserContext } from "../../../contexts/UserContext"
import { FormStyle } from "../FormLogin/style"
import { Link } from "react-router-dom"

export const FormRegister = () => {
    const { userRegister } = useContext(UserContext)
    const { register, handleSubmit, reset } = useForm<RegisterData>({
        mode: "onBlur",
        resolver: zodResolver(registerSchema)
    });

    const submit: SubmitHandler<RegisterData> = async (data: RegisterData) => {
        const newUser = {
            name: data.name,
            email: data.email,
            password: data.password,
            phone_number: data.phone_number
        }

        console.log(newUser)
        
        await userRegister(newUser)
        reset()

    }

    return (
        <FormStyle onSubmit={handleSubmit(submit)}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="Digite seu nome aqui" {...register("name")}/>

            <label htmlFor="phone">Numero de telefone</label>
            <input type="text" id="phone" placeholder="Digite seu numero de telefone aqui" {...register("phone_number")}/>

            <label htmlFor="email">Email</label>
            <input type="emai" id="email" placeholder="Digite seu email aqui" {...register("email")}/>
            
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha aqui" {...register("password")}/>
            
            <Link to={"/"} >Já possui uma conta? Faça seu login</Link>
    
            <button type="submit">Cadastrar</button>
        </FormStyle>
    )
}