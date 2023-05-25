import { SectionLogin, SectionLogo } from "./style"
import { MainStyle } from "../../components/Main/style"
import { FormLogin } from "../../components/Form/FormLogin"

export const Login = () => {

    return(
        <MainStyle>
            <SectionLogo>
                <h1>Contact<span>Sync</span></h1>
                <p>"Contatos Sob Controle: Simplifique sua Rede de Relacionamentos"</p>
            </SectionLogo>
            
            <SectionLogin>
                <h2>Login</h2>
                <FormLogin />
            </SectionLogin>
        </MainStyle>
    )
}
