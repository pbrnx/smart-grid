import { renderHook } from '@testing-library/react';
import '../styles/Projeto.css';

function Projeto() {
    return(
        <>
        <h1 className='Teste'>TESTE</h1>
        <div className="gallery" align='center'>
            <img className='imgGaleria' src={require('https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80')}/>
            <img className='imgGaleria' src={require('https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80')}/>
            <img className='imgGaleria' src={require('../images/skater.jpg')}/>
            <img className='imgGaleria' src={require('../images/skater.jpg')}/>            
        </div>
        </>
    )
  }
  
  export default Projeto;