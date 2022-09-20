import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import StepLabel from "@mui/material/StepLabel";

export default function DiameterSlider() {
  const [value, setValue] = useState<number []>([20, 60]);
  const [minDiameter, setMinDiameter] = useState<number>(20);
  const [maxDiameter, setMaxDiameter] = useState<number>(60);


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
      margin: "20px auto",
    }}
      >
      <StepLabel sx={{
        color: "black",
        padding: "0 10px",
      }}>{value[0]}cm</StepLabel>
      <Slider
        getAriaLabel={() => "diameter range"}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue as number[]);
          setMinDiameter(newValue[0]);
          setMaxDiameter(newValue[1]);
        }}
        valueLabelDisplay="auto"
        min={20}
        max={200}
        sx={{
          color: "#b394cb",
          height: 5,

        }}
      />
      <StepLabel sx={{
        color: "black",
        padding: "0 10px",
      }}>{value[1]}cm</StepLabel>
    </Box>
  );
}