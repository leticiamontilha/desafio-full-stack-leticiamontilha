import { useEffect } from "react"
import { HeaderPage } from "../../components/Header"
import { SectionStyled, ListStyled, CardContactStyled } from "./style"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import {BsTrash2Fill} from "react-icons/bs"

export const Dashboard = () => {
    const navigate = useNavigate()
    const { userInfo, user, contacts } = useAuth() 
    // const { contacts } = useContext(ContactContext)


    useEffect(() => {
        // const token = localStorage.getItem("contactSync:token")

        // if(!token){
        //     navigate("/")
        // }

        // api.defaults.headers.common.Authorization = `Bearer ${token}`

        userInfo()
        console.log(contacts)
        
    }, [])



    return(
        <main>
            <HeaderPage>
                <div className="containerHeader">
                    <div>
                        <h2>Bem vindo, {user?.name}</h2>x
                    </div>
                    <div>
                        <p>{user?.phone_number} - {user?.email}</p>
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

                    <ListStyled>
                    {
                    contacts?.map(contato => 
                        <CardContactStyled>
                            <p>{contato.name}</p>
                            <p>{contato.email}</p>
                            <p>{contato.phone_number}</p>
                            <div>
                                <button className="edit">Editar</button>
                                <button className="trash"><BsTrash2Fill/></button>
                            </div>
                        </CardContactStyled>
                    )}
                    </ListStyled>
                    
                </div>
            </SectionStyled>
        </main>
    )
}
