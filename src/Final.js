import Jogos from "./Jogos";
import Quiz from "./Quiz";

const Final = (props) => {

    const alteraTela = props.alteraTela

    return ( 
        <div>
            <h1> Parabéns</h1>
            <p> Você terminou o Quiz</p>
            <button onClick={ () => alteraTela(<Jogos alteraTela={props.alteraTela}/>)}> Recomeçar </button>
        </div>
     );
}
 
export default Final;