import { renderHook } from '@testing-library/react';
import '../styles/Projeto.css';

function Projeto() {
    return(
        <>
        <h1 className='Teste'>TESTE</h1>
        <div className="gallery" align='center'>
            <img className='imgGaleria' src={require('../images/skater.jpg')}/>
            <img className='imgGaleria' src={require('../images/skater.jpg')}/>
            <img className='imgGaleria' src={require('../images/skater.jpg')}/>
            <img className='imgGaleria' src={require('../images/skater.jpg')}/>            
        </div>
        </>
    )
  }
  
  export default Projeto;