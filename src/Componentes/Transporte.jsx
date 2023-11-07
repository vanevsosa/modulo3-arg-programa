import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from "react";
import L from 'leaflet';

const StyledDiv = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: blacksmoke;
    text-shadow: 1px 1px 1px black,  0 0 0.5em blue;
    height: 600px;
    gap: 3px;
    border: 10px solid #222C32;
    border-radius: 3%;
`;

export default function Transporte() {

  const busIcon = L.icon({
    iconUrl: require('../assets/bus.jpg'),
    iconSize: [25, 25],
  });

  let [posicion, setPosicion] = useState({ lat: -34.6037, lng: -58.3816 });

  let [datosApi, setDatosApi] = useState();

  let [cargando, setCargando] = useState(true);

  let [errorApi, setErrorApi] = useState(false);

  let [lineasActivas, setLineasActivas] = useState();

  let [lineaElegida, setLineaElegida] = useState([]);

  let [bondiElegido, setBondiElegido] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch('https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6');
      if (!response.ok) {
        setErrorApi(true);
      };
      const jsonData = await response.json();
      if (jsonData) {
        setDatosApi(jsonData);
        let lineas = ["-elija una opcion-"];
        jsonData.map((i) => {
          return (lineas.push(`${i["route_short_name"]} - ${i["trip_headsign"]}`))
        });
        setLineasActivas((Array.from(new Set(lineas))).sort());
        setCargando(false);
        setErrorApi(false);
        let linea = (jsonData.filter((i) => (`${i["route_short_name"]} - ${i["trip_headsign"]}`) === bondiElegido));
        setLineaElegida(linea);
      };
    } catch (error) {
      console.error('Error:', error);
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCargando(true);
      fetchData();
    }, 31000);
    return () => clearInterval(interval);
  }, [lineaElegida]);

  function handleChange(event) {
    let linea = (datosApi.filter((i) => (`${i["route_short_name"]} - ${i["trip_headsign"]}`) === event.target.value));
    setLineaElegida(linea);
    setBondiElegido(event.target.value);
  };

  function posicionPromedio() {
    const sumalat = lineaElegida.map(item => item.latitude).reduce((prev, curr) => prev + curr, 0);
    const promlat = (sumalat / lineaElegida.length);
    const sumalng = lineaElegida.map(item => item.longitude).reduce((prev, curr) => prev + curr, 0);
    const promlng = (sumalng / lineaElegida.length);
    setPosicion({ lat: promlat, lng: promlng });
  };

  function SetViewOnClick() {
    const map = useMap();
    map.setView(posicion, 10);
    return null;
  };

  return (

    <StyledDiv>
      <h2>INFO ONLINE DE TRANSPORTE PUBLICO</h2>

      {cargando && <h4>ACTUALIZANDO DATOS...</h4>}

      {errorApi && <h4>No se pudo obtener la información</h4>}

      {!cargando && <label>

        Selecciona una linea :

        <select value={bondiElegido} onChange={handleChange}>
          {lineasActivas.map((option) => (<option value={option}>{option}</option>))}
        </select>

      </label>}

      <MapContainer style={{ width: "100%", height: "100%" }} center={posicion} zoom={10} scrollWheelZoom={false}>

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {lineaElegida.map((item) => {
          return (
            <Marker position={[item["latitude"], item["longitude"]]} icon={busIcon}>
              <Popup>
                Linea: {item["route_short_name"]}
                <br />Destino: {item["trip_headsign"]}
                <br />Empresa: {item["agency_name"]}
                <br />Velocidad: {item["speed"]}km/h
              </Popup>
            </Marker>
          )
        })}

        <SetViewOnClick />
      </MapContainer>
    </StyledDiv>
  );
};
    
