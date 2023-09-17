import '../styles/Projeto.css';
import Galeria from '../components/Galeria';

function Projeto() {
    return (
        <>
            <h1 className='h1Proj'>Smart Grid</h1>
            
            <div className='paragrafo-container'>
            
                <p className='paragrafo'>
                <h2> O que é? </h2><br/>
                    Smart grid é um sistema de distribuição de energia elétrica que utiliza tecnologias avançadas de comunicação e controle para permitir uma gestão mais eficiente e inteligente da rede elétrica. Com o uso de sensores e dispositivos de monitoramento em tempo real, a smart grid é capaz de detectar problemas de energia, identificar falhas em equipamentos e até mesmo fornecer informações sobre o consumo de energia dos usuários finais. Além disso, a smart grid também possibilita a integração de fontes de energia renovável, como painéis solares e turbinas eólicas, na rede elétrica, permitindo uma melhor utilização dos recursos energéticos disponíveis.
                </p>
                <img className='imgP1' src={require('../images/paragrafo1.jpg')} alt='Imagem' />
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
            <Galeria />
        </>
    )
}

export default Projeto;
