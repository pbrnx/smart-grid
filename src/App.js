import './App.css';
import Cabecalho from './components/Cabecalho';
import Landing from './pages/Landing';
import Rodape from './components/Rodape';
import Cadastro from  './pages/Cadastro';
import Login from './pages/Login';
import Projeto from './pages/Projeto';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <Helmet>
      <title>Smart Grid | Conectando o Futuro</title>
    </Helmet>
    <BrowserRouter>  

    <Cabecalho></Cabecalho>
    <div className='content'>
      <Switch>     
        <Route exact path='/'>
          <Landing/>
        </Route> 

        <Route exact path='/nosso-projeto'>
          <Projeto/>
        </Route>

        <Route exact path='/cadastro'>
          <Cadastro />
        </Route>  

        <Route exact path='/login'>
          <Login />
        </Route>  

      </Switch>
    </div>
    <Rodape></Rodape>
  </BrowserRouter>
  </>    
  );
}

export default App;
