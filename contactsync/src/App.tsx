import { Container } from "./components/Container"
import { AuthProvider } from "./contexts/AuthContext"
import RoutesMain from "./routes"
import { GlobalStyle } from "./styles/GlobalStyles"

function App() {
  return (
    <Container>
      <GlobalStyle/>
      <AuthProvider>
        <RoutesMain/>
      </AuthProvider>
    </Container>
  )
}

export default App
