import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const estilos = {
  grafico: {
    padding: "0",
  },
  minMax: {
    fontFamily: "-apple-system",
    color: "rgb(39 41 209)",
    border: "solid 9px #35476c",
    fontWeight: "bolder",
    maxHeight: "250px",
    backgroundColor: "#ffe5b4",
  },
};

function GraficoBarSimple({grafTempXHora}) {
  
  return (
    <div style={estilos.minMax}>
      <BarChart
        spacing={2}
        xAxis={[
          {
            id: "barCategories",
            data: ["12AM", "3AM", "6AM", "9AM", "12AM", "3PM", "6PM", "9PM"],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: grafTempXHora,
            color: "#298482"
          },
        ]}
        width={450}
        height={250}
        padding={0}
      />
    </div>
  );
}
export { GraficoBarSimple };