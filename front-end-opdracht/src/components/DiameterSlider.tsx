import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import StepLabel from "@mui/material/StepLabel";

export default function DiameterSlider() {
  const [value, setValue] = useState<number []>([20, 60]);

    const handleChange = (event: Event, newValue: number | number[]) => { 
        setValue(newValue as number[]);
    };



  return (
    <Box
      sx={{
        width: 300,
        borderWidth: 1,
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",

      }}
    >
      <StepLabel sx={{
        color: "black",
        padding: "0 10px",
      }}>{value[0]}cm</StepLabel>
      <Slider
        min={0}
        max={80}
        getAriaLabel={() => "height range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
      <StepLabel sx={{
        color: "black",
        padding: "0 10px",
      }}>{value[1]}cm</StepLabel>
    </Box>
  );
}