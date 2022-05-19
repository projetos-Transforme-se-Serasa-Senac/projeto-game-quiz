import Jogos from "./Jogos";

const Final = (props) => {

    require("./css/estilo-final.css")

    document.body.style.backgroundImage = 'url("https://i.imgur.com/Sff4bNy.gif")'

    const certa= props.certa;
    const pontos = props.pontos + ( certa ? 5 : 0 )

    const alteraTela = props.alteraTela

    return ( 
        <div>
            <h1> Parabéns</h1>
            <p> Você terminou o Quiz</p>
            <p> Sua pontuação foi de:  {pontos} </p>

            <button onClick={ () => alteraTela(<Jogos alteraTela={props.alteraTela}/>)}> Recomeçar </button>
        </div>
     );
}
 
export default Final;