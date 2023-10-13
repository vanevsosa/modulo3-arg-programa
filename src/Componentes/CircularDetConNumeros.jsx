import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function CircularProgressWithLabel(props) {
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" {...props} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "x-large",
            color: "rgb(39 41 209)",
            fontWeight: "bolder",
            size: "100",
          }}
        >
          <Typography variant="h5" component="h1" fontWeight="bolder">
            {`${Math.round(props.value)}`}
            {/* si quisiera porcentaje, lo pongo luego de `` */}
          </Typography>
        </Box>
      </Box>
    );
  }
  
  CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
    value: PropTypes.number.isRequired,
  };
  
  function CircularDetConNumeros({uv, setUv}) {
  
  
    return (
      <CircularProgressWithLabel value={uv} />
    );
  }
  
  export { CircularDetConNumeros };