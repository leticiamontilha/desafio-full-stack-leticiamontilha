import { FormRegister } from "../../components/Form/FormRegister"
import { MainPage } from "../../components/Main"
import { SectionLogo } from "../Login/style"
import { SectionRegister } from "./style"


export const Register = () => {
    return(
        <MainPage>
            <SectionLogo>
                <h1>Contact<span>Sync</span></h1>
                <p>"Contatos Sob Controle: Simplifique sua Rede de Relacionamentos"</p>
            </SectionLogo>
            
            <SectionRegister>
                <h2>Cadastre-se</h2>
                <FormRegister/>
            </SectionRegister>
        </MainPage>
    )
}
