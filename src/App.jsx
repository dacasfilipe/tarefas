import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponenteA from './components/MeusComponentes/ComponenteA'
import LoginStatus from './components/MeusComponentes/LoginStatus'
import Cabecalho from './components/MeusComponentes/Cabecalho'
import Rodape from './components/MeusComponentes/Rodape'

function App() {
  //código javascript
  const [count, setCount] = useState(0)

  //retorno da função que é visualização do componente html
  return (
    <>
      <div>
        <Cabecalho/>
        <ComponenteA/>
        <LoginStatus/>
        <Rodape/>
      </div>
      
    </>
  )
}

export default App
