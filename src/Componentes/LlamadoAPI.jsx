var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&hourly=temperature_2m,relativehumidity_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


// import {AspectosDestacados} from "../componentes/AspectosDestacados";
// import {Hoy} from "../componentes/Hoy";
// import {MinMax} from "../componentes/MinMax";
// import {RelojClima} from "../componentes/RelojClima";
// import cielo3 from "../assets/cielo3.jpg";
// import { useState, useEffect } from "react";
// const estilos = {
//     fondoClima:{
//       backgroundImage: `url(${cielo3})`,
//       backgroundRepeat: "no-repeat",
//       maxWidth:"100%",
//       display:"flex",
//       flexDirection: "column"
//     },
//     titleClima: {
//       fontFamily: "-apple-system",
//       color: "white",
//       fontWeight: "bolder",
//       textAlign: "center",
//       fontSize:"xx-large",
//       border: "solid 2px black",
//       background:"#10113b"
//     },
//      climaContainer: {
//       display: "flex",
//       justifyContent: "flex-start",
//       paddingRight:"3px"
//     },
//     climaLeft: {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "space-evenly",
//     },
//     climaRight: {
//       display: "flex",
//       flexDirection: "column",
//     },     
//   };
  
//   // https://www.tutorialesprogramacionya.com/reactya/detalleconcepto.php?punto=10&codigo=10&inicio=0
// function Clima() {
//     const[data, setData]= useState(null);
//     var requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//       };
//       useEffect(() => {
//         fetch("https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&hourly=temperature_2m,relativehumidity_2m,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1"
//           .then((response) => {
//             return response.json()
//           })
//           .then((data) => {
//             setData(data)
//           })
//       },)
    
//     //   let objetoInfo;
//     //   objetoInfo= fetch("https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&hourly=temperature_2m,relativehumidity_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1", requestOptions)
//     //     .then(response => response.text())
//     //     .then(result => console.log(result))
//     //     .catch(error => console.log('error', error));
//   return (
//     <section className='clima' style={estilos.fondoClima}>
//     <h1 style={estilos.titleClima}>
//       CLIMA
      
//     </h1>
//     <div className='climaContainer' style={estilos.climaContainer}>
//       <div className='climaLeft' style={estilos.climaLeft}>
//         <RelojClima/>
//         <br></br>
//         <MinMax/>
//       </div>
//       <div className='climaRight'style={estilos.climaRight}>
//         <Hoy/>
//         <AspectosDestacados/>
//       </div>
//     </div>

//    </section>
//   );
// }
// export { Clima };