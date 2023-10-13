import cielo from '../assets/cielo.jpeg';
import { useState, useEffect } from "react";
import {RecepcionApiDesdeClima} from './RecepcionApiDesdeClima';
import {CircularWithValueLabel} from './CircularProgressWithLabel';


const estilos = {
  fondoClima: {
    backgroundImage: `url(${cielo})`,
    backgroundRepeat: "no-repeat",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
  },
  titleClima: {
    fontFamily: "-apple-system",
    color: "black",
    fontWeight: "bolder",
    textAlign: "center",
    fontSize: "xx-large",
    border: "solid 2px black",
    background: "lightpink",
  },
};

function Clima() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function obtenerDatosDeAPI() {
      try {
        const respuesta = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&hourly=temperature_2m,relativehumidity_2m,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1"
        );
        if (!respuesta.ok) {
          throw new Error("No se puedo obtener respuesta de la API");
        }

        const datos = await respuesta.json();
        setData(datos);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }

    obtenerDatosDeAPI();
  }, []);
  //El segundo argumento [] asegura que la solicitud se realice una vez cuando se monta el componente.

   return (
    <section className="clima" style={estilos.fondoClima}>
      <h1 style={estilos.titleClima}>CLIMA</h1>
      <div>
        {error ? (
          <p>Error al obtener datos de la Api:{error.message}</p>
        ) : (
          <pre>
            {" "}
            {loading && 
            <div><h1>Cargando...</h1>
            <CircularWithValueLabel/></div>}
            {!loading && RecepcionApiDesdeClima && (
              <RecepcionApiDesdeClima
                data={data}
                setData={setData}
                error={error}
                setError={setError}
              />
            )}
          </pre>
        )}
      </div>
    </section>
  );    
}
export { Clima };