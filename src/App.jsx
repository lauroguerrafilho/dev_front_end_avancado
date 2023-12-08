// CSS
import './App.css'

// REACT
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// pages
import Home from "./pages/Home.jsx";
import AdicionaDespesa from "./pages/AdicionaDespesa.jsx";
import DespesaIncluida from "./pages/DespesaIncluida.jsx";
import AlteraDespesa from "./pages/AlteraDespesa.jsx";
import ExcluiDespesa from "./pages/ExcluiDespesa.jsx";


//components


function App() {

  return (
       <>
            <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/adicionadespesa" element={<AdicionaDespesa />} />
                  <Route path="/despesaincluida" element={<DespesaIncluida />} />
                  <Route path="/alteradespesa" element={<AlteraDespesa />} />
                  <Route path="/excluidespesa" element={<ExcluiDespesa />} />
              </Routes>
          </BrowserRouter>

       </>

  )
}

export default App
