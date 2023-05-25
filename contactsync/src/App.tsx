import { AuthProvider } from "./contexts/AuthContext"
import RoutesMain from "./routes"
import { GlobalStyle } from "./styles/GlobalStyles"

function App() {
  return (
    <>
      <GlobalStyle/>
      <AuthProvider>
        <RoutesMain/>
      </AuthProvider>
    </>
  )
}

export default App
