import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import StepLabel from '@mui/material/StepLabel';

export default function PriceSlider() {
  const [value, setValue] = useState<number []>([40, 210]);

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
        color: "black",

      }}
    >
      <StepLabel sx={{
        color: "black",
        padding: "0 10px",
      }}>€{value[0]}</StepLabel>
      <Slider
        min={0}
        max={250}
        placeholder="prijs van de plant"
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
      />
      <StepLabel sx={{
        color: "black",
        padding: "0 10px",
      }}>€{value[1]}</StepLabel>

    </Box>
  );
}