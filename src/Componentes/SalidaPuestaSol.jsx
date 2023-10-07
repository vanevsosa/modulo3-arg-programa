
const estilos = {  
  grilla: {
    backgroundColor: "#c5e0dc",
    border: "5px solid #10113b",
    fontSize: "medium",
    textAlign: "center",
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

function SalidaPuestaSol({salidaYPuestaSol, setSalidaYPuestaSol}) {
  return (
     
      
        <div className="grid-item" style={estilos.grilla}>
        <br></br>
        <span style={estilos.span2}>Sunrise</span>
              <br></br>
              <span style={estilos.span4}>🌅</span>
              <span style={estilos.span4}>6:35 AM</span>
              <br></br>
              <span style={estilos.span2}>Sunset</span>
              <br></br>
              <span style={estilos.span4}>🌄</span>
              <span style={estilos.span4}>7:22PM</span>
              <br></br>
              <br></br>
        </div>
        
     
  );
}
export { SalidaPuestaSol };