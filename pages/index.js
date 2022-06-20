import { useState } from 'react';
import Link from 'next/link';


function Home() {
  return (
    <div>
      <h1>Home Teste Luciano Cordeiro</h1>
      <Contador />
    </div>
  )
}

function Contador() {

  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>


      <div>
        <Link href="/sobre">
          <a>Acessar página Sobre</a>
        </Link>
      </div>

      <div>
        <Link href="/tempo">
          <a>Acessar página Tempo</a>
        </Link>
      </div>
    </div>
  )
}

export default Home;
