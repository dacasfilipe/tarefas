import { useState } from 'react'
import ComponenteA from './components/MeusComponentes/ComponenteA'
import LoginStatus from './components/MeusComponentes/LoginStatus'
import Cabecalho from './components/MeusComponentes/Cabecalho'
import Rodape from './components/MeusComponentes/Rodape'
import MenuSuperior from './components/MenuSuperior'
import 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes, Navigate } 
from 'react-router-dom';
function App() {
  //código javascript
  
  //retorno da função que é visualização do componente html
  return (
    <Router>        
        <Routes>
            <Route path="/" element={<MenuSuperior/>}/>
        </Routes>
    </Router>    
            
    
  )
}
export default App;
