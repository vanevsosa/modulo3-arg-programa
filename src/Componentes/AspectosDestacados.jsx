import { CalidadAire } from "./CalidadAire";
import { EstadoViento } from "./EstadoViento";
import { Humedad } from "./Humedad";
import { IndiceUV } from "./IndiceUV";
import { SalidaPuestaSol } from "./SalidaPuestaSol";
import { Visibilidad } from "./Visibilidad";

const estilos = {
  title: {
    fontFamily: "-apple-system",
    color: "#10113b",
    fontWeight: "bolder",
    fontSize: "xx-large",
    textAlign: "center",
  },
  container: {
    margin: "0 ",
    display: "grid",
    columnGap: "5px",
    rowGap: "10px",
    gridTemplateColumns: "1fr 1fr 1fr",
    marginLeft: "5%",
    marginRight: "5%",
    maxWidth: "90%",
  },
};

function AspectosDestacados({uv, setUv , windStatus, setWindStatus,salidaYPuestaSol, setSalidaYPuestaSol,
  humedad, setHumedad,visibilidad, setVisibilidad, calidadDelAire, setCalidadDelAire}) {
  return (
    <div>
      <h1 style={estilos.title}>Highlights</h1>
      <div style={estilos.container}>
  
        <EstadoViento windStatus={windStatus} setWindStatus={setWindStatus} />
        <IndiceUV uv={uv} setUv ={setUv} />
        <SalidaPuestaSol salidaPuestaSol={salidaYPuestaSol} setSalidaPuestaSol={setSalidaYPuestaSol} />
        <Humedad humedad={humedad} setHumedad={setHumedad}/>
        <Visibilidad visibilidad={visibilidad} setVisibilidad={setVisibilidad} />
        <CalidadAire calidadDelAire={calidadDelAire} setCalidadDelAire={setCalidadDelAire}/>
      </div>
    </div>
  );
}
export { AspectosDestacados };