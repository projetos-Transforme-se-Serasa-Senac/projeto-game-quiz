import React, {useState} from "react";

/*import Apresentacao from "./Apresentacao";*/
import Jogos from "./Jogos";

function App() {

  document.body.style.backgroundImage = 'none'

  const [tela, alteraTela] = useState(null);

  if (tela == null){
    alteraTela(<Jogos alteraTela = {alteraTela}/>)
  }

  /*if (tela == null){
    alteraTela(<Apresentacao alteraTela = {alteraTela}/>)
  }*/

  
  return (
    <div>

      {tela}

    </div>
  );
}

export default App;
