import * as React from "react";

const estilos = {
  grilla: {
    backgroundColor: "#c5e0dc",
    border: "5px solid #10113b",
    fontSize: "medium",
    textAlign: "center",
    height: "auto",
  },
  span: {
    fontSize: "xx-large",
    color: "rgb(39 41 209)",
    fontWeight: "bolder",
  },
  span2: {
    fontSize: "large",
    fontWeight: "bolder",
  },
};

function IndiceUV({uv, setUv}) {
  return (
    <div className="grid-item" style={estilos.grilla}>
      <br></br>
      <span style={estilos.span2}>UV Index</span>
      <br></br>
      <span style={estilos.span}>⛱️ </span>
  
    </div>
  );
}
export { IndiceUV };