import * as React from "react";

const estilos = {
  grilla: {
    backgroundColor: "#c5e0dc",
    border: "5px solid #10113b",
    fontSize: "medium",
    textAlign: "center",
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
  span3: {
    fontSize: "large",
    fontWeight: "bolder",
  },
  span4: {
    fontSize: "large",
    fontWeight: "bolder",
    color: "rgb(39 41 209)",
  },
};

function IndiceUV({uv, setUv}) {
  return (
    <div className="grid-item" style={estilos.grilla}>
      <br></br>
      <span style={estilos.span2}>UV Index</span>
      <br></br>
      <br></br>

      <span style={estilos.span}>⛱️ </span>
  
    </div>
  );
}
export { IndiceUV };