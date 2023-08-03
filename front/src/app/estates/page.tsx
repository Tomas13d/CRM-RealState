"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Grid,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Layout from "../commons/layout";
import SearchIcon from "@mui/icons-material/Search";
import CustomList from "../commons/listCommon";
import { getAllEstates } from "../services/estates.services";
import { Estate } from "../types/types.md";
import SingleEstateModal from "./SingleEstateModal";
import PrimaryButton from "../commons/buttons/primaryButton";

import columns from "./columns";

const Properties: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [estates, setEstates] = useState([]);

  const handleGetEstates = async () => {
    const fetchedEstates = await getAllEstates();
    setEstates(fetchedEstates);
  };
 

  useEffect(() => {
    handleGetEstates();
  }, []);
  const filteredData = estates.filter((estate: Estate) =>
    estate.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {" "}
    
        <Layout>
          <Container component="main" maxWidth="xl">
            <Box
              sx={{
                px: 4,
                py: 1,
                marginTop: 10,
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                background: "transparent",
              }}
            >
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
                Propiedades
              </Typography>
              <Grid
                container
                spacing={2}
                sx={{ margin: "10px", alignItems: "center" }}
              >
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", mt: 1 }}
                  >
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

                  <PrimaryButton>Agregar Propiedad</PrimaryButton>
                </Grid>
              </Grid>

              <CustomList
                columns={columns}
                data={filteredData.map((estate: Estate) => ({
                  ...estate,
                  button: (
                    <SingleEstateModal estateData={estate}></SingleEstateModal>
                  ),
                }))}
              />
            </Box>
          </Container>
        </Layout>

    </>
  );
};

export default Properties;
