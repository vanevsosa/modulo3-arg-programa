// import { useState } from "react";

const estilos = {
    grilla: {
      backgroundColor: "#c5e0dc",
      border: "5px solid #10113b",
      fontSize: "medium",
      textAlign: "center",
    },
    span: {
      fontSize: "x-large",
      color: "rgb(39 41 209)",
      fontWeight: "bolder",
    },
    span2: {
      fontSize: "large",
      fontWeight: "bolder",
    },
    span3: {
      fontSize: "medium",
      fontWeight: "bolder",
    },
    img: {
        width: "35%",
        height: "auto",
        backgroundColor: "#a9d0e5"
      },
  };

  function CalidadAire({calidadDelAire, setCalidadDelAire}) {
    // const [icons, setIcons]= useState("");

    // setIcons=(data.weatherCodeInfo[calidadDelAire].image_src);
    const weatherCodeInfo = {
    0 : {
        "name": "despejado",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
        
    },
    1 : {
        "name": "Mayormente despejado",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg"
    },
    2 : {
        "name": "Parcialmente Nublado",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg"
    },
    3 : {
        "name": "Nublado / cubierto",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme.svg"
    },
    45 : {
        "name": "Niebla",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-haze.svg"
    },
    48 : {
        "name": "Niebla con escarcha",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/fog.svg"
    },
    51 : {
        "name": "Llovizna Ligera",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg"
    },
    53 : {
        "name": "Llovizna moderada",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/hail.svg"
    },
    55 : {
        "name": "Llovizna Intensa",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg"
    },
    56 : {
        "name": "Escarcha Ligera",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-drizzle.svg"
    },
    57 : {
        "name": "Escarcha Densa",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-fog.svg"
    },
    61 : {
        "name": "Lluvia ligera",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-rain.svg"
    },
    63 : {
        "name": "Lluvia moderada",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-rain.svg"
    },
    65 : {
        "name": "lluvia intensa",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-hail.svg"
    },
    66 : {
        "name": "Lluvia fría, ligera",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-day-rain.svg"
    },
    67 : {
        "name": "Lluvia fría, intensa",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-hail.svg"
    },
    71 : {
        "name": "Nevada ligera",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-day-snow.svg"
    },
    73 : {
        "name": "Nevada moderada",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-snow.svg"
    },
    75 : {
        "name": "Nevada intensa",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-snow.svg"
    },
    77 : {
        "name": "aguanieve",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/extreme-day-snow.svg"
    },
    80 : {
        "name": "tormenta ligera",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day.svg"
    },
    81 : {
        "name": "Tormenta moderada",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-overcast-rain.svg"
    },
    82 : {
        "name": "Tormenta fuerte",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-extreme-rain.svg"
    },
    85 : {
        "name": "tormenta de nieve, moderada",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day-snow.svg"
    },
    86 : {
        "name": "tormenta de nieve, fuerte",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day-snow.svg"
    },
    95 : {
        "name": "Tormenta eléctrica",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-extreme-rain.svg"
    },
    96 : {
        "name": "Tormenta eléctrica con Granizo ligero",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day-extreme-rain.svg"
    },
    99 : {
        "name": "Tormenta eléctrica con Granizo pesado",
        "image_src": "https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-day-extreme-rain.svg"
    },
}


    return (
        <div className="grid-item" style={estilos.grilla}>
        <br></br>
        <span style={estilos.span2}>Air Quality</span>
        <br></br>
              <br></br>
              <img style={estilos.img} src={weatherCodeInfo[calidadDelAire].image_src} alt="Imagen "></img>
              <br></br>
              <span style={estilos.span3}>{weatherCodeInfo[calidadDelAire].name}</span>
        </div>
    );
  }
  export { CalidadAire };