import { useState, useEffect } from 'react';


function Tempo(props) {

  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();


  return (
    <div id="tempo">
      <div id="tempo-din"> {dynamicDateString} (dinâmico) 
      </div>
      <div id="tempo-est"> {props.staticDateString} (estático) </div>
    </div>
  )
}

export function getStaticProps() {

  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString();

  return {
    props: {
      staticDateString
    }
  }
}

export default Tempo;