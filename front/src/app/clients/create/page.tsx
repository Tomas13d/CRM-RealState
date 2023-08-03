"use client";
import React, { useState } from "react";
import {
  TextField,
  Typography,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Box,
  Grid,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Layout from "../../commons/layout";

import { Client } from "../../types/types.md";
import axios from "axios";

const ClientForm: React.FC = () => {
  const initialState: Client = {
    first_name: "",
    last_name: "",
    email: "",
    is_buyer: false,
    is_owner: false,
    is_tenant: false,
  };

  const [newClient, setNewClient] = useState<Client>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewClient((previousClient) => ({
      ...previousClient,
      [name]: value,
    }));
  };

  const handleClientTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    let is_buyer = false;
    let is_owner = false;
    let is_tenant = false;

    if (value === "Comprador") {
      is_buyer = true;
    } else if (value === "dueño") {
      is_owner = true;
    } else if (value === "inquilino") {
      is_tenant = true;
    }

    setNewClient((previousClient) => ({
      ...previousClient,
      is_buyer,
      is_owner,
      is_tenant,
    }));
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const addedClient = await axios.post(
        "http://localhost:3001/api/clients/create",
        newClient
      );
      alert("Client created successfully");

      setNewClient(initialState);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Layout>
        <Box
          sx={{
            boxShadow: 3,
            borderRadius: 2,
            px: 4,
            py: 1,
            marginTop: 15,
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
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: "bold",
              alignSelf: "flex-start",
              marginBottom: "30px",
              marginRight: "40px",
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
            Ingresar Nuevo Cliente
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ margin: "20px" }}>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Nombre</Typography>
                <TextField
                  name="first_name"
                  value={newClient.first_name}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  sx={{
                    borderColor: "#FFFFFF",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                      "& fieldset": {
                        borderColor: "#FFFFFF",
                      },
                      color: "#FFFFFF",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="subtitle1">Apellido</Typography>
                <TextField
                  name="last_name"
                  value={newClient.last_name}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  type="tel"
                  sx={{
                    borderColor: "#FFFFFF",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                      "& fieldset": {
                        borderColor: "#FFFFFF",
                      },
                      color: "#FFFFFF",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1">Correo</Typography>
                <TextField
                  name="email"
                  value={newClient.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  type="email"
                  sx={{
                    borderColor: "#FFFFFF",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "50px",
                      "& fieldset": {
                        borderColor: "#FFFFFF",
                      },
                      color: "#FFFFFF",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  component="fieldset"
                  margin="normal"
                  sx={{ alignSelf: "flex-start" }}
                >
                  <FormLabel component="legend" sx={{ color: "white" }}>
                    Tipo de cliente
                  </FormLabel>
                  <RadioGroup
                    aria-label="tipo"
                    name="tipo"
                    value={
                      newClient.is_buyer
                        ? "Comprador"
                        : newClient.is_owner
                        ? "dueño"
                        : "inquilino"
                    }
                    onChange={handleClientTypeChange}
                    row
                  >
                    <FormControlLabel
                      value="dueño"
                      control={<Radio sx={{ color: "white" }} />}
                      label="Dueño"
                    />
                    <FormControlLabel
                      value="inquilino"
                      control={<Radio sx={{ color: "white" }} />}
                      label="Inquilino"
                    />
                    <FormControlLabel
                      value="Comprador"
                      control={<Radio sx={{ color: "white" }} />}
                      label="Comprador"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  sx={{
                    mt: 3,
                    mb: 2,
                    borderRadius: "50px",
                    width: "300px",
                    height: "50px",
                    alignSelf: "flex-start",
                  }}
                >
                  Agregar cliente
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Layout>
    </>
  );
};

export default ClientForm;
