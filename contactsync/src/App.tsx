import { AuthProvider } from "./contexts/AuthContext"
import { ContactProvider } from "./contexts/ContactContext"
import RoutesMain from "./routes"
import { GlobalStyle } from "./styles/GlobalStyles"
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
      <GlobalStyle/>
      <AuthProvider>
      <ContactProvider>
        <RoutesMain/>
      </ContactProvider>
      </AuthProvider>
    </>
  )
}

export default App
