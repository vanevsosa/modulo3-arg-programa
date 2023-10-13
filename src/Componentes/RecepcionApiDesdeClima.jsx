import { AspectosDestacados } from '../Componentes/AspectosDestacados';
import { Hoy } from '../Componentes/Hoy';
import { MinMax } from '../Componentes/MinMax';
import { RelojClima } from '../Componentes/RelojClima';
import { useState } from 'react';

const estilos = {
  climaContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    boxSizing: "border-box",
  },
  climaLeft: {
    display: "flex",
    width: "25%",
    float: "left",
    padding: "15px",
  },
  climaRight: {
    display: "flex",
    width: "75%",
    float: "left",
  },
};

// // https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&hourly=temperature_2m,relativehumidity_2m,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1
function RecepcionApiDesdeClima({ data, setData, error, setError }) {
  console.log(data["daily"]["temperature_2m_min"]);
  console.log(data["hourly"]);

  const [tempActual, setTempActual] = useState(
    data["current_weather"]["temperature"]
  );
  const [fecha, setFecha] = useState(data["current_weather"]["time"]);
  const [tempMinMax, setTempMinMax] = useState({
    min: data["daily"]["temperature_2m_min"],
    max: data["daily"]["temperature_2m_max"],
  });

  const [grafTempXHora, setGrafTempXHora] = useState(
    data["hourly"]["temperature_2m"].filter(
      (value, index) => index in [0, 3, 6, 9, 12, 15, 18, 21]
    )
  );

  const [uv, setUv] = useState(data["daily"]["uv_index_max"]);
  const [windStatus, setWindStatus] = useState(
    data["daily"]["windspeed_10m_max"]
  );

  const [salidaYPuestaSol, setSalidaYPuestaSol] = useState({
    min: data["daily"]["sunrise"],
    max: data["daily"]["sunset"],
  });

  const [humedad, setHumedad] = useState(
    data["hourly"]["relativehumidity_2m"]["11"]
  );

  const [visibilidad, setVisibilidad] = useState(
    data["hourly"]["visibility"]["11"]
  );
  const [calidadDelAire, setCalidadDelAire] = useState(
    data["current_weather"]["weathercode"]
  );

  //El segundo argumento [] asegura que la solicitud se realice una vez cuando se monta el componente.
  return (
    <div className="climaContainer" style={estilos.climaContainer}>
      <div className="climaLeft" style={estilos.climaLeft}>
        <RelojClima
          tempActual={tempActual}
          setTempActual={setTempActual}
          fecha={fecha}
          setFecha={setFecha}
          calidadDelAire={calidadDelAire}
          setCalidadDelAire={setCalidadDelAire}
        />
        <br></br>
        <MinMax tempMinMax={tempMinMax} setTempMinMax={setTempMinMax} />
      </div>
      <div className="climaRight" style={estilos.climaRight}>
        <Hoy
          grafTempXHora={grafTempXHora}
          setGrafTempXHora={setGrafTempXHora}
        />
        <AspectosDestacados
          uv={uv}
          setUv={setUv}
          windStatus={windStatus}
          setWindStatus={setWindStatus}
          salidaYPuestaSol={salidaYPuestaSol}
          setSalidaYPuestaSol={setSalidaYPuestaSol}
          humedad={humedad}
          setHumedad={setHumedad}
          visibilidad={visibilidad}
          setVisibilidad={setVisibilidad}
          calidadDelAire={calidadDelAire}
          setCalidadDelAire={setCalidadDelAire}
        />
      </div>
    </div>
  );
}

export { RecepcionApiDesdeClima };