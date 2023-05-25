import { useEffect } from "react"
import { HeaderPage } from "../../components/Header"
import { SectionStyled } from "./style"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export const Dashboard = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("contactSync:token")

        if(!token){
            navigate("/")
        }

        api.defaults.headers.common.Authorization = `Bearer ${token}`

    })

    return(
        <main>
            <HeaderPage>
                <div className="containerHeader">
                    <div>
                        <h2>Bem vindo, user</h2>
                    </div>
                    <div>
                        <p>numero de telefone - email</p>
                    </div>
                    <button>Sair</button>
                </div>
            </HeaderPage>

            <SectionStyled>
                <div className="containerContacts">
                    <div className="headerContacts">
                        <h2>Meus Contatos</h2>
                        <button>Adicionar</button>
                    </div>
                    <ul>
                        <li>
                            <p>Nome: Leticia</p>
                            <p>Email: leticia@kenzie.com</p>
                            <p>contato: 148888888</p>
                        </li>
                    </ul>
                </div>
            </SectionStyled>
        </main>
    )
}
