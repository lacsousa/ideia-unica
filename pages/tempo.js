import { useState, useEffect } from 'react';


function Tempo(props) {

  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();


  return (
    <div id="tempo">
      <div id="tempo-din"> {dynamicDateString} (dinâmico)   </div>
      <div id="tempo-est"> {props.staticDateString} (estático) </div>
    </div>
  )
}

export async function getStaticProps() {

  console.log('> Passando pelo getStaticProps();');
 // console.log('> Adicionando um delay de 5 segundos');

  //await delay(5000);

  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    }, revalidate: 1
  }
}

//const delay = ms => new Promise(resolve => setTimeout(resolve,ms));

export default Tempo;