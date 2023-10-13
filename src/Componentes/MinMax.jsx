
const estilos = {
  minMax: {
    fontFamily: "-apple-system",
    color: "rgb(39 41 209)",
    padding: "18px 2em",
    border: "solid 9px #35476c",
    fontWeight: "bolder",
    backgroundColor: "#ffda9e",
  },
  container: {
    display: "grid",
    columnGap: "10px",
    gridTemplateColumns: "auto auto",
    maxWidth: "550px",
    margin: "0 auto",
    padding: "25px 25px",
    height: "auto",
  },
  span: {
    fontSize:"xxx-large",
  },
  span3: {
    fontSize:"xx-large",
  },
};

function MinMax({tempMinMax, setTempMinMax}){
  
  return (
      <div style={estilos.container}>
          <div style={estilos.minMax}>
            <span style={estilos.span}>{tempMinMax.max}</span>
            <br></br>
            <br></br>
            <span style={estilos.span}>🌤️</span>
            <br></br>
            <br></br>
            <span style={estilos.span3}>High</span>
          </div>  
          <div style={estilos.minMax}>
            <span style={estilos.span}>{tempMinMax.min}</span>
            <br></br>
            <br></br>
            <span style={estilos.span}>🌛</span>
            <br></br>
            <br></br>
            <span style={estilos.span3}>Low</span>
          </div>
       </div>)
}
export {MinMax};