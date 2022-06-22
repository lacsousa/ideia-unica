//import { useRouter } from 'next/router';

/* export async function getServerSideProps(context){
  const id = context.query.id;

  return {
    props: {
      id: id // Dessa forma o retorno fica estático
    }
  }
}
 */
export async function getStaticPaths(){
  return {
    paths: [{
      params: {
        id:'1'
      }
    }, {
      params: {
        id:'2'
      }
    }],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context){
  await delay(5000);
  const id = context.params.id;

  return { 
    props: { 
      id: id
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


const delay = ms => new Promise(resolve => setTimeout(resolve,ms));