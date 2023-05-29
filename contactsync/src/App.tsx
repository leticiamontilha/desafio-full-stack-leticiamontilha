import { AuthProvider } from "./contexts/AuthContext"
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
        <RoutesMain/>
      </AuthProvider>
    </>
  )
}

export default App
