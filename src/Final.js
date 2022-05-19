import Jogos from "./Jogos";

const Final = (props) => {

    const pontos = props.pontos

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