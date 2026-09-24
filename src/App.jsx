import{Routes,Route} from 'react-router-dom'

import  {Anotacao}  from './pages/anotacao'
import  {Login}  from './pages/login'
import  {VerAnotacoes}  from './pages/verAnotacoes'
import  {Cadastrar}  from './pages/cadastro'

function App (){
  return(
   <Routes>
      
      <Route
        path="/"
        element= {<Login />}
      />

      <Route
        path="/anotacao"
        element= {<Anotacao />}
      />

    <Route
      path="/anotacoes"
      element={<VerAnotacoes />}
    />
    <Route
      path="/cadastro"
      element={<Cadastrar />}
    />

   </Routes>
  )
}

export default App