import { useContext, useEffect, useState } from "react"
import { HeaderPage } from "../../components/Header"
import { SectionStyled, ListStyled, CardContactStyled } from "./style"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import {BsTrash2Fill} from "react-icons/bs"
import { api } from "../../services/api"
import ModalAddContact from "../../components/Modal/AddContact"
import ModalEditContact from "../../components/Modal/EditContact"
import ModalDeleteContact from "../../components/Modal/DeleteContact"

export const Dashboard = () => {
    const navigate = useNavigate()
    const { userInfo, user, setUser, contacts, setContacts } = useAuth() 
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isModalEditOpen, setIsModalEditOpen]= useState(false)
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("contactSync:token")

        if(!token){
            navigate("/")
        }

        api.defaults.headers.common.Authorization = `Bearer ${token}`

        userInfo()

    }, contacts)

    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const toggleEditModal = () => setIsModalEditOpen(!isModalEditOpen)
    const toggleDeleteModal = () => setIsModalDeleteOpen(!isModalDeleteOpen)

    const logout = () => {
        setUser(null)
        localStorage.clear()
        navigate("/")
    }
  
    return(
        <main>
            <HeaderPage>
                <div className="containerHeader">
                    <div>
                        <h2>Bem vindo, {user?.name}</h2>
                    </div>
                    <div>
                        <p>{user?.phone_number} - {user?.email}</p>
                    </div>
                    <button onClick={logout}>Sair</button>
                </div>
            </HeaderPage>

            {isModalOpen && (<ModalAddContact toggleModal={toggleModal} setContacts={setContacts} />)}

            {isModalEditOpen && (<ModalEditContact toggleEditModal={toggleEditModal} setContacts={setContacts} />)}

            {isModalDeleteOpen && (<ModalDeleteContact toggleDeleteModal={toggleDeleteModal} setContacts={setContacts}/>)}

            <SectionStyled>
                <div className="containerContacts">
                    <div className="headerContacts">
                        <h2>Meus Contatos</h2>
                        <button onClick={toggleModal}>Adicionar</button>
                    </div>

                    <ListStyled>
                        {!contacts.length ? <h3>Você não possui nenhum contato :( </h3> : 
                        contacts.map(contato => (<CardContactStyled key={contato.id}>
                            <p>{contato.name}</p>
                            <p>{contato.email}</p>
                            <p>{contato.phone_number}</p>
                            <div>
                                <button onClick={toggleEditModal} className="edit">Editar</button>
                                <button className="trash"><BsTrash2Fill onClick={toggleDeleteModal}/></button>
                            </div>
                        </CardContactStyled>))}
                    </ListStyled>
                </div>
            </SectionStyled>
        </main>
    )
}
