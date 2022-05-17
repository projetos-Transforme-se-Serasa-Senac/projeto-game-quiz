const Jogos = (props) => {

    const alteraTela = props.alteraTela;

    const jogos = [
        {
            id: 1,
            img: '#',
            nome: 'Lorem Ipsum',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

        },
        {
            id: 2,
            img: '#',
            nome: 'Lorem Ipsum',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

        },
        {
            id: 3,
            img: '#',
            nome: 'Lorem Ipsum',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

        },
        {
            id: 4,
            img: '#',
            nome: 'Lorem Ipsum',
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

        }
        
  
    ];


    {jogos.map(jogos => {
        return ( 

            <div >
                <image>{jogos.img}</image>
                <p>{jogos.nome}</p>
                <p>{jogos.desc}</p>
                <button onClick={() => alteraTela()}>Jogar</button>
            </div>
         );
    })}

}
 
export default Jogos;