import { useState } from "react";
import Quiz from "./Quiz";

const Jogos = (props) => {

    const alteraTela = props.alteraTela;

    const jogos = [
        {
            id: 0,
            img: '#',
            nome: 'Crespúsculo',
            desc: 'Bella Swan muda-se para a cidade de Forks e ao frequentar a nova escola, conhece o misterioso Edward Cullen que vira sua vida de cabeça para baixo e a muda completamente. Venha fazer esse quiz e descobrir o quanto você sabe sobre esse mundo de vampiros e lobisomens...'

        },
        {
            id: 1,
            img: '#',
            nome: 'O Mundo Sombrio de Sabrina',
            desc: 'Bruxa e também mortal, a jovem Sabrina Spellman fica dividida entre a vida normal de adolescente e o legado de sua família feiticeira. Venha fazer esse quiz e descobrir o quanto você sabe sobre esse mundo de bruxas... '

        },
        {
            id: 2,
            img: '#',
            nome: 'Lúcifer',
            desc: 'Lucifer está entediado e infeliz como o Senhor do Inferno e decide tirar férias em Los Angeles, onde vira dono de uma casa noturna com ajuda de sua serva Mazikeen. Faça esse quiz e descubra o quanto você sabe do mundo dos anjos e demônios...'

        },
        {
            id: 3,
            img: '#',
            nome: 'Marvel',
            desc: 'Você é fã da Marvel? Faça esse quiz e descubra o quanto você conhece desse universo de super-heróis...'

        },
        {
            id: 4,
            img: '#',
            nome: 'Fofoca',
            desc: 'Você é uma pessoa atualizada nas fofocas? Então esse quiz é para você, faça e descubra se está realmente por dentro das atualizades...'

        },
        {
            id: 5,
            img: '#',
            nome: 'Conhecimentos',
            desc: 'Faça esse teste e descubra se está com seus conhecimentos em dia...'

        }
        
  
    ];

    /*const [idJogo, vaiParaJogo] = useState(null)*/



    return(

        <div className="card">
            {jogos.map(jogos => {
                return ( 

                    <div >
                        <image>{jogos.img}</image>
                        <p>{jogos.nome}</p>
                        <p>{jogos.desc}</p>
                        <button onClick={() => alteraTela(<Quiz alteraTela={alteraTela} jogoEscolhido={jogos.id}/>)}>Jogar</button>
                    </div>
                );
            })}
        </div>

    );

}
 
export default Jogos;