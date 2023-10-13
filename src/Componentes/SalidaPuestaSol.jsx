
const estilos = {  
  grilla: {
    backgroundColor: "#c5e0dc",
    border: "5px solid #10113b",
    fontSize: "medium",
    textAlign: "center",
    height: "auto",
  },
  span2: {
    fontSize:"large",
    fontWeight: "bolder",
  },
  span4: {
    fontSize:"large",
    fontWeight: "bolder",
    color: "rgb(39 41 209)",
  },
};

function SalidaPuestaSol({salidaYPuestaSol}) {
  return (     
        <div className="grid-item" style={estilos.grilla}>
        <br></br>
        <span style={estilos.span2}>Sunrise</span>
              <br></br>
              <span style={estilos.span4}>🌅</span>
              <span style={estilos.span4}>{salidaYPuestaSol.min}</span>
              <br></br>
              <br></br>
              <span style={estilos.span2}>Sunset</span>
              <br></br>
              <span style={estilos.span4}>🌄</span>
              <span style={estilos.span4}>{salidaYPuestaSol.max}</span>
              <br></br>
        </div>      
  );
}
export { SalidaPuestaSol };