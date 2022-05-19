import Jogos from "./Jogos";

const Final = (props) => {

    require("./css/estilo-final.css")

    document.body.style.backgroundImage = 'url("https://i.imgur.com/Sff4bNy.gif")'

    const certa= props.certa;
    const pontos = props.pontos + ( certa ? 5 : 0 )

    const alteraTela = props.alteraTela

    return ( 
        <div className="box">
            <h1> Parabéns</h1>
            <p> Você é um jogador de milhões</p>
            <p> Sua pontuação foi de:  {pontos} </p>

            <button className="" onClick={ () => alteraTela(<Jogos alteraTela={props.alteraTela}/>)}> Jogar Novamente </button>
        </div>
     );
}
 
export default Final;