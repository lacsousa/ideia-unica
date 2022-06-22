//import { useRouter } from 'next/router';

export async function getServerSideProps(context){
  const id = context.query.id;

  return {
    props: {
      id: id // Dessa forma o retorno fica estático
    }
  }
}

function Produtos(props){
  // Retirando a captura de propriedades do lado do cliente 
  // E capturando pelo lado do Servidor
  // const router = useRouter();
  // const id = router.query.id;

  return <div>Id do produto: {props.id}</div>

}

export default Produtos;