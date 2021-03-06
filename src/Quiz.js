import React, {useState} from 'react';

import Final from "./Final";


const Quiz = (props) => {

    require('./css/estilo-quiz.css')

    document.body.style.backgroundImage = 'url("https://i.imgur.com/NgmnuMC.gif")'

    const alteraTela = props.alteraTela

    const jogoEscolhido = props.jogoEscolhido;

    const [ etapa, alteraEtapa] = useState(0)

    const [pontos, alteraPontos] = useState(0)



    const perguntas = [
        [
            {
                img: 'https://i.imgur.com/T31K8M5.jpg',
                pergunta: "Quantos anos Edward tem nos filmes?",
                respostas: ["109", "104", "113", "102"],
                correta: 1
            },
            {
                img: 'https://i.imgur.com/dMUKmDT.jpg',
                pergunta: "Quem foi o verdadeiro amor de Victoria?",
                respostas: ["Riley", "Edward", "James", "Felix"],
                correta: 2
            },
            {
                img: 'https://i.imgur.com/C1iU1gg.jpg',
                pergunta: "Em qual filme Jacob beija Bella pela primeira vez?",
                respostas: ["Amanhecer parte 1", "Amanhecer parte 2", "Eclipse", "Lua nova"],
                correta: 2
            },
            {
                img: 'https://i.imgur.com/16BJilk.png',
                pergunta: "Por qual motivo Rosalie não se dava bem com a Bella no começo?",
                respostas: ["Inveja, por bella desperdiçar sua vida humana" , "Gostava do edward" , "Por conta de uma briga", "Todas as alternativas"],
                correta: 0
            },
            {
                img: 'https://i.imgur.com/sgyjhwW.jpg',
                pergunta: "Qual é o nome da Bella completo?",
                respostas: ["Bella Swan" , "Bella Cullen" , "Isabella Marie Swan" ,"Isabella Swan"],
                correta: 2
            }
        ],

        [
           {
                img: 'https://i.imgur.com/W9Al76G.jpg',
                pergunta: "Ambrose é o que de Sabrina?",
                respostas: ["Primo" , "Tio", "Melhor Amigo" , "Irmão"],
                correta: 0
            },
            {
                img: 'https://i.imgur.com/Qv9TkeZ.jpg',
                pergunta: "Qual Personagem é filha do padre BlackWood?",
                respostas: ["Dorcas", "Prudence" , "Sabrina" , "Agatha"],
                correta: 1
            },
            {
                img: 'https://i.imgur.com/UIIcSp7.jpg',
                pergunta: "Em que ano a série foi lançada?",
                respostas: ["2016", "2019", "2018", "2017"],
                correta: 2
            },
            {
                img: 'https://i.imgur.com/am8mtCx.jpg',
                pergunta: "Quantas temporadas tem a série?",
                respostas: ["2", "3", "5", "4"],
                correta: 3
            },
            {
                img: 'https://i.imgur.com/teSOGBn.jpg',
                pergunta: "Qual o nome da atris que interpreta a personagem pricipal?",
                respostas: ["Lucy Davis", "Miranda Otto", "Abigail Owen" , "Kiernan Shipka" ],
                correta: 3
            } 
        ],

        [
            {
                img: 'https://i.imgur.com/mvaaC98.jpg',
                pergunta: "Em qual temporada Chloé vê a face de lucifer pela primeira vez?",
                respostas: ["4° temporada", "Ultima temporada" , "2° temporada", "3° temporada"],
                correta: 3
            },
            {
                img: 'https://i.imgur.com/jFuEVht.jpg',
                pergunta: "Mazikeen é o que?",
                respostas: ["Um anjo", "Uma demonia", "Uma monstra" , "Humana"],
                correta: 1
            },
            {
                img: 'https://i.imgur.com/4ntRiDV.jpg',
                pergunta: "Qual o nome dado a lucifer quando ainda era anjo?",
                respostas: ["Samuel" , "Miguel", "Samael" , "Daniel"],
                correta: 2
            },
            {
                img: 'https://i.imgur.com/7SwbkOq.jpg',
                pergunta: "Qual o nome do irmão gemeo de lucifer?",
                respostas: ["Miguel", "Amenadiel", "Daniel" , "Gabriel"],
                correta: 0
            },
            {
                img: 'https://i.imgur.com/OQCKFUN.jpg',
                pergunta: "Quem é a mãe da mazekeen?",
                respostas: ["Lilith" , "Charlotte", "Gamigin" , "Hécate"],
                correta: 0
            }
        ],

        [

            {
                img: 'https://i.imgur.com/EO07GBL.jpg',
                pergunta: "Em que ano foi lançado o primeiro filme do Homem de Ferro?",
                respostas: ["2013", "2015", "2008", "2012"],
                correta: 2
            },
            {
                img: 'https://i.imgur.com/XJ68MP2.jpg',
                pergunta: "Em qual monumento Peter Parker salva seus colegas em Homem Aranha: De volta ao Lar?",
                respostas: ["Cristo Redentor", "Torre Eiffel" ,"Big Ben" , "Monumento de Washington"],
                correta: 3
            },
            {
                img: 'https://i.imgur.com/acirYW0.png',
                pergunta: "Quantas jóias do infinito existem?",
                respostas: ["5", "6", "4", "8"],
                correta: 1
            },
            {
                img: 'https://i.imgur.com/lqP8oG0.jpg',
                pergunta: "A Viúva negra é originalmente de qual país?",
                respostas: ["Rússia", "Filipinas", "França", "Eslováquia"],
                correta: 0
            },
            {
                img: 'https://i.imgur.com/PTJFoo6.jpg',
                pergunta: "Como Nick Fury perdeu o olho?",
                respostas: ["Luta contra o Homem de Ferro" , "Em uma batalha de quando era jovem" , "Arranhão de um gato", "Caiu de um prédio quando criança"],
                correta: 2
            }
        ],

        [
            {
                img: 'https://i.imgur.com/nSsAMNZ.jpg',
                pergunta: "Com qual desses artistas a Anitta nunca teve um affair?",
                respostas: ["Neymar" , "Zac Efron" ," Shawn Mendes" , "Maluma"],
                correta: 2
            },
            {
                img: 'https://i.imgur.com/Tw04COQ.jpg',
                pergunta: "Em qual ano rolou a polêmica entre Luísa Sonsa e Whindersson Nunes?",
                respostas: ["2020" , "2021" , "2018" , "2019"],
                correta: 0
            },
            {
                img: 'https://i.imgur.com/6R3WknL.png',
                pergunta: "Qual desse participantes do BB22 foi expulso por agressão?",
                respostas: ["Eliezer" , "Natalia" , "Luciano" , "Maria"],
                correta: 3
            },
            {
                img: 'https://i.imgur.com/1r3qsC0.jpg',
                pergunta: "Qual foi o participante do BBB que teve o maior índice de rejeição ?",
                respostas: ["Felipe Prior" , "Viih Tube" , "Karol Conka" , "Nego Di"],
                correta: 2
            },
            {
                img: 'https://i.imgur.com/wQzryTi.png',
                pergunta: "Quantas traições de Arthur Aguiar foram confirmadas?",
                respostas: ["17" , "13" , "14" , "16"],
                correta: 3
            } 
        ],

        [
            {
                img: 'https://i.imgur.com/HGhZhhx.jpg',
                pergunta: "No filme O Náufrago, qual é o nome dado pelo personagem à bola de vôlei que encontrou na ilha?",
                respostas: ["Wilson" , "Johnny" , "Sally" , "Juliet"],
                correta: 0
            },
            {
                img: 'https://i.imgur.com/09GPchC.jpg',
                pergunta: "Qual a última vez que a Seleção Brasileira chegou a uma final de copa do mundo?",
                respostas: [" 2002" , "2006" , "2010" , "2014"],
                correta: 0
            },
            {
                img: 'https://i.imgur.com/k8FC9AD.png',
                pergunta: "Qual destas doenças tem como sintomas Febre Hemorrágica?",
                respostas: ["Febre Amarela" , "Todas alternativas" , "Leptospirose" , "Ebola"],
                correta: 1
            },
            {
                img: 'https://i.imgur.com/KqvgicO.jpg',
                pergunta: "Qual animal simboliza o pecado?",
                respostas: ["Gato" , "Serpente" , "Cachorro" , "Veado"],
                correta: 1
            },
            {
                img: 'https://i.imgur.com/OpfHHON.png',
                pergunta: "Onde se localiza a cidade de Hollywood?",
                respostas: ["Flórida" , "Texas" , "Califórnia" , "Los Angeles"],
                correta: 2
            } 
        ]

    ];

    const coresBotao = ['vermelho', 'roxo', 'azul', 'verde']


    const perguntaAtual = perguntas[jogoEscolhido][etapa]

    const verificaResposta = (i) => {
        

        const resposta_correta = perguntaAtual.correta;
        const certa = resposta_correta == i;
        if(resposta_correta == i){
            //{ localStorage.setItem("pontos", pontos+5 ) }
            document.getElementById(i).classList.add("RespostaCerta")
            alteraPontos(pontos + 5)
        }else{
            document.getElementById(i).classList.add("RespostaIncorreta")
        }
        
        setTimeout(() => {
            document.getElementById(i).classList.remove("RespostaCerta")
            document.getElementById(i).classList.remove("RespostaIncorreta")

            if(etapa + 1 < perguntas[i].length){
                alteraEtapa(etapa + 1)
            }else{
                alteraTela(<Final alteraTela={alteraTela} pontos={pontos} certa = {certa} />)
            }

        }, 300);

    }


    return ( 
        <div className='box'>

            <p> Você tem <strong> {pontos} </strong></p>

            <img src={perguntaAtual.img}/>
           
            <h1> {perguntaAtual.pergunta} </h1>
            <ul>
                {
                    perguntaAtual.respostas.map((resposta, i) => {
                        return <li className={coresBotao[i]} id={i} onClick={() => verificaResposta(i)}> {resposta} </li>
                    })
                }
            </ul>

        </div>
     );
}
 
export default Quiz;