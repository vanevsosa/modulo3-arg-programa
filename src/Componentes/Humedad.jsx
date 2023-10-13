
const estilos = {
  grilla: {
    backgroundColor: "#c5e0dc",
    border: "5px solid #10113b",
    fontSize: "medium",
    textAlign: "center",
    display: "grid",
    flex: "1 0 100px",
    height: "auto",
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
    fontSize: "large",
    fontWeight: "bolder",
  },
};

function Humedad({humedad} ) {
  return (
    <div className="grid-item" style={estilos.grilla}>
    <br></br>
      <span style={estilos.span2}>Humidity</span>
      <br></br>
      <span style={estilos.span}>⛈️</span>
      <span style={estilos.span}>{humedad} %</span>
      <br></br>
      <span style={estilos.span3}>Normal</span>
    </div>
  );
}
export { Humedad };