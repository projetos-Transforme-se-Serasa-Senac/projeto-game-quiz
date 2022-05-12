const Quizzes = () => {

    const jogos = [
        {
            nome: 'Crepúsculo',
            img: '#'

        }
  
    ];


    {jogos.map(jogos => {
        return ( 

            <div>
                <image>{jogos.img}</image>
                <p>{jogos.nome}</p>
                <button>Jogar</button>
            </div>
         );
    })}

}
 
export default Quizzes;