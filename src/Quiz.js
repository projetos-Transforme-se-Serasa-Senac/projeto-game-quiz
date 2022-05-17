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
                pergunta: "Quantos anos Edward tem nos filmes?",
                respostas: ["109", "104", "113", "102"],
                correta: 1
            },
            {
                pergunta: "Quem foi o verdadeiro amor de Victoria?",
                respostas: ["Riley", "Edward", "James", "Felix"],
                correta: 2
            },
            {
                pergunta: "Em qual filme Jacob beija Bella pela primeira vez?",
                respostas: ["Amanhecer parte 1", "Amanhecer parte 2", "Eclipse", "Lua nova"],
                correta: 2
            },
            {
                pergunta: "Por qual motivo Rosalie não se dava bem com a Bella no começo?",
                respostas: ["Inveja, por bella desperdiçar sua vida humana" , "Gostava do edward" , "Por conta de uma briga", "Todas as alternativas"],
                correta: 0
            },
            {
                pergunta: "Qual é o nome da Bella completo?",
                respostas: ["Bella Swan" , "Bella Cullen" , "Isabella Marie Swan" ,"Isabella Swan"],
                correta: 2
            }
        ],

        [
           {
            pergunta: "Ambrose é o que de Sabrina?",
            respostas: ["Primo" , "Tio", "Melhor Amigo" , "Irmão"],
            correta: 0
        },
        {
            pergunta: "Qual Personagem é filha do padre BlackWood?",
            respostas: ["Dorcas", "Prudence" , "Sabrina" , "Agatha"],
            correta: 1
        },
        {
            pergunta: "Em que ano a série foi lançada?",
            respostas: ["2016", "2019", "2018", "2017"],
            correta: 2
        },
        {
            pergunta: "Quantas temporadas tem a série?",
            respostas: ["2", "3", "5", "4"],
            correta: 3
        },
        {
            pergunta: "Qual o nome da atris que interpreta a personagem pricipal?",
            respostas: ["Lucy Davis", "Miranda Otto", "Abigail Owen" , "Kiernan Shipka" ],
            correta: 3
        } 
        ],

        [
            {
                pergunta: "Em qual temporada Chloé vê a face de lucifer pela primeira vez?",
                respostas: ["4° temporada", "Ultima temporada" , "2° temporada", "3° temporada"],
                correta: 3
            },
            {
                pergunta: "Mazikeen é o que?",
                respostas: ["Um anjo", "Uma demonia", "Uma monstra" , "Humana"],
                correta: 1
            },
            {
                pergunta: "Qual o nome dado a lucifer quando ainda era anjo?",
                respostas: ["Samuel" , "Miguel", "Samael" , "Daniel"],
                correta: 2
            },
            {
                pergunta: "Qual o nome do irmão gemeo de lucifer?",
                respostas: ["Miguel", "Amenadiel", "Daniel" , "Gabriel"],
                correta: 0
            },
            {
                pergunta: "Quem é a mãe da mazekeen?",
                respostas: ["Lilith" , "Charlotte", "Gamigin" , "Hécate"],
                correta: 0
            }
        ],

        [
            {
                pergunta: "Em que ano foi lançado o primeiro filme do Homem de Ferro?",
                respostas: ["2013", "2015", "2008", "2012"],
                correta: 2
            },
            {
                pergunta: "Em qual monumento Peter Parker salva seus colegas em Homem Aranha: De volta ao Lar?",
                respostas: ["Cristo Redentor", "Torre Eiffel" ,"Big Ben" , "Monumento de Washington"],
                correta: 3
            },
            {
                pergunta: "Quantas jóias do infinito existem?",
                respostas: ["5", "6", "4", "8"],
                correta: 1
            },
            {
                pergunta: "A Viúva negra é originalmente de qual país?",
                respostas: ["Rússia", "Filipinas", "França", "Eslováquia"],
                correta: 0
            },
            {
                pergunta: "Como Nick Fury perdeu o olho?",
                respostas: ["Luta contra o Homem de Ferro" , "Em uma batalha de quando era jovem" , "Arranhão de um gato", "Caiu de um prédio quando criança"],
                correta: 2
            }
        ]

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