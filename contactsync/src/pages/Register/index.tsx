import { FormRegister } from "../../components/Form/FormRegister"
import { MainPage } from "../../components/Main"


export const Register = () => {
    return(
        <MainPage>
            <section>
                <h1>Contact<span>Sync</span></h1>
            </section>
            
            <section>
                <h2>Cadastre=se</h2>
                <FormRegister/>
            </section>
        </MainPage>
    )
}
