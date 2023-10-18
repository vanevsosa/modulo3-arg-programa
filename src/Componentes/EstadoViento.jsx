const estilos = {    
  grilla: {
    backgroundColor: "#c5e0dc",
    border: "5px solid #10113b",
    fontSize: "medium",
    textAlign: "center",
  },
  span: {
    fontSize:"x-large",
    color: "rgb(39 41 209)",
    fontWeight: "bolder",
  },
  span2: {
    fontSize:"large",
    fontWeight: "bolder",
  }, 
};

function EstadoViento({windStatus}) {
  return (
        <div className="grid-item" style={estilos.grilla}>
         <br></br>
        <span style={estilos.span2}>Wind Status</span>
              <br></br>
              <span style={estilos.span}>🍃</span>
              <span style={estilos.span}>{windStatus} Km/h</span>
        </div>
  );
}
export { EstadoViento };
