"use client";
import React, { Dispatch, SetStateAction } from "react";
import { Typography, TextField, InputAdornment, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface HeaderPageProps {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const HeaderPage: React.FC<HeaderPageProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <>
      {" "}
      <Typography
        component="h1"
        variant="h5"
        sx={{
          fontSize: "35px",
          mt: 2,
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: "bold",
          alignSelf: "flex-start",
          marginBottom: "30px",
          marginRight: "40px",
          color: "white",
        }}
      >
        <IconButton
          onClick={() => window.history.back()}
          color="primary"
          sx={{
            marginRight: "10px",
            color: "white",
            backgroundColor: "#6878D6",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#5878D6",
            },
          }}
        >
          <ArrowBackIcon />
        </IconButton>{" "}
        Alquileres
      </Typography>
      <Grid container spacing={2} sx={{ margin: "10px", alignItems: "center" }}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ color: "white", mt: 1 }}>
            Buscar
          </Typography>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
        </Grid>
      </Grid>
    </>
  );
};
export default HeaderPage;
