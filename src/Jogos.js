import { useState } from "react";
import Quiz from "./Quiz";

const Jogos = (props) => {

    require('./css/estilo.css')

    const alteraTela = props.alteraTela;

    const jogos = [
        {
            id: 0,
            img: '#',
            nome: 'Crespúsculo',
            desc: 'Faça esse quiz e descubra o quanto você sabe sobre o mundo de vampiros e lobisomens segundo a saga de filmes de Crepúsculo...'

        },
        {
            id: 1,
            img: '#',
            nome: 'O Mundo Sombrio de Sabrina',
            desc: 'Faça esse quiz e descubra o quanto você sabe sobre o mundo de bruxas segunda a série O Mundo Sombrio de Sabrina... '

        },
        {
            id: 2,
            img: '#',
            nome: 'Lúcifer',
            desc: ' Faça esse quiz e descubra o quanto você sabe do mundo dos anjos e demônios segundo a série Lúcifer...'

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
            desc: 'Faça esse teste e descubra se está com seus Conhecimentos em dia...'

        }
        
  
    ];

    /*const [idJogo, vaiParaJogo] = useState(null)*/



    return(

        <div>
            <div className="menu">
                <img src="https://i.imgur.com/kcf4CxO.png" /> 
            </div>
            <div class="categorias">
                <a href="url" class="rosa">Séries</a>
                <a href="url" class="roxo">Filmes</a>
                <a href="url" class="azul">Conhecimentos gerais</a>
                <a href="url" class="amarelo">Fofocas</a>
            </div>
            <div className="container">
        
                {jogos.map(jogos => {
                    return ( 

                        <div className="card">
                            <div className="card-quiz card-quiz1">
                                <div className="content">
                                    <img src={jogos.img}/>
                                    <p>{jogos.nome}</p>
                                </div>
                            </div>
                            <div className="card-quiz card-quiz2">
                                <div className="content">
                                    <p>{jogos.desc}</p>
                                    <a onClick={() => alteraTela(<Quiz alteraTela={alteraTela} jogoEscolhido={jogos.id}/>)}>Jogar</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
                </div>
                <footer class="rodape">
          
                        <div>
                            <strong>Desenvolvido por:</strong>
                            <p>Giulia Maia</p>
                            <p>Alice Silva</p>
                            <p>Isabela Correia</p>
                            <p>Esther Lira</p>
                        </div>
                        <div>
                            <strong>Front-end:</strong>
                            <p>Isabela Correia</p>
                            <p>Esther Lira</p>
                        </div>
                        <div>
                            <strong>Back-end:</strong>
                            <p>Giulia Maia</p>
                            <p>Alice Silva</p>
                        </div>
                            
                </footer>
        </div>


    );

}
 
export default Jogos;