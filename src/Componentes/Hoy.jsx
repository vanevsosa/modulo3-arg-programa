import {GraficoBarSimple} from './GraficoBarSimple';

const estilos = {
    title: {
      fontFamily: "-apple-system",
      color: "#10113b",
      fontWeight: "bolder",
      fontSize:"xx-large",
      textAlign: "center",
    },
 
    container: {
      margin: "0",
    },     
  };
  
  function Hoy({grafTempXHora, setGrafTempXHora}){
    
    return (
        <div style={estilos.container}>
            <h1 style={estilos.title}>Today</h1>
            <GraficoBarSimple grafTempXHora={grafTempXHora} setGrafTempXHora={setGrafTempXHora} /> 
         </div>
         )
  }
  export {Hoy};