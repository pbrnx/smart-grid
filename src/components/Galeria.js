
import '../styles/Galeria.css';

function Galeria() {
    return(
        <>
        <div className="gallery" align='center'>
            <img className='imgGaleria' src={require('../images/proj1.jpg')}/>
            <img className='imgGaleria' src={require('../images/proj2.jpg')}/>
            <img className='imgGaleria' src={require('../images/proj3.jpg')}/>
            <img className='imgGaleria' src={require('../images/proj4.jpg')}/>            
        </div>
        </>
    )
  }
  
  export default Galeria;