import React from "react";
import InputBase from "@mui/material/InputBase";
import InputIcon from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";

export default function CustomizedInputBase() {
  return (
    <Paper 
        component="form"
        sx={{
        m: '5px auto', 
        p: "10px 4px", 
        display: "flex", 
        alignItems: "center", 
        width: '70%', 
        height: 50, 
        borderRadius: 4, 
        color: "#b394cb",
        border: '3px solid #b394cb', 
        backgroundColor: "rgb(241, 225, 254)",
       }}
        >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "#b394cb", fontWeight: "bold"}}
        placeholder="Zoek een plant"
        inputProps={{ "aria-label": "search" }}
      />

      <Button disabled><CloseIcon /></Button>
      <InputIcon type="submit" sx={{p: '10px'}} aria-label="search">
        <SearchIcon />
      </InputIcon>
    </Paper>
  );
}
