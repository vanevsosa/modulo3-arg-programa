import Thermometer from "react-thermometer-component"
 
export default function Termometro(props){

  return(

    <Thermometer
    theme="dark"
    value={props["value"]}
    max="45"
    steps="1"
    format="°C"
    size="small"
    height="100"
    />
  );
}