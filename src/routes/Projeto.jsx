import '../styles/Projeto.scss';
import imgGaleria1 from '../images/proj1.jpg';
import imgGaleria2 from '../images/proj2.jpg';
import imgGaleria3 from '../images/proj3.jpg';
import imgGaleria4 from '../images/proj4.jpg';
import imgTexto from '../images/paragrafo1.jpg';

export default function Projeto() {
    document.title = "Smart Grid | Nosso Projeto";
    return (
        <>
            <h1 className='h1Proj'>Smart Grid</h1>
            <div className='paragrafo-container'>
                <p className='paragrafo'>
                <h2> O que é? </h2><br/>
                    Smart grid é um sistema de distribuição de energia elétrica que utiliza tecnologias avançadas de comunicação e controle para permitir uma gestão mais eficiente e inteligente da rede elétrica. Com o uso de sensores e dispositivos de monitoramento em tempo real, a smart grid é capaz de detectar problemas de energia, identificar falhas em equipamentos e até mesmo fornecer informações sobre o consumo de energia dos usuários finais. Além disso, a smart grid também possibilita a integração de fontes de energia renovável, como painéis solares e turbinas eólicas, na rede elétrica, permitindo uma melhor utilização dos recursos energéticos disponíveis.
                </p>
                <div className='img-container'>
                    <img className='imgP1' src={imgTexto} alt='Descrição da imagem' />
                </div>
            </div>
            <h2 className='h2Proj'>Por que utilizar?</h2>
            <p className='paragrafo2'>
                A crise energética no Brasil é um problema que tem sido enfrentado nos últimos anos devido a uma série de fatores. As principais causas da crise energética no país incluem:
            </p>
            <ul className='lista'>
                <li><b>Baixo nível dos reservatórios de água nas hidrelétricas:</b> O sistema elétrico brasileiro é altamente dependente da energia hidrelétrica, e a falta de chuvas em algumas regiões tem levado a um baixo nível dos reservatórios, reduzindo a capacidade de geração de energia elétrica.</li>
                <li><b>Aumento do consumo de energia elétrica:</b> Com o crescimento da população e da economia do país, houve um aumento significativo do consumo de energia elétrica nos últimos anos, o que tem sobrecarregado o sistema elétrico.</li>
                <li><b>Falta de investimentos em novas fontes de energia:</b> O Brasil tem um grande potencial para a geração de energia a partir de fontes renováveis, como solar, eólica e biomassa, mas os investimentos nesse setor têm sido insuficientes para suprir a demanda crescente de energia elétrica.</li>
            </ul>
            <h2 className='h2Proj'>Galeria de Imagens:</h2><br/>
            
            <div className="gallery" align='center'>
                <img className='imgGaleria' src={(imgGaleria1)}/>
                <img className='imgGaleria' src={(imgGaleria2)}/>
                <img className='imgGaleria' src={(imgGaleria3)}/>
                <img className='imgGaleria' src={(imgGaleria4)}/>            
            </div>
        </>
    )
}



