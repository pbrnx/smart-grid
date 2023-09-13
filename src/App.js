import './App.css';
import Cabecalho from './components/Cabecalho';
import Landing from './pages/Landing';
import Rodape from './components/Rodape';
import Cadastro from  './pages/Cadastro';
import Login from './pages/Login';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>  
    <Cabecalho></Cabecalho>
    <div className='content'>
      <Switch>
        
        <Route exact path='/'>
          <Landing/>
        </Route> 

        <Route exact path='/nosso-projeto'>
          <projeto/>
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
