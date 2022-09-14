import React from "react";
import InputBase from "@mui/material/InputBase";
import InputIcon from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export default function CustomizedInputBase() {
  return (
    <Paper 
        component="form"
        sx={{m: '0 auto', p: "10px 4px", display: "flex", alignItems: "center", width: '40%', height: 50, borderRadius: 4, border: 'solid 1px', backgroundColor: "#eaf8e7" }}
        >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />

      <Button disabled>Del</Button>
      <InputIcon type="submit" sx={{p: '10px'}} aria-label="search">
        <SearchIcon />
      </InputIcon>
    </Paper>
  );
}
