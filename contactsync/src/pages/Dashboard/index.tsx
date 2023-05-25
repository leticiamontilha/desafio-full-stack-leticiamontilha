import { HeaderPage } from "../../components/Header"
import { SectionStyled } from "./style"

export const Dashboard = () => {
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
