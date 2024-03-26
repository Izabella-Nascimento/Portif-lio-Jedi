import Eu from '../assets/Eu.png'
function AboutMe(){
    return(
        <div className = "card">
            <img src={Eu} alt='Foto do Perfil' className='image'/>
            <h2>Izabella Nascimento</h2>
            <p>Designer gráfica e desenvolvedora
                front-end iniciante explorando o mundo 
                da programação web. Possuo conhecimento em HTML, 
                CSS e Javascript. Estou sempre buscando desafios no
                vasto universo do design e da programação. 
            </p>
        </div>
    )
}

export default AboutMe