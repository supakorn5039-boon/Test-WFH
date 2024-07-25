import { Box, TextField, InputAdornment } from "@mui/material";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <Box
      mb={2}
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <TextField
        sx={{
          borderRadius: "9999px",
          "& .MuiInputBase-root": {
            borderRadius: "9999px",
          },
          backgroundColor: "#e5e7eb",
          width: "350px",
        }}
        placeholder="ค้นหา"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaSearch />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
