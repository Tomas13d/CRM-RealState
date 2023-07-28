import { TextField, InputAdornment, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

interface CommonTextFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const CommonSearch: React.FC<CommonTextFieldProps> = ({ value, onChange }) => {
  return (
    <>
      <Typography variant="subtitle1" sx={{ color: "white", mt: 3 }}>
        Buscar
      </Typography>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "white" }} />
            </InputAdornment>
          ),
          sx: {
            color: "white",
            backgroundColor: "#2A3541",
            borderRadius: "20px",
            overflow: "hidden",
            mt: 1,
          },
        }}
        inputProps={{
          style: { color: "white" },
        }}
      />
    </>
  );
};

export default CommonSearch;
