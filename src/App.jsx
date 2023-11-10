import './App.css';
import Cabecalho from './components/Cabecalho';
import Landing from './routes/Landing';
import Rodape from './components/Rodape';
import Cadastro from  './routes/Cadastro';
import Login from './routes/Login';
import Projeto from './routes/Projeto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './routes/404';



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/nosso-projeto' element={<Projeto />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NotFound/>} />

          </Routes>
        </div>
        <Rodape />
      </BrowserRouter>
    </>
  );
}
 