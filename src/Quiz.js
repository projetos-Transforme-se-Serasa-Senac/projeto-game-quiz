import React, {useState} from 'react';


import Final from "./Final";

const Quiz = (props) => {

    const alteraTela = props.alteraTela

    const escolhido = props.escolhido;

    const [ etapa, alteraEtapa] = useState(0)

    const [pontos, alteraPontos] = useState(0)

    const perguntas = [
        [
            {
                pergunta: 'Qual a cor do cavalo Branco de Napoleão? ',
                respostas: ['Preto', 'Amarelo', 'Branco', 'Azul'],
                correta: 0
            },
            {
                pergunta: 'Por que você ainda não assistiu Rick and Morty? ',
                respostas: ['Porque eu sou uma pessoa triste', 'Eu assisti', 'Vou assistir quando assistir em casa', 'Tenho preguiça de procurar piratation'],
                correta: 0
            }
        ],
        [],
        []
    ];

    const verificaResposta = (i) => {

        const resposta_correta = perguntas[etapa].correta;
        if(resposta_correta == i){
            { localStorage.setItem("pontos", pontos+5 ) }
            alteraPontos(pontos + 5)
        }
        
        if(etapa + 1 < perguntas.length){
            alteraEtapa(etapa + 1)
        }else{
            alteraTela(<Final alteraTela={alteraTela}/>)
        }
    }

    return ( 
        <div>

            <p> Você tem <strong> {pontos} </strong></p>
           
            <h1> {perguntas[etapa].pergunta} </h1>
            <ul>
                {
                    perguntas[etapa].respostas.map((resposta, i) => {
                        return <li onClick={() => verificaResposta(i)}> {resposta} </li>
                    })
                }
            </ul>

        </div>
     );
}
 
export default Quiz;