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
        m: '0 auto', 
        p: "10px 4px", 
        display: "flex", 
        alignItems: "center", 
        width: '50%', 
        height: 50, 
        borderRadius: 4, 
        border: 'solid 1px', 
        backgroundColor: "white" }}
        >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
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
