
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import styled from "styled-components";

const StyledDivTempsDia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border: 3px solid #222C32;
  height: 200px;
  padding: 10px;
`;

export default function TempsDelDia (props){

  return(
    
    <StyledDivTempsDia>

      <p>&#127777; - Temperaturas del dia de hoy - &#127777;</p>

      <LineChart width={350} height={150} data={props["data"]}>
        <Line type="monotone" dataKey="temp" stroke="#222C32" />
        <XAxis dataKey="hora" stroke="blacksmoke"/>
        <YAxis stroke="blacksmoke"/>
        <Tooltip />
      </LineChart>

    </StyledDivTempsDia>
  );
}
           
      
      
     
     
     
     
      
